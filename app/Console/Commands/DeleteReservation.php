<?php

namespace App\Console\Commands;

use App\Models\Appointment;
use App\Models\Payment;
use Carbon\Carbon;
use Illuminate\Console\Command;

class DeleteReservation extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:delete-reservation';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $currentTime = Carbon::now();
        $fifteenMinutesAgo = $currentTime->subMinutes(15);

        $appointments = Appointment::whereNull('applicant_id')
                                   ->whereNotNull('medical_examination_id')
                                   ->where('updated_at', '<', $fifteenMinutesAgo)
                                   ->get();

        $appointments->each(function ($appointment) {
            $appointment->update(['medical_examination_id' => null]);
        });
    }
}
