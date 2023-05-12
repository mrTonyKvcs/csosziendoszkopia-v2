<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PersonalDetailsRequest;
use App\Http\Resources\AppointmentResource;
use App\Models\Applicant;
use App\Models\Appointment;
use App\Models\Consultation;
use App\Models\DoctorMedicalExamination;
use App\Models\MedicalExamination;
use App\Models\Payment;
use App\Models\Status;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    public function cancel(Appointment $appointment)
    {
        $payment = Payment::query()
            ->where('paymentable_id', $appointment->id)
            ->where('applicant_id', $appointment->applicant->id)
            ->update(['status' => Status::DELETE]);

        $appointment->update(['medical_examination_id' => null, 'applicant_id' => null]);

        return response()->json(['success' => true]);
    }

    public function delete(Appointment $appointment)
    {
        $appointment->delete();
        return response()->json(['success' => true]);
    }

    public function getExaminations($id)
    {
        $examinations = DoctorMedicalExamination::query()
            ->where('user_id', $id)
            ->where('is_active', true)
            ->with('medicalExamination')
            ->get();

        return response($examinations);
    }

    public function getConsultations($userId, MedicalExamination $medicalExamination)
    {
        $consultations = Consultation::query()
            ->active()
            ->where('user_id', $userId)
            ->where('day', '>', $medicalExamination->id === 2 ? now()->addDays(5) : now())
            ->whereHas('appointments', function ($q) {
                $q->whereNull('applicant_id');
            })
            ->orderBy('day')
            ->orderBy('open')
            ->get();

        $groupedConsultations = $consultations->groupBy('day')->map(function ($groupedConsultations, $key) use ($userId, $medicalExamination) {
            $minOpen = $groupedConsultations->min('open');
            $minClose = $groupedConsultations->max('close');
            return [
                'user_id' => $userId,
                'medical_examination_id' => $medicalExamination->id,
                'day' => $key,
                'open' => $minOpen,
                'close' => $minClose,
            ];
        });

        return response($groupedConsultations);
    }

    public function getAppointments($userId, $medicalExaminationId, $day)
    {
        $examination = DoctorMedicalExamination::query()
            ->where('user_id', $userId)
            ->where('medical_examination_id', $medicalExaminationId)
            ->where('is_active', true)
            ->firstOrFail();

        $appointments = Appointment::query()
            ->whereNull('applicant_id')
            ->whereNull('medical_examination_id')
            ->whereHas('consultation', function ($q) use ($userId, $day) {
                $q
                    ->where('user_id', $userId)
                    ->where('day', $day);
            })
            ->whereRaw("TIMESTAMPDIFF(MINUTE, start_at, end_at) = $examination->minutes")
            ->get();

        return response($appointments);
    }

    public function personalDetailsValidation(PersonalDetailsRequest $request)
    {
        return response($request->all());
    }

    public function reservation(Request $request)
    {

        $data = $request->all();
        $data['personalDetails']['social_security_number'] = $data['personalDetails']['socialSecurityNumber'];
        $applicant = Applicant::create($data['personalDetails']);
        $appointment = Appointment::find($data['appointment']['id']);
        $appointment->update(['medical_examination_id' => $data['examination']['medical_examination']['id']]);

        return redirect()->route('payment.start', [
            'applicant' => $applicant,
            'appointment' => $appointment
        ]);
    }

    public function setReservation(Request $request)
    {
        $appointment = Appointment::find($request->appointmentId);
        $appointment->update(['medical_examination_id' => $request->medicalExaminationId]);
        return response(200);
    }

    public function adminReservation(Request $request)
    {
        $applicant = Applicant::create([
            'name' => $request->applicantName,
            'email' => $request->applicantEmail,
            'phone' => $request->applicantPhone
        ]);

        $appointment = Appointment::find($request->appointmentId);
        $appointment->update([
            'medical_examination_id' => $request->medicalExaminationId,
            'applicant_id' => $applicant->id,
        ]);

        $appointment->payment()->create([
            'status' => Status::CASH,
            'transaction_id' => 0000000,
            'order_ref' => 000000000,
            'applicant_id' => $applicant->id
        ]);
        $appointments = Appointment::query()
                    ->whereHas('consultation', function ($q) use ($appointment) {
                        $q
                            ->where('user_id', $appointment->consultation->user_id)
                            ->where('day', $appointment->consultation->day);
                    })
                    ->get();

        return response(AppointmentResource::collection($appointments));
    }
}
