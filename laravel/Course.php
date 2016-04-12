<?php
class Course
{

    public $lectures = Array();
    public $tutorials = Array();
    public $labs = Array();
    public $courseName = '';

    function __construct($courseName,$lecturesArr, $tutorialsArr, $labsArr){
        $this->courseName = $courseName;
        $this->lectures = $lecturesArr;
        $this->tutorials = $tutorialsArr;
        $this->labs = $labsArr;
        $this->test = '';
    }

    function getName(){
        return $this->courseName;
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