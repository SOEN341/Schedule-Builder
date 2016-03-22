<?php
require_once('../mysqli_connect.php');
$username=$_POST['username'];
$password=$_POST['password'];



$query ="SELECT username FROM users WHERE username='$username' ";
// Check if the username exist already

$response= mysqli_query($dbc,$query);

if(mysqli_num_rows($response) <= 0){
    // creating the  user  in the table
    // $query= "INSERT INTO  users (`fname`, `lName`, `username`, `password`, `cDone`, `remCourse`, `labs`, `tutorials`, `studentId`) VALUES ('Stannis','Baratheon',,,'a','aa','as','a','');";
    $query= "INSERT INTO users(`fname`, `lName`, `email`, `password`, `cDone`, `remCourse`, `labs`, `tutorials`,`userType`, `username`) VALUES ('Jon','Snow','email@email.com','$password','cdone','remcourse','labs','tutorials','0','$username')";
    if (mysqli_query($dbc, $query)) {

        echo json_encode(array("result"=>"registered","username"=>"$username","password"=>"$password"));
    }

} else {
    echo json_encode(array("result"=>"Username taken","username"=>"$username","password"=>"$password"));
}

mysqli_close($dbc);

