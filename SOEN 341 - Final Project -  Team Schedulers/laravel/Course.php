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





//var_dump($schedule);

/*
//print_r(array_values($coursesInformation));
//var_dump($coursesInformation['0']);
echo "<br/>";
var_dump($coursesLectures['0']);
echo "<br/>";
var_dump($coursesTutorials['0']);
echo "<br/>";
var_dump($coursesLabs['0']);
echo "<br/>";
var_dump($coursesLectures['2']);
echo "<br/>";
var_dump($coursesTutorials['2']);
echo "<br/>";
var_dump($coursesLabs['2']);
echo "<br/>";
var_dump($coursesLectures['3']);
echo "<br/>";
var_dump($coursesTutorials['3']);
echo "<br/>";
var_dump($coursesLabs['3']);
echo "<br/>";
var_dump($coursesLectures['4']);
echo "<br/>";
var_dump($coursesTutorials['4']);
echo "<br/>";
var_dump($coursesLabs['4']);
echo "<br/>";
var_dump($coursesLectures['5']);
echo "<br/>";
var_dump($coursesTutorials['5']);
echo "<br/>";
var_dump($coursesLabs['5']);
echo "<br/>";
var_dump($coursesLectures['6']);
echo "<br/>";
var_dump($coursesTutorials['6']);
echo "<br/>";
var_dump($coursesLabs['6']);
*/
/*
var_dump($coursesLectures);
echo "<br/>";
var_dump($coursesTutorials);
echo "<br/>";
var_dump($coursesLabs);
*/

//echo $coursesInformation['0'];
//print_r(array_values($courses));