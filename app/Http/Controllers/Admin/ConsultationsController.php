<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\AppointmentResource;
use App\Http\Resources\DoctorResource;
use App\Http\Traits\ConsultationTrait;
use App\Models\Appointment;
use App\Models\Consultation;
use App\Models\ConsultationTemplate;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ConsultationsController extends Controller
{
    use ConsultationTrait;

    public function index()
    {
        $doctors = User::doctors()->get();
        $doctorsWithConsultations = User::doctors()->activeConsultations()->get();
        $templates = ConsultationTemplate::all();

        return Inertia::render('Admin/Consultations/Index', [
            'defaultData' => DoctorResource::collection($doctorsWithConsultations),
            'templates' => $templates,
            'doctors' => $doctors
        ]);
    }

    public function show($doctorId, $day)
    {
        $doctor = User::find($doctorId);
        $appointments = Appointment::query()
            ->whereHas('consultation', function ($q) use ($doctorId, $day) {
                $q
                    ->where('user_id', $doctorId)
                    ->where('day', $day);
            })
            ->get();

        return Inertia::render('Admin/Consultations/Show', [
            'doctor' => $doctor,
            'day' => $day,
            'defaultAppointments' => AppointmentResource::collection($appointments)
        ]);
    }
}
