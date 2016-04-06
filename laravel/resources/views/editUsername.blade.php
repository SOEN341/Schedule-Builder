<?php
require_once('../mysqli_connect.php');
$old=$_POST['old'];
$new=$_POST['new'];
if (!(isset($old))) {
   $old='';
}
if (!(isset($new))) {
   $new='';
}
// $old='Jason';
// $new='JasonB';

//{'old':username, 'new':newUsername},

 // defining and connecting to the database as root

$query ="SELECT username FROM users WHERE username='$new' "; // search for the user
// with these credentials                          

$response= mysqli_query($dbc,$query); 
//echo 'Error: ' . mysqli_error($dbc);

if(mysqli_num_rows($response) <= 0){
  $sql = "UPDATE `users` SET `username`= '$new' WHERE username='$old'";
 $response= mysqli_query($dbc,$sql); 
  echo json_encode(array("result"=>"true","username"=>"$new"));             
} else {
  echo json_encode(array("result"=>"false","error"=>"usernameexistsalready"));  
}

mysqli_close($dbc);
   

