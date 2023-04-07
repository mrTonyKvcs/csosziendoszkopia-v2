<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;

class PagesController extends Controller
{
    public function index()
    {
        $services = config('site.services');

        return Inertia::render('Welcome', [
            'services' => $services
        ]);
    }
}
