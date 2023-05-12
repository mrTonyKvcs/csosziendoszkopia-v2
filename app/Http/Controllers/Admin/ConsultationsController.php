<?php

namespace App\Http\Controllers\Admin;

use App\Exports\ConsultationExport;
use App\Http\Controllers\Controller;
use App\Http\Resources\AppointmentResource;
use App\Http\Resources\ArchiveDoctorResource;
use App\Http\Resources\DoctorResource;
use App\Http\Resources\MedicalExaminationResource;
use App\Http\Traits\ConsultationTrait;
use App\Models\Appointment;
use App\Models\Consultation;
use App\Models\ConsultationTemplate;
use App\Models\MedicalExamination;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Str;

class ConsultationsController extends Controller
{
    use ConsultationTrait;

    public function index()
    {
        Artisan::call('app:delete-reservation');
        $doctors = User::doctors()->get();
        $doctorsWithConsultations = User::doctors()->activeConsultations()->get();
        $templates = ConsultationTemplate::all();

        return Inertia::render('Admin/Consultations/Index', [
            'defaultData' => DoctorResource::collection($doctorsWithConsultations),
            'templates' => $templates,
            'doctors' => $doctors,
        ]);
    }

    public function show($doctorId, $day)
    {
        Artisan::call('app:delete-reservation');
        $doctor = User::find($doctorId);
        $appointments = Appointment::query()
            ->whereHas('consultation', function ($q) use ($doctorId, $day) {
                $q
                    ->where('user_id', $doctorId)
                    ->where('day', $day);
            })
            ->get();
        $examinations = MedicalExamination::isActive()->get();

        return Inertia::render('Admin/Consultations/Show', [
            'doctor' => $doctor,
            'day' => $day,
            'defaultAppointments' => AppointmentResource::collection($appointments),
            'examinations' => MedicalExaminationResource::collection($examinations)
        ]);
    }

    public function archive()
    {
        Artisan::call('app:delete-reservation');
        $doctors = User::doctors()->get();
        $doctorsWithConsultations = User::doctors()->archiveConsultations()->get();
        $templates = ConsultationTemplate::all();

        return Inertia::render('Admin/Consultations/Archive', [
            'defaultData' => ArchiveDoctorResource::collection($doctorsWithConsultations),
            'templates' => $templates,
            'doctors' => $doctors,
        ]);
    }
}
