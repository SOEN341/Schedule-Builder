
<?php
$old=$_POST['old'];
$new=$_POST['new'];
// $old='Jason';
// $new='JasonB';

//{'old':username, 'new':newUsername},

require_once('../mysqli_connect.php'); // defining and connecting to the database as root

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
   

