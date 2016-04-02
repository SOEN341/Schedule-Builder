
<?php
$json=$_POST['json'];//username
//$json='{"courseId":"1","courseCode":"COMP 248","semester":"Fall","description":"Introduction to programming. Critical amount of salt atteined","name":"Object-Oriented Programming I","credits":"3"}';

$content = json_decode($json, true);
$semester= $content['courseCode'];
$description= $content['description'];
$name= $content['name'];
$credits= $content['credits'];
$courseCode= $content['courseCode'];
$courseId= $content['courseId'];

// var_dump($content);

require_once('../mysqli_connect.php'); 

$sql="UPDATE `courses` SET `courseId`='$courseId',`courseCode`='$courseCode',`semester`='$semester',`description`='$description',`name`='$name',`credits`='$credits'  WHERE courseId=$courseId ";

$response= mysqli_query($dbc,$sql);

echo json_encode(array("success"=>"true","Course"=>"$json"));  

mysqli_close($dbc);