<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

// Rotas Admin
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\HomeController as AdminHome;
use App\Http\Controllers\Admin\SectionController;
use App\Http\Controllers\Admin\PageController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Controllers\Admin\UserController;

// Rotas Site
use App\Http\Controllers\Site\HomeController as SiteHome;
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

Route::get('/', [SiteHome::class, 'index'])->name('home');

Route::get('/admin', [AdminHome::class, 'index'])->name('admin');
Route::resource('/admin/categories', CategoryController::class);
Route::resource('/admin/posts', PostController::class);
Route::resource('/admin/pages', PageController::class);
Route::resource('/admin/settings', SettingsController::class);
Route::resource('/admin/users', UserController::class);
Route::resource('/admin/sections', SectionController::class);

require __DIR__.'/auth.php';
