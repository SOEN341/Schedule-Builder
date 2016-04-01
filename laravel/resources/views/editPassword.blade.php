
<?php
$old=$_POST['old'];
$new=$_POST['new'];
// $old='jason';
// $new='pass1';


require_once('../mysqli_connect.php'); // defining and connecting to the database as root
                     

$sql = "UPDATE `users` SET `password`= '$new' WHERE username='$old'";
$response= mysqli_query($dbc,$sql); 
echo json_encode(array("success"=>"true","password"=>"$new"));             

mysqli_close($dbc);
   

