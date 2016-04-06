
<?php
$old=$_POST['old'];//username
$new=$_POST['new'];//new emails
if (!(isset($old))) {
   $old='';
}
if (!(isset($new))) {
   $new='';
}
// $old='JasonB';
// $new='newEnail@email.com';

//{'username':username, 'new':newEmail}, from server bridge

require_once('../mysqli_connect.php'); // defining and connecting to the database as root

$query ="SELECT username FROM users WHERE email='$new' "; // search for the user
// with these credentials                          

$response= mysqli_query($dbc,$query); 


if(mysqli_num_rows($response) <= 0){ 
 $sql = "UPDATE `users` SET `email`='$new' WHERE username='$old'";
 $response= mysqli_query($dbc,$sql); 
 echo json_encode(array("success"=>"true","username"=>"$old","email"=>"$new"));             
} else {
  echo json_encode(array("success"=>"false","username"=>"$old","email"=>"$new"));  
}
mysqli_close($dbc);
   

