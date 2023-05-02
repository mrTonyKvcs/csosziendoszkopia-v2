<?php

namespace App\Http\Controllers\Api;

use App\Exports\ConsultationExport;
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
        $fileName = Str::slug($request->day) . '.xlsx';
        $export = new ConsultationExport($request->all());

        return Excel::download($export, $fileName, null, [
            'Cache-Control' => 'max-age=0, no-cache, must-revalidate',
            'Pragma' => 'no-cache',
            'Expires' => 'Fri, 01 Jan 1990 00:00:00 GMT',
            'Content-Type' => 'application/vnd.ms-excel',
            'Content-Disposition' => 'attachment; filename="' . $fileName . '"',
        ]);
    }
}
