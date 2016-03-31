
<?php
$old=$_POST['username'];//username
$json=$_POST['json'];//username
// $old='Jason';
// $json='{"List":[{"name":"oop", "number":"248"},{"name":"oop2", "number":"249"}]}';

$contents = utf8_encode($json); 
//var_dump(json_decode($contents, true)); //testing purposes

require_once('../mysqli_connect.php'); // defining and connecting to the database as root
require_once('../needed_taken.php');

//CoursesDones 	CoursesRem 	CLoad 	dayOff 	pTime 
$sql = "UPDATE `users` SET `CoursesDones`='$contents' WHERE username='$old'";

$response= mysqli_query($dbc,$sql);

echo json_encode(array("success"=>"true","username"=>"$old","List"=>"$contents"));  




mysqli_close($dbc);
   

