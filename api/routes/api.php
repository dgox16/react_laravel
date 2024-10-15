<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Sanctum\Http\Controllers\CsrfCookieController;


Route::get('/sanctum/csrf-cookie', [CsrfCookieController::class, 'show']);
Route::controller(UserController::class)->group(function () {
    Route::post('/register', 'register');
    Route::post('/login', 'login');
    Route::get('/logout', 'logout')->middleware('auth:sanctum');
    Route::get('/user', 'getUser')->middleware('auth:sanctum');
});

Route::controller(ProductController::class)->group(function () {
    Route::get('/products', 'index')->middleware('auth:sanctum');
    Route::post('/products', 'store')->middleware('auth:sanctum');
    Route::get('/products/{product}', 'show')->middleware('auth:sanctum');
    Route::delete('/products/{id}', 'destroy')->middleware('auth:sanctum');
    Route::put('/products/{product}', 'update')->middleware('auth:sanctum');
});
