<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
use  App\User;


Route::get('/index', 'IndexController@index');

Route::get('/preferences', 'PreferencesController@index');

Route::get('/account', 'AccountController@index');

Route::get('users', function(){return User::all(); });



