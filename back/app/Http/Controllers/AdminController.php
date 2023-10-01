<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function Logout(){

        Auth::logout();
        return Redirect()->route('login');
    }

    public function userProfile(){
        $result = User::find(1);
        return view('admin.profilepage', compact('result'));

    }

    public function userStore(Request $request){
        $data = User::find(1);
        $data->name = $request->name;
        $data->email = $request->email;

        // Verifica se existe um arquivo chamado 'picture' no request
        if ($request->file('picture')) {
            // Se o arquivo existe, obtém uma referência para ele
            $file = $request->file('picture');
            // Remove a imagem antiga do diretório 'upload/profile'
            @unlink(public_path('upload/profile/'.$data->profile_photo_path));
             // Gera um novo nome de arquivo baseado na data e no nome original do arquivo
            $filename = date('YmdHi').$file->getClientOriginalName();
            // Move o arquivo para o diretório 'upload/profile' com o novo nome
            $file->move(public_path('upload/profile'), $filename);
            // Atualiza o campo 'picture' com o novo nome do arquivo
            $data->picture = $filename;
        }
        // Salva os dados no banco
        $data->save();
        $notification = array(
            'message' => 'User profile updated successfully',
            'alert-type' => 'success'
        );

        return redirect()->route('user.profile')->with($notification);
    }

    public function changePassword(){
        return view('admin.changepassword');
    }

    public function passwordUpdate(Request $request){
        $validateData = $request->validate([
            'current_password' => 'required',
            'password' => 'required|confirmed'
        ]);

        $hashedPassword = User::find(1)->password;
        if (Hash::check($request->current_password, $hashedPassword)) {
            $user = User::find(1);
            $user->password = Hash::make($request->password);
            $user->save();
            Auth::logout();

            return redirect()->route('admin.logout');
        }
        else{
            return redirect()->back();
        }
    }
}
