<?php

namespace App\Http\Controllers;

use App\Http\Traits\MailTrait;
use App\Models\Applicant;
use App\Models\Appointment;
use App\Models\Payment;
use App\Models\Status;
use App\Http\Traits\InvoiceTrait;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Laravel\SerializableClosure\Signers\Hmac;
use PhpParser\Node\Stmt\TryCatch;
use SimplePay\SimplePayStart;
use SimplePay\SimplePayBack;
use SimplePay\SimplePayIpn;
use Throwable;

class PaymentController extends Controller
{
    use MailTrait;
    use InvoiceTrait;

    protected $config;

    public function __construct()
    {
        $this->config = config('site.simplepay');
    }


    public function start(Request $request)
    {
        $applicant = Applicant::find($request->applicant);
        $appointment = Appointment::find($request->appointment);

        $trx = new SimplePayStart();

        $currency = 'HUF';
        $trx->addData('currency', $currency);

        $trx->addConfig($this->config);
        $trx->addData('total', $this->config['DEFAULT_PRICE']);


        $trx->addItems(
            array(
                'ref' => 'CSE-' . $appointment->id,
                'title' => 'Vizsgálat: ' . $appointment->medicalExamination->name,
                'desc' => 'Vizsgálat előlege',
                'amount' => 1,
                'price' => $this->config['DEFAULT_PRICE'],
                // 'tax' => '27',
            )
        );

        $trx->addData('maySelectEmail', true);
        $trx->addData('maySelectInvoice', true);

        $trx->addData('orderRef', str_replace(array('.', ':', '/'), "", @$_SERVER['SERVER_ADDR']) . @date("U", time()) . rand(1000, 9999));


        $trx->addData('customer', $applicant->name);

        $trx->addData('threeDSReqAuthMethod', '02');


        $trx->addData('customerEmail', $applicant->email);


        $trx->addData('language', 'HU');


        if (isset($_REQUEST['twoStep'])) {
            $trx->addData('twoStep', true);
        }

        $timeoutInSec = 600;
        $timeout = @date("c", time() + $timeoutInSec);
        $trx->addData('timeout', $timeout);


        $trx->addData('methods', array('CARD'));


        $trx->addData('url', $this->config['URL']);

        // $trx->addGroupData('urls', 'success', $config['URLS_SUCCESS']);
        // $trx->addGroupData('urls', 'fail', $config['URLS_FAIL']);
        // $trx->addGroupData('urls', 'cancel', $config['URLS_CANCEL']);
        // $trx->addGroupData('urls', 'timeout', $config['URLS_TIMEOUT']);


        $trx->addGroupData('mobilApp', 'simpleAppBackUrl', 'myAppS01234://payment/123456789');


        $trx->addGroupData('invoice', 'name', $applicant->name);
        // $trx->addGroupData('invoice', 'company', '');
        $trx->addGroupData('invoice', 'country', 'hu');
        // $trx->addGroupData('invoice', 'state', 'Budapest');
        $trx->addGroupData('invoice', 'city', $applicant->city);
        $trx->addGroupData('invoice', 'zip', $applicant->zip);
        $trx->addGroupData('invoice', 'address', $applicant->street);
        // $trx->addGroupData('invoice', 'address2', 'Address 2');
        $trx->addGroupData('invoice', 'phone', $applicant->phone);

        $trx->formDetails['element'] = 'button';

        $trx->runStart();

        $trx->getHtmlForm();

        $appointment->payment()->create([
            'status' => Status::START_PAYMENT,
            'transaction_id' => $trx->returnData['transactionId'],
            'order_ref' => $trx->returnData['orderRef']
        ]);

        return response($trx->returnData['paymentUrl']);

        // return redirect()->to($trx->returnData['paymentUrl']);
        // ->header('X-Redirect-To', $trx->returnData['paymentUrl'])
        // ->header('Access-Control-Allow-Origin', '*')
        // ->header('Access-Control-Allow-Methods', '*')
        // ->header('Access-Control-Allow-Credentials', true)
        // ->header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,X-Token-Auth,Authorization')
        // ->header('Accept', 'application/json');
    }

    public function back()
    {
        $trx = new SimplePayBack();

        $trx->addConfig($this->config);


        //result
        //-----------------------------------------------------------------------------------------
        $result = array();
        if (isset($_REQUEST['r']) && isset($_REQUEST['s'])) {
            if ($trx->isBackSignatureCheck($_REQUEST['r'], $_REQUEST['s'])) {
                $result = $trx->getRawNotification();
            }
        }

        if ($result['e'] === 'SUCCESS') {
            $payment = Payment::query()
                ->where('transaction_id', $result['t'])
                ->where('order_ref', $result['o'])
                ->firstOrFail();

            $payment->update(['status' => Status::END_PAYMENT]);

            $appointment = $payment->paymentable;

            $invoiceNumber = $this->createInvoice($payment);

            $this->sendMessages($appointment, $appointment->applicant, $invoiceNumber);

            return redirect()->route('payments.greeting', $appointment->id);
        } else {
            $payment = Payment::query()
                ->where('transaction_id', $result['t'])
                ->where('order_ref', $result['o'])
                ->firstOrFail();

            $appointment = Appointment::find($payment->paymentable->id);

            $appointment->update([
                'medical_examination_id' => null,
                'applicant_id' => null
            ]);

            switch ($result['e']) {
                case 'CANCEL':
                    $payment->update(['status' => Status::CANCEL_PAYMENT]);
                    break;

                case 'FAIL':
                    $payment->update(['status' => Status::FAIL_PAYMENT]);
                    break;

                case 'TIMEOUT':
                    $payment->update(['status' => Status::TIMEOUT_PAYMENT]);
                    break;
            }

            return redirect()->route('pages.payment-error', $payment->id);
        }
    }

    public function ipn(Request $request)
    {
        $json = $request->all();

        try {
            $json['receiveDate'] = now();
            $signature = base64_encode(hash_hmac('sha384', json_encode($json), trim('5bMcopOlH1F2LmnfC36S4uvWW5Ws23Lm'), true));

            return response($json, 200)
                ->header('Content-Type', 'application/json')
                ->header('Signature', $signature);
        } catch (Throwable $e) {
            Log::error($e);
            dd($e);
        }

        //no need to print further information
        exit;
    }

    public function paymentError(Payment $payment)
    {
        return view('payments.error', [ 'transaction' => $payment]);
    }

    public function greeting(Appointment $appointment)
    {
        $transactionId = $appointment->payment->transaction_id;

        return view('payments.greeting', [
            'appointment'   => $appointment,
            'transactionId'      => $transactionId
        ]);
    }
}
