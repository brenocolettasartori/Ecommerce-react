<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ForgetRequest;
use Auth;
use App\Models\User;
use DB;
use Illuminate\Support\Facades\Hash;
use Mail;
use App\Mail\ForgetMail;

class ForgetController extends Controller
{
    public function ForgetPassword(ForgetRequest $request){
    	$email = $request->email;

    	if (User::where('email',$email)->doesntExist()) {
    		return response([
    			'message' => 'Email Invalid'
    		],401);
    	}

    	$token = rand(10,100000);

    	try{
    		DB::table('password_reset_tokens')->insert([
    			'email' => $email,
    			'token' => $token
    		]);

    		// Mail Send to User 
    		Mail::to($email)->send(new ForgetMail($token));

    		return response([
    			'message' => 'Password reset email has been sent'
    		],200);

    	}catch(Exception $exception){
    		return response([
    			'message' => $exception->getMessage()
    		],400);
    	}
    }


}
