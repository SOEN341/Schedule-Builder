<?php
$username=$_POST['username'];
// $username='JasonB';

require_once('../mysqli_connect.php'); // defining and connecting to the database as root

$query ="SELECT email FROM users WHERE username='$username'"; // search for the user
// with these credentials                          

$response= mysqli_query($dbc,$query); 
//echo 'Error: ' . mysqli_error($dbc);


if(mysqli_num_rows($response) <= 0){ //number of response is 0, so no user with this email
  echo json_encode(array("result"=>"bad","username"=>"$username","error"=>"usernamenotfound"));             
} else {
	$row = mysqli_fetch_array($response);
	$email= $row['email'];
  echo json_encode(array("result"=>"good","username"=>"$username","email"=>"$email"));  
}
mysqli_close($dbc);
   

