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

Route::get('/bigbrother', 'HomeController@bigbrother');

Route::get('/editpassword', 'HomeController@pass');

Route::get('/editusername','HomeController@username');

Route::get('/editemail', 'HomeController@email'); 

Route::get('/editpreferences', 'HomeController@setPreferences');  //edit the preferences

Route::get('/userprefs', 'HomeController@getPreferences'); // get the user preferences

Route::get('/email', 'HomeController@getEmail'); ///get the email of the user

Route::get('/editneededcourses', 'HomeController@setneeded'); ///set the needed courses

Route::get('/needed', 'HomeController@getneeded'); ///set the needed courses

Route::resource('/register', 'HomeController@register');

Route::resource('/login', 'HomeController@login');




