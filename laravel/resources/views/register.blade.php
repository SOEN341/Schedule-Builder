<?php
require_once('../mysqli_connect.php');
$username=$_POST['username'];
$password=$_POST['password'];
$encryptedPassword = Hash::make('$password');
$email=$_POST['email'];

// $username='SprinkKing';
// $password='pass1';
// $email='email@email.com';

$query ="SELECT username FROM users WHERE username='$username' ";
// Check if the username exist already

$response= mysqli_query($dbc,$query);

 if(mysqli_num_rows($response) <= 0){
    //$sql = "INSERT INTO `341db`.`users` (`username`, `email`, `userType`, `password`, `CoursesDones`, `CoursesRem`, `CLoad`, `dayOff`, `pTime`) VALUES ('$username', '$email', '0', '$password', 'cdone', 'crem', '4', 'Monday', 'Afternoons');";

     if(Hash::needsRehash($encryptedPassword)){
         $encryptedPassword = Hash::make('$password');
     }

     $sql = "INSERT INTO users (username, email, userType, password, CoursesDones, CoursesRem, CLoad, dayOff, pTime) VALUES ('$username', '$email', FALSE ,'$encryptedPassword', '{}, '{}', '4', 'Monday', 'Afternoons')";

        if (mysqli_query($dbc, $sql)) {
            echo json_encode(array("success"=>"true","username"=>"$username","password"=>"$password"));
    }

  }
   else {
    echo json_encode(array("success"=>"false","username"=>"$username","error"=>"usernametakenalready"));
}

mysqli_close($dbc);

