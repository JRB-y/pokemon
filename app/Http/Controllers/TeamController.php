<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TeamController extends Controller
{
    public function getPokemons($id)
    {
        return User::find($id)->pokemons;
    }

    public function myTeam ()
    {
        return Auth::user()->pokemons;
    }
}
