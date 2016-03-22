<?php


namespace App\Http\Controllers;


class HomeController extends Controller {

    public function index(){
        return view('home');
    }

    public function register(){
        return view('register');
    }

    public function preference(){
        return view('preferences');
    }

    public function login(){
        return view('login');
    }
}