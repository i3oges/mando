<?php

namespace App\Http\Middleware;

use App\Events\RequestMetricsGathered;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Log;

class RequestMetrics
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $start = microtime(true);
        $response = $next($request);
        $end = microtime(true);
        $elapsed = $end - $start;
        $uri = $request->getRequestUri();
        RequestMetricsGathered::dispatch($start, $end, $uri, $elapsed);
        Log::info("sent request metrics");
        return $response;
    }
}
