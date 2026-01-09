<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Statistics extends Model
{
    /** @use HasFactory<\Database\Factories\StatisticsFactory> */
    use HasFactory;

    protected $fillable = [
        'avg_request_time', 
        'top_5_requests', 
        'fastest_request_time', 
        'fastest_request_uri',
        'slowest_request_time',
        'slowest_request_uri',
    ];

    protected $casts = [
        'top_5_requests' => 'array',
    ];

}
