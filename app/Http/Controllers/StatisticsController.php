<?php

namespace App\Http\Controllers;

use App\Models\Statistics;
use Illuminate\Http\Request;

class StatisticsController extends Controller
{
    
    public function get_statistics(Request $request) {
        return Statistics::firstOrNew();
    }
}
