<?php
$username=$_POST['username'];
//$username='jason';

require_once('../mysqli_connect.php'); // defining and connecting to the database as root
require_once('../needed_taken.php');

$sql= "SELECT * FROM users where username='$username'";
$response= mysqli_query($dbc,$sql);
echo mysqli_fetch_array($response)['CoursesRem'];
//var_dump(json_decode(utf8_encode(mysqli_fetch_array($response)['CoursesDones']),true));

mysqli_close($dbc);
   
