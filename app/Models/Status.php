<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    use HasFactory;

    public const START_PAYMENT = 'IN_PROGRESS';
    public const END_PAYMENT = 'SUCCESS';
    public const CANCEL_PAYMENT = 'CANCEL';
    public const TIMEOUT_PAYMENT = 'TIMEOUT';
    public const FAIL_PAYMENT = 'FAIL';
    public const CASH = 'CASH';
    public const DELETE = 'DELETE';
}
