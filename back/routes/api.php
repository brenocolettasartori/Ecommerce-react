<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ForgetController;
use App\Http\Controllers\ResetController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Admin\VisitorController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\ProductDetailsController;
use App\Http\Controllers\Admin\NotificationController;
use App\Http\Controllers\Admin\ReviewController;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Login
Route::post('/login', [AuthController::class, 'Login']);

// Register
Route::post('/register', [AuthController::class, 'Register']);

// Forget password
Route::post('/forgetpassword',[ForgetController::class, 'ForgetPassword']);

// Reset password
Route::post('/resetpassword',[ResetController::class, 'ResetPassword']);

// User
Route::get('/user',[UserController::class, 'User'])->middleware('auth:api');

// Visitor
Route::get('/getvisitor',[VisitorController::class, 'GetVisitorDetails']);

// Contact
Route::post('/postcontact',[ContactController::class, 'PostContactDetails']);

// Category
Route::get('/category',[CategoryController::class, 'AllCategory']);

// Product
Route::get('/product',[ProductController::class, 'AllProducts']);

// Product by type
Route::get('/type/{type}',[ProductController::class, 'ProductListByType']);

// Product by category
Route::get('/category/{category}',[ProductController::class, 'ProductListByCategory']);

// Product Details
Route::get('/productdetails/{id}',[ProductDetailsController::class, 'ProductDetails']);

// Notification
Route::get('/notification',[NotificationController::class, 'NotificationHistory']);

// Search
Route::get('/search/{key}',[ProductController::class, 'searchByProduct']);

// Related product
Route::get('/related/{category}',[ProductController::class, 'relatedProduct']);

// Review
Route::get('/review/{id}',[ReviewController::class, 'listReview']);
