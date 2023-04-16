<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PersonalDetailsRequest;
use App\Models\Appointment;
use App\Models\Consultation;
use App\Models\DoctorMedicalExamination;
use App\Models\MedicalExamination;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
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
}
