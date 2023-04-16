<?php

namespace App\Http\Traits;

use App\Models\Applicant;

trait ApplicantTrait
{
    public function checkSocialSecurityNumber($socialSecurityNumber)
    {
        $checkSocialSecurityNumber = Applicant::where('social_security_number', $socialSecurityNumber)
            ->where('is_black_listed', true)
            ->first();

        if (collect($checkSocialSecurityNumber)->isNotEmpty()) {
            return true;
        }

        return false;
    }
}
