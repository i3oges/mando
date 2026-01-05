<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/api/star-wars-movies', function () {
    return Inertia::render('home');
})->name('base');