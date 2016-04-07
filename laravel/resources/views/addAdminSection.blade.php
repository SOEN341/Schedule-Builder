<?php
require_once('../mysqli_connect.php'); 
$json=$_POST['json'];//username
if (!(isset($json))) {
   $json='{}';
}
//$json='{"section":"UI-X","sectionId":"400","classroom":"H-4","semester":"Winter","type":"Lab","dayOffered":"5","beginTime":"13:35:00","endTime":"14:35:00","courseId":"2","courseCode":"COMP 248","sectionNum":"1"}';

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

$query ="SELECT sectionId FROM sections WHERE sectionId='$sectionId' ";

$response= mysqli_query($dbc,$query);
//echo 'Error: ' . mysqli_error($dbc);

if(mysqli_num_rows($response) <= 0){ //no section with id

$sql="INSERT INTO `sections` (`section`, `sectionId`, `classroom`, `semester`, `type`, `dayOffered`, `beginTime`, `endTime`, `courseId`, `courseCode`, `sectionNum`) VALUES 
('$section', '$sectionId', '$classroom', '$semester', '$type', $dayOffered, '$beginTime', '$endTime', $courseId, '$courseCode', $sectionNum)";

mysqli_query($dbc,$sql);

echo json_encode(array("success"=>"true","Section"=>"$json"));  

} else {
echo json_encode(array("success"=>"false","Section"=>"$json","Salt"=>"Section id present already ?"));  
}

mysqli_close($dbc);