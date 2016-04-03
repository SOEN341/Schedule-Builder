<?php
$json=$_POST['json'];//username
//$json='{"section":"UI-X","sectionId":"1","classroom":"H-42000000000000","semester":"Winter","type":"Lab","dayOffered":"5","beginTime":"13:35:00","endTime":"14:35:00","courseId":"2","courseCode":"COMP 248","sectionNum":"1"}';

$content = json_decode($json, true);

$section= $content['section'];
$sectionId=$content['sectionId'];
$classroom=$content['classroom'];
$semester=$content['semester'];
$type=$content['type'];
$dayOffered=$content['dayOffered'];
$beginTime=$content['beginTime'];
$endTime=$content['endTime'];
$courseId= $content['courseId'];
$courseCode= $content['courseCode'];
$sectionNum=$content['sectionNum'];

// var_dump($content);

require_once('../mysqli_connect.php'); 

$sql="UPDATE `sections` SET `section`='$section',`sectionId`='$sectionId',`classroom`='$classroom',`semester`='$semester',`type`='$semester',`dayOffered`='$dayOffered',`beginTime`='$beginTime',`endTime`='$endTime',`courseId`='$courseId',`courseCode`='$courseCode',`sectionNum`='$sectionNum' WHERE sectionId=$sectionId ";

$response= mysqli_query($dbc,$sql);

echo json_encode(array("success"=>"true","Section"=>"$json"));  

mysqli_close($dbc);