<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Payment extends Model
{
    use HasFactory;
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['status', 'paymentable', 'transaction_id', 'order_ref', 'applicant_id'];

    public function applicant()
    {
        return $this->belongsTo(Applicant::class);
    }

    public function appointment()
    {
        return $this->belongsTo(Appointment::class, 'paymentable_id');
    }

    public function paymentable()
    {
        return $this->morphTo();
    }
}
