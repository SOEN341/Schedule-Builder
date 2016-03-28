
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


if(mysqli_num_rows($response) <= 0){ //number of response is 0, so no user with these credentials
  $sql = "UPDATE `users` SET `username`= '$new' WHERE username='$old'";
 $response= mysqli_query($dbc,$sql); 
  echo json_encode(array("result"=>"good","username"=>"$new"));             
} else {
  echo json_encode(array("result"=>"false","username"=>"$new"));  
}

//$demand=mysqli_fetch_array($response);  // array containing the values in the query

mysqli_close($dbc);
   

