<?php
require_once('../mysqli_connect.php'); 
$json=$_POST['json'];//username
if (!(isset($json))) {
   $json='{}';
}
//$json='{"courseId":"null","courseCode":"COMP 2489895","semester":"Summer","description":"Salt level critical, abort !","name":"Object-Oriented Programming I","credits":"3"}';

$content = json_decode($json, true);
$semester= $content['semester'];
$description= $content['description'];
$name= $content['name'];
$credits= $content['credits'];
$courseCode= $content['courseCode'];
$courseId= 'null';

// var_dump($content);

$query ="SELECT courseId,semester FROM courses WHERE courseCode='$courseCode' AND  semester='$semester'  ";

$response= mysqli_query($dbc,$query);
//echo 'Error: ' . mysqli_error($dbc);

if(mysqli_num_rows($response) <= 0){ 

$sql="INSERT INTO `courses`(`courseId`, `courseCode`, `semester`, `description`, `name`, `credits`) VALUES ('$courseId','$courseCode','$semester','$description','$name','$credits')";

mysqli_query($dbc,$sql);

$queryId ="SELECT courseId FROM courses WHERE courseCode='$courseCode' AND  semester='$semester' ";

$response= mysqli_query($dbc,$queryId);
//echo 'Error: ' . mysqli_error($dbc);

$current=mysqli_fetch_array($response)['courseId'];

echo json_encode(array("success"=>"true","courseID"=>"$current","Course"=>"$json"));  
}
   else {
    echo json_encode(array("success"=>"false","Course"=>"$json","Salt"=>"Course alrady present"));
}
mysqli_close($dbc);