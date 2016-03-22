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


Route::get('/', 'IndexController@index');

Route::get('/index', 'IndexController@index');

Route::get('/preferences','HomeController@preference');

Route::get('/account', 'AccountController@index');

Route::resource('/register', 'HomeController@register');

Route::resource('/login', 'HomeController@login');




