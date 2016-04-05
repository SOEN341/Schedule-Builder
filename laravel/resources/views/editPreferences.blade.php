<?php
// {username:’’,cload:'',dayoff:'',preftime:''}}
$username=$_POST['username'];//username
$cload=$_POST['cload'];//new email
$dayoff=$_POST['dayoff'];//new email
$preftime=$_POST['preftime'];//new email

// $username='JasonB';//username
// $cload='5';//new email
// $dayoff='Monday';//new email
// $preftime='Mornings';//new email

require_once('../mysqli_connect.php'); // defining and connecting to the database as root
require_once('../preferences.php'); //preference class

$pref= new preferences($cload,$dayoff,$preftime);

$query ="SELECT username FROM users WHERE username='$username' "; 

$response= mysqli_query($dbc,$query); 
if(mysqli_num_rows($response) <= 0){ 
 echo json_encode(array("success"=>"false","username"=>"$username","error"=>"usernamenotfound"));             
} else {
  $sql = "UPDATE `users` SET `CLoad`='$pref->courseLoad', `dayOff`='$pref->dayOff',`pTime`='$pref->prefTime'  WHERE username='$username'"; // CLoad 	dayOff 	pTime 
 $response= mysqli_query($dbc,$sql); 
 echo json_encode(array("success"=>"true","username"=>"$username","courseload"=>"$pref->courseLoad","dayoff"=>"$pref->dayOff","preftime"=>"$pref->prefTime"));
}
mysqli_close($dbc);
   

