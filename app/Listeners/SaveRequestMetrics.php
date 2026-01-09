<?php

namespace App\Listeners;

use App\Events\RequestMetricsGathered;
use App\Models\Metric;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Carbon;

class SaveRequestMetrics
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }


    /**
     * Handle the event.
     */
    public function handle(RequestMetricsGathered $event): void
    {
        Log::info("request gathered " . $event->uri . " " . round($event->elapsed, 3));
        $metric = Metric::create([
            'start' => $event->start,
            'end' => $event->end,
            'elapsed' => $event->elapsed,
            'uri' => $event->uri,
        ]);
        $metric->save();
    }
}
