<?php

namespace App\Console\Commands;

use App\Models\Appointment;
use App\Models\ConsultationTemplate;
use App\Models\User;
use Illuminate\Console\Command;

class GenerateTemplateByConsultation extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:generate-template-by-consultation {user} {day}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate template by consultation';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $break = 7;
        $breakTime = 120;
        $user = User::find($this->argument('user'));
        $day = $this->argument('day');

        $appointments = Appointment::query()
            ->whereHas('consultation', function ($q) use ($user, $day) {
                $q
                    ->where('user_id', $user->id)
                    ->where('day', $day);
            })
            ->get();

        $newAppointments = collect();
        $startTime = $appointments->first()->start_at;
        $lastTime = $appointments->last()->end_at;
        $appointments->each(function ($appointment) use ($newAppointments) {
            $start_time = strtotime($appointment->start_at);
            $end_time = strtotime($appointment->end_at);
            $diff = intval(round(($end_time - $start_time) / 60));
            $newAppointments->push($diff);
        });

        $templateName = $user->name . ' | ' . $startTime . ' - ' . $lastTime;

        ConsultationTemplate::create([
            'name' => $templateName,
            'structure' => $newAppointments
        ]);

        $this->info('Create the new template: ' . $templateName);
    }
}
