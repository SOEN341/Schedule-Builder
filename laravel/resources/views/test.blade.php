<?php
require_once('../mysqli_connect.php');
require_once('../preferences');
//$username=$_POST['username'];
$username='user17';

$query ="SELECT * FROM users where username='$username' ";
// Check if these credentials are taken

$response= mysqli_query($dbc,$query);

$array= mysqli_fetch_array($response);

echo  $array['CoursesDones'];

$priority=array();

// echo  $array['CoursesRem'];

$schedule= new Schedule(4,'Monday','Morning',$priority);

var_dump($schedule);




// while($current = mysqli_fetch_assoc($response)) {
//     if(++$counter == $numResults) {
//     	echo json_encode($current);
//     }  else {
// 		echo json_encode($current) . ',' ;
// 	}
// }



mysqli_close($dbc);



?>