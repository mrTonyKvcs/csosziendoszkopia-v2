<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Applicant extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name', 'email', 'phone', 'comment', 'payment_id', 'payment_request_id', 'order_number', 'zip', 'city', 'street', 'social_security_number', 'is_black_listed'
    ];

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    public function appointments()
    {
        return $this->belongsTo(Appointment::class);
    }
}
