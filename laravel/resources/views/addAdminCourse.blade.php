
<?php
//$json=$_POST['json'];//username
$json='{"courseId":"1","courseCode":"COMP 248","semester":"Fall","description":"Salt level critical, abort !","name":"Object-Oriented Programming I","credits":"3"}';

$content = json_decode($json, true);
$semester= $content['semester'];
$description= $content['description'];
$name= $content['name'];
$credits= $content['credits'];
$courseCode= $content['courseCode'];
$courseId= $content['courseId'];

// var_dump($content);

require_once('../mysqli_connect.php'); 

$query ="SELECT courseId FROM courses WHERE courseId='$courseId' ";

$response= mysqli_query($dbc,$query);

if(mysqli_num_rows($response) <= 0){ //no course with id

$sql="INSERT INTO `courses`(`courseId`, `courseCode`, `semester`, `description`, `name`, `credits`) VALUES ('$courseId','$courseCode','$semester','$description','$name','$credits')";

mysqli_query($dbc,$sql);

echo json_encode(array("success"=>"true","Course"=>"$json"));  
}
   else {
    echo json_encode(array("success"=>"false","Course"=>"$json","Salt"=>"course id alrady present ?"));
}

mysqli_close($dbc);