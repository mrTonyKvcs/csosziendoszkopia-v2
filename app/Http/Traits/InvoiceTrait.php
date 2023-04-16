<?php

namespace App\Http\Traits;

use App\Models\Invoice as InvoiceModel;
use SzamlaAgent\SzamlaAgentAPI;
use SzamlaAgent\Buyer;
use SzamlaAgent\Document\Invoice\Invoice;
use SzamlaAgent\Item\InvoiceItem;
use Illuminate\Support\Str;
use SzamlaAgent\Document\Invoice\PrePaymentInvoice;
use SzamlaAgent\Header\InvoiceHeader;
use SzamlaAgent\Header\PrePaymentInvoiceHeader;

trait InvoiceTrait
{
    public function createInvoiceModel($paymentId, $invoiceNumber)
    {
        return InvoiceModel::create([
            'payment_id' => $paymentId,
            'invoice_number' => $invoiceNumber
        ]);
    }

    public function createInvoice($data)
    {
        $applicant = $data->appointment->applicant;

        $medicalExamination = $data->appointment->medicalExamination->name;
        $apiKey = config('site.szamlazzhu.KEY');
        $price = intval(config('site.szamlazzhu.PRICE'));
        $priceWithoutTax = $price / 1.27;
        $tax = $price - $priceWithoutTax;
        $agent = SzamlaAgentAPI::create($apiKey);

        $invoice = new Invoice(Invoice::INVOICE_TYPE_E_INVOICE);

        // Vevő adatainak hozzáadása (kötelezően kitöltendő adatokkal)
        $invoice->setBuyer(new Buyer($applicant->name, strval($applicant->zip), $applicant->city, $applicant->street . ' ' . $applicant->house_number));
        // Számla tétel összeállítása alapértelmezett adatokkal (1 db tétel 27%-os ÁFA tartalommal)
        $item = new InvoiceItem('Regisztrációs d', $price);
        // Tétel nettó értéke
        $item->setNetPrice($price);
        // Tétel ÁFA értéke
        $item->setVat('TAM');
        $item->setVatAmount(0.0);

        // Tétel bruttó értéke
        $item->setGrossAmount($price);

        $item->setComment('ÁFA mentes az ÁFA tv. 85§ (1) bek.c. pont alapján');
        // Tétel hozzáadása a számlához
        $invoice->addItem($item);

        // Számla elkészítése
        $result = $agent->generateInvoice($invoice);
        // Agent válasz sikerességének ellenőrzése
        if ($result->isSuccess()) {
            // echo 'A számla sikeresen elkészült. Számlaszám: ' . $result->getDocumentNumber();
            // Válasz adatai a további feldolgozáshoz
            // var_dump($result->getDataObj());
            $this->createInvoiceModel($data->id, $result->getDocumentNumber());
            return $result->getDocumentNumber();
        }
    }
}
