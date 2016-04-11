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
        return view('editUsername');
    }

    public function bigbrother(){ //for test purposes
        return view('bigbrother');
    }

    public function getEmail(){
        return view('email');
    }

    public function setPreferences(){
        return view('editPreferences');
    }

    public function getPreferences(){
        return view('getPreferences');
    }

    public function setNeeded(){
        return view('editcneeded');
    }

    public function getNeeded(){
        return view('getNeededCourses');
    }

    public function setTaken(){
        return view('editctaken');
    }

    public function getTaken(){
        return view('getTakenCourses');
    }

    public function getSchedule(){
        return view('schedule');
    }

    public function courses()
    {
        return view('getCourses');
    }

    public function getAdmin(){
        return view('admin');
    }

    public function getAdminCourse(){
        return view('admincourse');
    }

    public function getSequence(){
        return view('courseSequence');
    }

    public function sections(){
        return view('getSections');
    }
    /*
    public function sectioncourse(){
        return view('getCourseSections');
    }
    */

    public function sectioncourse(){
        return view('sortCourse');
    }

    public function editsection(){
        return view('editSection');
    }

    public function editcourse(){
        return view('editCourse');
    }

    public function addadminsection(){
         return view('addAdminSection');
    }

    public function addadmincourse(){
        return view('addAdminCourse');
    }

    public function removeadminsection(){
         return view('removeSection');
    }

    public function removeadmincourse(){
        return view('removeCourse');
    }

}