<?php

namespace App\Http\Resources;

use App\Models\Payment;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AppointmentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'time' => $this->time,
            'medicalExamination' => $this->medicalExamination,
            'applicant' => $this->applicant,
            'payment' => Payment::query()
                ->where('paymentable_id', $this->id)
                ->where('applicant_id', $this->applicant->id ?? 0)
                ->first(),
        ];
    }
}
