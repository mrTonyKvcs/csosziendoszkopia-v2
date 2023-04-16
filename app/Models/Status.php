<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    use HasFactory;

    const START_PAYMENT = 'IN_PROGRESS';
    const END_PAYMENT = 'SUCCESS';
    const CANCEL_PAYMENT = 'CANCEL';
    const TIMEOUT_PAYMENT = 'TIMEOUT';
    const FAIL_PAYMENT = 'FAIL';
}
