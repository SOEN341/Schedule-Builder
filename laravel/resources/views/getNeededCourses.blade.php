<?php
$username=$_POST['username'];
// $username='jason';

require_once('../mysqli_connect.php'); // defining and connecting to the database as root
require_once('../needed_taken.php');

$sql= "SELECT * FROM users where username='$username'";
$response= mysqli_query($dbc,$sql);

foreach (unserialize(mysqli_fetch_array($response)['CoursesDones']) as $arr) {
      	echo json_encode(array($arr->number=>$arr->name));  
    }


mysqli_close($dbc);
   

