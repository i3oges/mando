<?php

use App\Events\StartMetricsProcessing;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schedule;


Schedule::call(function () {
    StartMetricsProcessing::dispatch();
})->everyFiveMinutes();