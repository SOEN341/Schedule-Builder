<?php
require_once('../mysqli_connect.php');
require_once('../Course.php');
//$courseId=$_POST['courseId'];
$courseId = '2';//TestInput
if (!(isset($courseId))) {
    $courseId='';
}
//$courseId='2'; //test pursposes

$query ="SELECT * FROM sections WHERE courseId='$courseId'";

$response= mysqli_query($dbc,$query);
//echo 'Error: ' . mysqli_error($dbc);
$rows = array();

$numResults = mysqli_num_rows($response);
$counter = 0;

//echo '[' ;

$lectures = array();
$tutorials = array();
$labs = array();
while($current = mysqli_fetch_assoc($response)) {
    if(++$counter == $numResults) {
        $json = json_encode($current);
        $result = json_decode($json, true);


        if($result['type'] == "Lecture"){
            array_push($lectures, $result['type']);
        } else if($result['type'] == "Tutorial"){
            array_push($tutorials, $result['type']);
        } else if($result['type'] == "Lab"){
            array_push($labs, $result['type']);
        }

        //echo $result['type'];
        //echo json_encode($current);
    }  else {
        $json = json_encode($current);
        $result = json_decode($json, true);
        if($result['type'] == "Lecture"){
            array_push($lectures, $result['type']);
        } else if($result['type'] == "Tutorial"){
            array_push($tutorials, $result['type']);
        } else if($result['type'] == "Lab"){
            array_push($labs, $result['type']);
        }
       // echo $result['type'];
        //echo json_encode($current) . ',' ;
    }
}
$course = new Course($lectures, $tutorials, $labs);
//print_r(array_values($lectures));
//print_r(array_values($tutorials));
//print_r(array_values($labs));
print_r($course->getLectures());
print_r($course->getTutorials());
print_r($course->getLabs());
//echo ']';
//echo mysqli_fetch_array($response);
mysqli_close($dbc);