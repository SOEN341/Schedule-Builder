
<?php
$old=$_POST['old'];//username
$name=$_POST['name'];//username
$number=$_POST['number'];//username

// $old='jason';//username
// $name='OBJ-ORIENTED PROGRAMMING II';//username
// $number='250';//username



require_once('../mysqli_connect.php'); // defining and connecting to the database as root
require_once('../needed_taken.php');


$sql= "SELECT * FROM users where username='$old'";
$response= mysqli_query($dbc,$sql);
$unserialized=unserialize(mysqli_fetch_array($response)['CoursesDones']);

array_push($unserialized, new cneeded($name,$number));

$entry=serialize($unserialized);

//CoursesDones 	CoursesRem 	CLoad 	dayOff 	pTime 
 $sql = "UPDATE `users` SET `CoursesDones`='$entry' WHERE username='$old'";

$response= mysqli_query($dbc,$sql);

echo json_encode(array("success"=>"true","username"=>"$old","Cnumber"=>"$number"));  




mysqli_close($dbc);
   

