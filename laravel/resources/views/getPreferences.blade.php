<?php
$username=$_POST['username'];
 //$username='SprinkKing';

require_once('../mysqli_connect.php'); // defining and connecting to the database as root

$query ="SELECT email,CLoad,dayOff,pTime  FROM users WHERE username='$username'"; // search for the user
  
$response= mysqli_query($dbc,$query); 
//echo 'Error: ' . mysqli_error($dbc);


if(mysqli_num_rows($response) <= 0){ 
  echo json_encode(array("success"=>"false","username"=>"$username","error"=>"usernamenotfound"));             
} else {
	$row = mysqli_fetch_array($response); // CLoad 	dayOff 	pTime 
	$CLoad= $row['CLoad'];
	$dayOff= $row['dayOff'];
	$pTime= $row['pTime'];
  echo json_encode(array("success"=>"true","username"=>"$username","courseload"=>"$CLoad","dayoff"=>"$dayOff","preferredTime"=>"$pTime"));  
}
mysqli_close($dbc);
   

