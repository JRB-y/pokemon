<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        try {
            $request->validate([
                'username' => 'required',
                'password' => 'required'
            ]);

            $credentials = request(['username', 'password']);

            if (!Auth::attempt($credentials)) {
                return response(500)->json([
                    'status_code' => 500,
                    'message' => 'Unauthorized'
                ]);
            }

            $user = User::where('username', $request->username)->first();

            if (!Hash::check($request->password, $user->password, [])) {
                throw new \Exception('Error in Login');
            }
            
            $token = $user->createToken('token-name')->plainTextToken;

            return response()->json([
                'status_code' => 200,
                'access_token' => $token,
                'token_type' => 'Bearer',
                'user' => $user
            ]);
        } 
        catch (\Throwable $error) {
            return response()->json([
                'status_code' => 500,
                'message' => 'Error in login',
                'error' => $error,
            ]);
        }
    }

    public function register(Request $request)
    {

        $request->validate([
            'username' => 'required|unique:users',
            'password' => 'required',
            'profilePicture' => 'required'
        ]);

        $user = User::create([
            'username' => $request->username,
            'password' => Hash::make($request->password),
            'profil-icon' => $request->profilePicture,
        ]);

        $token = $user->createToken('token-name')->plainTextToken;

        return response()->json([
            'user' => $user,
            'status_code' => 200,
            'access_token' => $token,
            'token_type' => 'Bearer'
        ]);
    }

    public function logout(Request $request)
    {  
        $data = $request->all();
        $user_id = $data['user']['id'];

        $user = User::find($user_id);
        $user->tokens()->delete();

        return true;
    }

    public function me()
    {
        // return Auth::guard('api');
    }
}
