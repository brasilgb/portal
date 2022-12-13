<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

// Rotas Admin
use App\Http\Controllers\Admin\HomeController as AdminHome;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\SectionController;
use App\Http\Controllers\Admin\PageController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Controllers\Admin\UserController;

// Rotas Site
use App\Http\Controllers\Site\HomeController as SiteHome;
use App\Http\Controllers\Site\PostController as SitePost;
use App\Http\Controllers\Site\PageController as SitePage;
use App\Http\Controllers\Site\CategoryController as SiteCategory;
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
// Site routes
Route::get('/', [SiteHome::class, 'index'])->name('home');
Route::get('/ct/{category}', [SiteCategory::class, 'index'])->name('category');
Route::get('/ps/{category}/{post}', [SitePost::class, 'index'])->name('post');
Route::get('/pg/{page}', [SitePage::class, 'index'])->name('page');

// Admin routes
Route::group(['prefix' => 'admin'], function () {
    Route::get('/', [AdminHome::class, 'index'])->name('admin');
    Route::resource('/categories', CategoryController::class);
    Route::resource('/posts', PostController::class);
    Route::resource('/pages', PageController::class);
    Route::resource('/settings', SettingsController::class);
    Route::resource('/users', UserController::class);
    Route::resource('/sections', SectionController::class);
});


require __DIR__ . '/auth.php';
