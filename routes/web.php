<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\HomeController;
use App\Http\Controllers\Admin\PageController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Controllers\Admin\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Site/Home/index');
});

Route::get('/admin', [HomeController::class, 'index'])->name('admin');
Route::resource('/admin/categories', CategoryController::class);
Route::resource('/admin/posts', PostController::class);
Route::resource('/admin/pages', PageController::class);
Route::resource('/admin/settings', SettingsController::class);
Route::resource('/admin/users', UserController::class);

require __DIR__.'/auth.php';
