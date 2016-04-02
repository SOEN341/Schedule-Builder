
<?php
$username=$_POST['old'];
$newPassword=$_POST['new'];
// $old='jason';
// $new='pass1';


require_once('../mysqli_connect.php'); // defining and connecting to the database as root
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


