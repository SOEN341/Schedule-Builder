<?php
class Course
{

    public $lectures = Array();
    public $tutorials = Array();
    public $labs = Array();

    function __construct($lecturesArr, $tutorialsArr, $labsArr){
        $this->lectures = $lecturesArr;
        $this->tutorials = $tutorialsArr;
        $this->labs = $labsArr;
        $this->test = '';
    }

    function getLectures(){
        return $this->lectures;
    }

    function getTutorials(){
        return $this->tutorials;
    }

    function getLabs(){
        return $this->labs;
    }





}