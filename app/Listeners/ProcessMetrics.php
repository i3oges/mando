<?php

namespace App\Listeners;

use App\Events\StartMetricsProcessing;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Models\Statistics;
use App\Models\Metric;
use Illuminate\Support\Facades\Log;

class ProcessMetrics
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
    public function handle(StartMetricsProcessing $event): void
    {
        Log::info("starting metrics processing");
        $avg_sum = 0.0;
        $fastest_time = 99999.9;
        $fastest_uri = '';
        $slowest_time = 0;
        $slowest_uri = '';
        $statistics = Statistics::firstOrNew();

        $metrics = Metric::all()->sortBy('elapsed');
        $top_5 = $metrics->take(5);
        $fastest_time = $metrics->first()->elapsed;
        $fastest_uri = $metrics->first()->uri;
        $slowest_time = $metrics->last()->elapsed;
        $slowest_uri = $metrics->last()->uri;
        Log::info('items found ' . $metrics->count());
        $metrics->each(function (Metric $metric) use ($avg_sum) {
            $avg_sum += $metric->elapsed;
        });
        $average_request_time = $avg_sum / $metrics->count();

        $statistics->avg_request_time = $average_request_time;
        $statistics->top_5_requests = $top_5;
        $statistics->fastest_request_time = $fastest_time;
        $statistics->fastest_request_uri = $fastest_uri;
        $statistics->slowest_request_time = $slowest_time;
        $statistics->slowest_request_uri = $slowest_uri;
        $statistics->save();
        Log::info("completed metrics processing");
    }
}
