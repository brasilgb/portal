<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\HomeController;

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
Route::get('/admin/categories',[CategoryController::class, 'index'])->name('categories');
Route::get('/admin/categories/adcategory',[CategoryController::class, 'create'])->name('categories.adcategory');
Route::post('/admin/categories',[CategoryController::class, 'store'])->name('categories.store');

Route::get('/admin/categories/edcategory',[CategoryController::class, 'create'])->name('categories.edcategory');




Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
