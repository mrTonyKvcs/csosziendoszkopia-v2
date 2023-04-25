<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\DoctorResource;
use App\Http\Traits\ConsultationTrait;
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
}
