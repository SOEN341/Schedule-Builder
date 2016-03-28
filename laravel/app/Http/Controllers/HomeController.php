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

    public function pass(){
        return view('editPassword');
    }

    public function email(){
        return view('editEmail');
    }

    public function username(){
        return view('editUSername');
    }

}