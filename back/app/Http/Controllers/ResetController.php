<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ResetRequest;
use Auth;
use App\Models\User;
use DB;
use Illuminate\Support\Facades\Hash;

class ResetController extends Controller
{
    public function ResetPassword(ResetRequest $request) {
    	$email = $request->email;
    	$token = $request->token;
    	$password = Hash::make($request->password);

        $emailcheck = DB::table('password_reset_tokens')->where('email', $email)->first();
    	$tokencheck = DB::table('password_reset_tokens')->where('token', $token)->first();

    	if(!$emailcheck) {
    		return response([
    			'message' => "Email not found."
    		], 401);    	 	 
    	 }
    	 if(!$tokencheck) {
    		return response([
    			'message' => "Invalid token."
    		], 401);    	 	 
    	 }

    	 DB::table('users')->where('email', $email)->update(['password' => $password]);
    	 DB::table('password_reset_tokens')->where('email',$email)->delete();

    	 return response([
            'message' => 'Your account password has been changed.'
        ], 200);
    }

}
