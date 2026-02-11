<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('demos')->name('demos.')->group(function () {
    Route::get('/', fn () => Inertia::render('demos/Index'))->name('index');

    // Form components
    Route::prefix('form')->name('form.')->group(function () {
        Route::get('/', fn () => Inertia::render('demos/form/Index'))->name('index');
        Route::get('/inputs-basic', fn () => Inertia::render('demos/form/InputsBasic'))->name('inputs-basic');
        Route::get('/inputs-advanced', fn () => Inertia::render('demos/form/InputsAdvanced'))->name('inputs-advanced');
        Route::get('/selects', fn () => Inertia::render('demos/form/Selects'))->name('selects');
        Route::get('/date-pickers', fn () => Inertia::render('demos/form/DatePickers'))->name('date-pickers');
        Route::get('/toggles', fn () => Inertia::render('demos/form/Toggles'))->name('toggles');
        Route::get('/sliders', fn () => Inertia::render('demos/form/Sliders'))->name('sliders');
        Route::get('/editor', fn () => Inertia::render('demos/form/Editor'))->name('editor');
    });

    // Data components
    Route::prefix('data')->name('data.')->group(function () {
        Route::get('/', fn () => Inertia::render('demos/data/Index'))->name('index');
        Route::get('/datatable', fn () => Inertia::render('demos/data/DataTable'))->name('datatable');
        Route::get('/tree', fn () => Inertia::render('demos/data/TreeComponents'))->name('tree');
        Route::get('/lists', fn () => Inertia::render('demos/data/Lists'))->name('lists');
        Route::get('/misc', fn () => Inertia::render('demos/data/Misc'))->name('misc');
    });

    // Other categories (single page each)
    Route::get('/overlay', fn () => Inertia::render('demos/overlay/Index'))->name('overlay');
    Route::get('/button', fn () => Inertia::render('demos/button/Index'))->name('button');
    Route::get('/menu', fn () => Inertia::render('demos/menu/Index'))->name('menu');
    Route::get('/panel', fn () => Inertia::render('demos/panel/Index'))->name('panel');
    Route::get('/messages', fn () => Inertia::render('demos/messages/Index'))->name('messages');
    Route::get('/media', fn () => Inertia::render('demos/media/Index'))->name('media');
    Route::get('/chart', fn () => Inertia::render('demos/chart/Index'))->name('chart');
    Route::get('/file', fn () => Inertia::render('demos/file/Index'))->name('file');
    Route::get('/misc', fn () => Inertia::render('demos/misc/Index'))->name('misc');
});
