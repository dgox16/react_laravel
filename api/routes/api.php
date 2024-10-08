<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);

Route::controller(ProductController::class)->group(function () {
    Route::get('/products', 'index')->middleware('auth:sanctum');
    Route::post('/products', 'store')->middleware('auth:sanctum');
    Route::get('/products/{product}', 'show')->middleware('auth:sanctum');
    Route::delete('/products/{product}', 'destroy')->middleware('auth:sanctum');
    Route::put('/products/{product}', 'update')->middleware('auth:sanctum');
});
