<?php


namespace App\Http\Controllers;


class TestController extends Controller
{
    public function getTestPage(){
        return view('test');
    }

}