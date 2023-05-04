<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('products')->group(function() {
    Route::get('prodlist', [\App\Http\Controllers\ProductController::class, 'prodlist']);
    Route::get('catlist', [\App\Http\Controllers\ProductController::class, 'catlist']);
    Route::get('info/{id}', [\App\Http\Controllers\ProductController::class, 'info']);
});

Route::prefix('cart')->group(function() {
    Route::get('add');
    Route::get('info');
    Route::get('delete');
});
