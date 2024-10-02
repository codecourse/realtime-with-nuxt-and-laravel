<?php

use App\Events\ExampleEvent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/realtime', function () {
    broadcast(new ExampleEvent(str()->random(10)));
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
