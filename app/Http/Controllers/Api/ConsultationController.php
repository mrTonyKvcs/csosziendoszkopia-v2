<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\DoctorResource;
use App\Models\Appointment;
use App\Models\Consultation;
use App\Models\User;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Str;

class ConsultationController extends Controller
{
    public function store(Request $request)
    {
        $consultation = Consultation::create($request->only('user_id', 'day', 'open', 'close'));

        collect($request->appointments)
            ->where('breaktime', false)
            ->each(function ($appointment) use ($consultation) {
                $appointment['consultation_id'] = $consultation->id;
                $newAppointmentData = collect($appointment)->only('consultation_id', 'start_at', 'end_at')->toArray();
                Appointment::updateOrCreate($newAppointmentData);
            });

        $doctors = User::doctors()->activeConsultations()->get();
        $data = DoctorResource::collection($doctors);

        return response($data);
    }

    public function export(Request $request)
    {
        return Excel::download(new ConsultationExport($request->appointments), Str::slug($request->day) . '.xlsx');
    }
}
