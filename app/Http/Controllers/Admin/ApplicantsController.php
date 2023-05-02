<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ApplicantResource;
use App\Models\Applicant;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ApplicantsController extends Controller
{
    public function index()
    {
        $applicants = Applicant::orderBy('created_at')->get();

        return Inertia::render('Admin/Applicants/Index', [
            'applicants' => ApplicantResource::collection($applicants)
        ]);
    }
}
