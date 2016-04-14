<?php
require_once('../mysqli_connect.php');
$old=$_POST['old'];
$new=$_POST['new'];
$newPassword=$_POST['password'];
$saltValue = createSaltData($new);
$encryptedPassword = createHashedValue($saltValue, $newPassword);

if (!(isset($old))) {
   $old='';
}
if (!(isset($new))) {
   $new='';
}
// $old='Jason';
// $new='JasonB';

//{'old':username, 'new':newUsername},

$query ="SELECT username FROM users WHERE username='$new' "; // search for the user
// with these credentials                          

$response= mysqli_query($dbc,$query); 
//echo 'Error: ' . mysqli_error($dbc);

if(mysqli_num_rows($response) <= 0){
  $sql = "UPDATE `users` SET `username`= '$new', `password` = '$encryptedPassword' WHERE username='$old'";
 $response= mysqli_query($dbc,$sql); 
  echo json_encode(array("result"=>"true","username"=>"$new", "encryptedPassword" => "$encryptedPassword"));
} else {
  echo json_encode(array("result"=>"false","error"=>"usernameexistsalready"));  
}

mysqli_close($dbc);


function createSaltData($username){
    $saltValue = '$2a$14$'.md5(strtolower($username));
    return $saltValue;
}

function createHashedValue($salt, $password){
    $hashedValue = crypt($password, $salt);
    $hashedValue = substr($hashedValue, 29);
    return $hashedValue;
}