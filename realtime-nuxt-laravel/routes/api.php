<?php

use App\Events\ExampleEvent;
use App\Events\ExampleEventPrivate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/realtime', function () {
    broadcast(new ExampleEventPrivate(str()->random(10)))->toOthers();
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
