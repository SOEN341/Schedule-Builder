<?php
require_once('../mysqli_connect.php');
$username=$_POST['old'];
$newPassword=$_POST['new'];
if (!(isset($username))) {
   $username='';
}
if (!(isset($newPassword))) {
   $newPassword='';
}

// $old='jason';
// $new='pass1';

$saltValue = createSaltData($username);
$encryptedPassword = createHashedValue($saltValue, $newPassword);

$sql = "UPDATE `users` SET `password`= '$encryptedPassword' WHERE username='$username'";
$response= mysqli_query($dbc,$sql);



echo json_encode(array("success"=>"true","password"=>"$newPassword"));

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