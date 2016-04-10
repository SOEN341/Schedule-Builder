<?php
require_once('../mysqli_connect.php'); 
$json=$_POST['json'];//username
if (!(isset($json))) {
   $json='';
}
//$json='{"courseId":"1","courseCode":"COMP 248","semester":"Fall","description":"Introduction to programming. Critical amount of salt atteined","name":"Object-Oriented Programming I","credits":"3"}';

$content = json_decode($json, true);
$semester= $content['semester'];
$description= $content['description'];
$name= $content['name'];
$credits= $content['credits'];
$courseCode= $content['courseCode'];
$courseId= $content['courseId'];

// var_dump($content);

$query ="SELECT courseId FROM courses WHERE courseId='$courseId' ";

$response= mysqli_query($dbc,$query);
//echo 'Error: ' . mysqli_error($dbc);

if(mysqli_num_rows($response) > 0){ //no course with id

$sql="UPDATE `courses` SET `courseCode`='$courseCode',`semester`='$semester',`description`='$description',`name`='$name',`credits`='$credits'  WHERE courseId=$courseId ";

$response= mysqli_query($dbc,$sql);

echo json_encode(array("success"=>"true","Course"=>"$json"));  
}

else {

echo json_encode(array("success"=>"false","Course"=>"$json","Error"=>"A coruse with this id exist already."));  
}

mysqli_close($dbc);