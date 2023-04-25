<?php

namespace App\Http\Resources;

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
                    return [
                        'day' => $key,
                        'open' => $minOpen,
                        'close' => $minClose,
                    ];
                })
                // ->map(function ($consultation) {
                //     $hasNonEmptyAppointment = $consultation->appointments->filter(function ($appointment) {
                //         return !empty($appointment->applicant_id) && !empty($appointment->examination_id);
                //     })->isNotEmpty();

                //     return [
                //         'type' => $consultation->type->name,
                //         'office' => $consultation->office->name,
                //         'day' => $consultation->day,
                //         'open' => $consultation->open,
                //         'close' => $consultation->close,
                //         'isFull' => $hasNonEmptyAppointment,
                //         'appointments' => $consultation->appointments->map(function ($appointment) {
                //             return [
                //                 'start_at' => $appointment->start_at,
                //                 'end_at' => $appointment->end_at
                //             ];
                //         })
                //     ];
                // })
        ];
    }
}
