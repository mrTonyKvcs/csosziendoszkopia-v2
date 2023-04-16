<?php

use App\Http\Controllers\Api\AppointmentController;
use App\Http\Controllers\Api\PaymentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('get-medical-examinations/{id}', [AppointmentController::class, 'getExaminations']);
Route::get('get-consultations/{userId}/{medicalExamination}', [AppointmentController::class, 'getConsultations']);
Route::get('get-appointments/{userId}/{medicalExaminationId}/{day}', [AppointmentController::class, 'getAppointments']);
Route::post('personal-details-validation', [AppointmentController::class, 'personalDetailsValidation']);
Route::post('payment-start', [PaymentController::class, 'start']);
Route::get('payment-back', [PaymentController::class, 'back'])
    ->name('api.payment.back');

// Route::post('payment-ipn', [PaymentController::class, 'ipn'])
//     ->name('payment.ipn');

// Route::get('sikertelen-fizetes/{payment}', [
//     'as' => 'api.payment.error',
//     'uses' => [PaymentController::class, 'error']
// ]);

// Route::get('online-bejelentkezes-befejezese/{appointment}', [PaymentController::class, 'success'])
//     ->name('api.payments.greeting');
