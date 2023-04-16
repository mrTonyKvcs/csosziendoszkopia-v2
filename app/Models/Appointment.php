<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Appointment extends Model
{
    use SoftDeletes;

    protected $fillable = [
       'consultation_id', 'medical_examination_id','applicant_id', 'start_at', 'end_at'
    ];

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    public function applicant()
    {
        return $this->belongsTo(Applicant::class, 'applicant_id');
    }

    public function consultation()
    {
        return $this->belongsTo(Consultation::class);
    }

    public function medicalExamination()
    {
        return $this->belongsTo(MedicalExamination::class);
    }

    public function payment()
    {
        return $this->morphOne(Payment::class, 'paymentable');
    }
}
