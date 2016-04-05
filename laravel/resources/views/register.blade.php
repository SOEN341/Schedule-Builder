<?php
require_once('../mysqli_connect.php');
$username=$_POST['username'];
$password=$_POST['password'];
$email=$_POST['email'];
$saltValue = createSaltData($username);
$encryptedPassword = createHashedValue($saltValue, $password);

// $username='SprinkKing';
// $password='pass1';
// $email='email@email.com';

$query ="SELECT username FROM users WHERE username='$username' ";
// Check if the username exist already

$response= mysqli_query($dbc,$query);

if(mysqli_num_rows($response) <= 0){

     // if(Hash::needsRehash($encryptedPassword)){
     //     $encryptedPassword = Hash::make('$password');
     // }


    $sql = "INSERT INTO users (username, email, userType, password, CoursesDones, CoursesRem, CLoad, dayOff, pTime) VALUES ('$username', '$email', FALSE ,'$encryptedPassword', '{\"List\":[]}', '{\"List\":[]}', '0', 'None', 'Any')";
    if (mysqli_query($dbc, $sql)) {
            echo json_encode(array("success"=>"true","username"=>"$username","password"=>"$password"));
    } else {
        //echo 'Salt: ' . mysqli_error($dbc);
        echo json_encode(array("success"=>"false","username"=>"$username","password"=>"$password", "salt" => "$saltValue", "encryptedPassword" => "$encryptedPassword"));;
    }
  }
   else {
    echo json_encode(array("success"=>"false","username"=>"$username","error"=>"usernametakenalready"));
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