<?php

namespace App\Http\Traits;

use App\Models\Consultation;
use App\Models\User;

trait ConsultationTrait
{
    public function getActiveConsultations()
    {
        return Consultation::query()
            ->active()
            ->orderByDesc('day')
            ->get();
    }
}
