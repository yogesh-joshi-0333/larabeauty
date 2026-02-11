<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Redirect home to demos (public dashboard)
Route::get('/', function () {
    return redirect()->route('demos.index');
})->name('home');

// Redirect dashboard to demos as well
Route::get('dashboard', function () {
    return redirect()->route('demos.index');
})->name('dashboard');

require __DIR__.'/settings.php';
require __DIR__.'/demos.php';
