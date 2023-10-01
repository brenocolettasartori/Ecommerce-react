<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\Admin\CategoryController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return view('admin.index');
})->name('dashboard');
 
// Logout 
Route::get('/logout',[AdminController::class, 'Logout'])->name('admin.logout');

//Route::middleware(['auth:sanctum', 'verified'])->get('/profile', [AdminController::class, 'userProfile'])->name('user.profile');

Route::prefix('admin')->group(function(){

    Route::get('/profile', [AdminController::class, 'userProfile'])->name('user.profile');

    Route::post('/user/profile/store',[AdminController::class, 'userStore'])->name('user.profile.store');

    Route::get('/change/password',[AdminController::class, 'changePassword'])->name('change.password');

    Route::post('/change/password/update',[AdminController::class, 'passwordUpdate'])->name('change.password.update');
    
});

Route::prefix('category')->group(function(){
    
    Route::get('/all',[CategoryController::class, 'getAllCategory'])->name('all.category');

    Route::get('/add',[CategoryController::class, 'addCategory'])->name('add.category');

    Route::post('/store',[CategoryController::class, 'StoreCategory'])->name('category.store');

    Route::get('/edit/{id}',[CategoryController::class, 'editCategory'])->name('category.edit');

    Route::post('/update',[CategoryController::class, 'updateCategory'])->name('category.update');

    Route::get('/delete/{id}',[CategoryController::class, 'deleteCategory'])->name('category.delete');
});

// Route::post('/user/profile/store',[AdminController::class, 'UserProfileStore'])->name('user.profile.store');

// Route::get('/change/password',[AdminController::class, 'ChangePassword'])->name('change.password');

// Route::post('/change/password/update',[AdminController::class, 'ChangePasswordUpdate'])->name('change.password.update');

