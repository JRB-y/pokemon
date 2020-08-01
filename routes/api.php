<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Auth
Route::post('/login', 'AuthController@login');
Route::post('/logout', 'AuthController@logout');
Route::post('/register', 'AuthController@register');
Route::get('/me', 'AuthController@me');

Route::middleware(['auth:sanctum'])->group(function () {
    // pokemons
    Route::get('/pokemons', 'PokemonController@index');
    Route::get('/pokemons/{id}', 'PokemonController@show');
    
    // Teams
    Route::get('/users/me/team', 'TeamController@myTeam');

    // Users
    Route::get('/users', 'UserController@index');
    Route::get('/users/{id}', 'UserController@show');
    Route::get('/users/{id}/team', 'TeamController@getPokemons');

});

