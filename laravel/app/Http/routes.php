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

Route::resource('/courses', 'HomeController@courses');

Route::resource('/editpassword', 'HomeController@pass');

Route::resource('/editusername','HomeController@username');

Route::resource('/editemail', 'HomeController@email'); 

Route::resource('/editpreferences', 'HomeController@setPreferences');  //edit the preferences

Route::resource('/userprefs', 'HomeController@getPreferences'); // get the user preferences

Route::resource('/email', 'HomeController@getEmail'); ///get the email of the user

Route::resource('/editneededcourses', 'HomeController@setNeeded'); ///set the needed courses

Route::resource('/needed', 'HomeController@getNeeded'); ///set the needed courses

Route::resource('/edittakencourses', 'HomeController@setTaken'); ///set the taken courses

Route::resource('/taken', 'HomeController@getTaken'); ///set the taken courses

Route::resource('/register', 'HomeController@register');

Route::resource('/login', 'HomeController@login');

Route::resource('/sections', 'HomeController@sections'); //get the sections

Route::resource('/sectioncourse', 'HomeController@sectioncourse'); // get the section from a courses

Route::resource('/editsection', 'HomeController@editsection'); //edit a section as admin

Route::resource('/editcourse', 'HomeController@editcourse'); //edit an section as admin

Route::get('/schedule', 'HomeController@getschedule');

Route::get('/admin', 'HomeController@getadmin');

Route::get('/sequence', 'HomeController@getsequence');

Route::get('/admincourse', 'HomeController@getadmincourse');


