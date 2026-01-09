<?php

use App\Http\Controllers\SearchController;
use App\Http\Controllers\DetailsController;
use App\Http\Controllers\StatisticsController;
use Illuminate\Support\Facades\Route;

Route::post('/star-wars-movies', [SearchController::class, 'search']);

Route::get('/star-wars-details/{type}/{uid}', [DetailsController::class, 'get_details']);

Route::get('/stats', [StatisticsController::class, 'get_statistics']);