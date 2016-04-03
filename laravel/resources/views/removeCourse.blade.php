<?php
$courseId=$_POST['courseId']; //course id
//$courseId='13';

require_once('../mysqli_connect.php'); 

$query ="SELECT courseId FROM courses WHERE courseId='$courseId' ";

$response= mysqli_query($dbc,$query);

if(mysqli_num_rows($response) <= 0){ //no course with id

echo json_encode(array("Sucess"=>"false","Course"=>"$courseId","Salt"=>"That courseId does not exist.")); 

}else{

$sql2="DELETE FROM `sections` WHERE courseId='$courseId'";

mysqli_query($dbc,$sql2);

echo 'Section: ' . mysqli_error($dbc) ;	

$sql="DELETE FROM `courses` WHERE courseId='$courseId'";

mysqli_query($dbc,$sql);

echo 'Course: ' . mysqli_error($dbc);



echo json_encode(array("Sucess"=>"true","Course"=>"$courseId"));  

}

mysqli_close($dbc);