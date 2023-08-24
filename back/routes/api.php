<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ForgetController;
use App\Http\Controllers\ResetController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Admin\VisitorController;
use App\Http\Controllers\Admin\ContactController;

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
Route::get('/user',[UserController::class, 'User'])->middleware('auth:sanctum');

// Visitor
Route::get('/getvisitor',[VisitorController::class, 'GetVisitorDetails']);

// Contact
Route::post('/postcontact',[ContactController::class, 'PostContactDetails']);