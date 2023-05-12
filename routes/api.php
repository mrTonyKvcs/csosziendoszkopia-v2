<?php

use App\Http\Controllers\Api\AppointmentController;
use App\Http\Controllers\Api\ConsultationController;
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
Route::post('reservation', [AppointmentController::class, 'reservation']);
Route::post('payment-start', [PaymentController::class, 'start']);
Route::get('payment-back', [PaymentController::class, 'back'])
    ->name('api.payment.back');

Route::post('payment-ipn', [PaymentController::class, 'ipn'])
    ->name('api.payment.ipn');

Route::get('sikertelen-fizetes/{payment}', [PaymentController::class, 'unsuccessful'])->name('api.payment.unsuccessful');

Route::get('online-bejelentkezes-befejezese/{appointment}', [PaymentController::class, 'successful'])
    ->name('api.payment.successful');

Route::prefix('consultations')->group(function () {
    Route::post('create', [ConsultationController::class, 'store']);
    Route::post('export', [ConsultationController::class, 'export']);
});
Route::prefix('appointments')->group(function () {
    Route::post('set-reservation', [AppointmentController::class, 'setReservation']);
    Route::post('admin-reservation', [AppointmentController::class, 'adminReservation']);
    Route::delete('cancel/{appointment}', [AppointmentController::class, 'cancel']);
    Route::delete('delete/{appointment}', [AppointmentController::class, 'delete']);
});
