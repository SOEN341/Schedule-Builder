
<?php
// $old=$_POST['old'];//username
// $name=$_POST['name'];//username
// $number=$_POST['number'];//username

$old='jason';//username
$name='OBJ-ORIENTED PROGRAMMING I';//username
$number='249';//username



require_once('../mysqli_connect.php'); // defining and connecting to the database as root
require_once('../needed_taken.php');


$updatedCNeeded=serialize(array(new cneeded($name,$number)));

echo $updatedCNeeded;


//CoursesDones 	CoursesRem 	CLoad 	dayOff 	pTime 
 $sql = "UPDATE `users` SET `CoursesDones`='$updatedCNeeded' WHERE username='$old'";

$response= mysqli_query($dbc,$sql);






$sql= "SELECT * FROM users where username='$old'";
$response= mysqli_query($dbc,$sql);



foreach (unserialize(mysqli_fetch_array($response)['CoursesDones']) as $arr) {
    	echo nl2br( $arr->name . ",  " .  $arr->number );
    }








// $query ="SELECT username FROM users WHERE email='$new' "; // search for the user
// // with these credentials                          

// $response= mysqli_query($dbc,$query); 


// if(mysqli_num_rows($response) <= 0){ 
//  $sql = "UPDATE `users` SET `email`='$new' WHERE username='$old'";
//  $response= mysqli_query($dbc,$sql); 
//  echo json_encode(array("success"=>"true","username"=>"$old","email"=>"$new"));             
// } else {
//   echo json_encode(array("success"=>"false","username"=>"$old","email"=>"$new"));  
// }
mysqli_close($dbc);
   

