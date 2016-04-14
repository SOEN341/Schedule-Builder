<?php
require_once('../mysqli_connect.php'); // defining and connecting to the database as root
$username=$_POST['username'];
if (!(isset($username))) {
   $username='';
}
//$username='jason';
$sql= "SELECT * FROM users where username='$username'";
$response= mysqli_query($dbc,$sql);
echo mysqli_fetch_array($response)['CoursesDones'];
//var_dump(json_decode(utf8_encode(mysqli_fetch_array($response)['CoursesDones']),true));

mysqli_close($dbc);