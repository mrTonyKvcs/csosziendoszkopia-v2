<?php

namespace App\Http\Controllers;

use App\Models\DoctorMedicalExamination;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AppointmentController extends Controller
{
    public function index(Request $request, User $user)
    {
        $config = config('site.medical-examinations');
        $doctors = User::doctors()->get();
        $doctor = User::find($user->id);
        if ($doctor) {
            $examinations = DoctorMedicalExamination::query()
                ->where('user_id', $doctor->id)
                ->where('is_active', true)
                ->with('medicalExamination')
                ->get();
        }

        return Inertia::render('Appointment/Index', [
            'config' => $config,
            'doctors' => $doctors,
            'doctor' => $doctor,
            'medicalExaminations' => isset($examinations) ? $examinations : null
        ]);
    }
}
