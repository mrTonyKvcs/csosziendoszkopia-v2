<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ConsultationTemplate extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = ['slug', 'name', 'structure'];

    protected static function boot()
    {
        parent::boot();

        static::saving(function ($model) {
            $slug = Str::slug($model->name);
            $count = 0;
            while (static::where('slug', $slug)->exists()) {
                $count++;
                $slug = Str::slug($model->name) . '-' . $count;
            }
            $model->slug = $slug;
        });
    }
}
