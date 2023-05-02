<?php

namespace App\Http\Resources;

use App\Models\Appointment;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DoctorResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $today = Carbon::today()->format('Y-m-d');

        return [
            'id' => $this->id,
            'name' => $this->name,
            'consultations' => $this->consultations
                ->filter(function ($consultation) use ($today) {
                    return $consultation->day >= $today;
                })
                ->sortBy('day')
                ->values()
                ->groupBy('day')
                ->map(function ($groupedConsultations, $key) {
                    $minOpen = $groupedConsultations->min('open');
                    $minClose = $groupedConsultations->max('close');
                    $appointments = Appointment::query()
                        ->whereHas('consultation', function ($q) use ($key) {
                            $q
                                ->where('user_id', $this->id)
                                ->where('day', $key);
                        })
                        ->with('applicant', 'medicalExamination', 'consultation')
                        ->orderBy('start_at')
                        ->get();

                    return [
                        'doctorId' => $this->id,
                        'day' => $key,
                        'open' => $minOpen,
                        'close' => $minClose,
                        'appointments' => $appointments
                    ];
                })
        ];
    }
}
