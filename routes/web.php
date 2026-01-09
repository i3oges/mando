<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/details/{type}/{uid}', function () {
    return Inertia::render('welcome');
})->name('home');


Route::get('/stats', function () {
    return Inertia::render('welcome');
})->name('home');