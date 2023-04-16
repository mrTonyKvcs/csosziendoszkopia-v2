<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DoctorMedicalExamination extends Model
{
    use HasFactory;

    protected $table = 'doctor_medical_examination';

    protected $fillable = ['user_id', 'medical_examination_id', 'type', 'minutes', 'price', 'is_active'];

    public function medicalExamination()
    {
        return $this->belongsTo(MedicalExamination::class);
    }
}
