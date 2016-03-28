
<?php
$old=$_POST['old'];
$new=$_POST['new'];
// $old='JasonBx';
// $new='pass1';

//{'old':username, 'new':newUsername},

require_once('../mysqli_connect.php'); // defining and connecting to the database as root

$query ="SELECT username FROM users WHERE password='$new' "; // search for the user
// with these credentials                          

$response= mysqli_query($dbc,$query); 


if(mysqli_num_rows($response) <= 0){ 
  $sql = "UPDATE `users` SET `password`= '$new' WHERE username='$old'";
 $response= mysqli_query($dbc,$sql); 
  echo json_encode(array("success"=>"true","password"=>"$new"));             
} else {
  echo json_encode(array("success"=>"false","password"=>"$new"));  
}

mysqli_close($dbc);
   

