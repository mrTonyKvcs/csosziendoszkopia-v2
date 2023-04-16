<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Consultation extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'user_id', 'day','open', 'close', 'is_digital', 'office_id', 'type_id'
    ];

    public function appointments()
    {
        return $this->hasMany(Appointment::class)
            ->with('applicant');
    }

    public function office()
    {
        return $this->belongsTo(Office::class);
    }

    public function type()
    {
        return $this->belongsTo(Type::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    //Scopes
    public function scopeActive($query)
    {
        return $query->where('day', '>=', now()->format('Y-m-d'));
    }

    public function scopeArchive($query)
    {
        return $query->where('day', '<', now()->format('Y-m-d'));
    }

    //Accessors
    public function getNameAttribute()
    {
        $day = \Carbon\Carbon::parse($this->day)->locale('hu')->isoFormat('dddd');

        return $this->day . ' (' . ucfirst($day) .')' . ": " . $this->open . ' - ' .$this->close . ' | Rendelő: ' . $this->office->name;
    }

    public function getNameWithoutTimeAttribute()
    {
        $day = \Carbon\Carbon::parse($this->day)->locale('hu')->isoFormat('dddd');

        return $this->day . ' (' . ucfirst($day) .') ' . $this->office->name;
    }
}
