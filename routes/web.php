<?php

use App\Http\Controllers\Admin\ApplicantsController;
use App\Http\Controllers\Admin\ConsultationsController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\PagesController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [PagesController::class, 'index'])->name('pages.index');

// Route::get('payment-start', [PaymentController::class, 'start'])->name('payment.start');
// Route::get('payment-back', [PaymentController::class, 'back'])
//     ->name('payment.back');

Route::get('/online-bejelentkezes/{user?}', [AppointmentController::class, 'index'])->name('appointment.index');

Route::prefix('admin')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/rendelesek', [ConsultationsController::class, 'index'])->name('admin.consultations.index');
    Route::get('/archiv-rendelesek', [ConsultationsController::class, 'archive'])->name('admin.consultations.archive');
    Route::get('/rendelesek/{doctorId}/{day}', [ConsultationsController::class, 'show'])->name('admin.consultations.show');
    Route::get('/jelentkezok', [ApplicantsController::class, 'index'])->name('admin.consultations.index');
})->middleware(['auth']);



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
