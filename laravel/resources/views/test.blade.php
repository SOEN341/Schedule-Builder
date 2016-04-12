<?php
require_once('../mysqli_connect.php');
require_once('../preferences');
//$username=$_POST['username'];
$username='user17';

$query ="SELECT * FROM users where username='$username' ";
// Check if these credentials are taken

$response= mysqli_query($dbc,$query);

$array= mysqli_fetch_array($response);

$coursesDone=Array();
$coursesRem=Array();

//$priorityPrereq = array("COMP 248", "COMP 249", "COMP 352", "COMP 232", "MATH 203", "MATH 204", "COMP 346", "ENCS 282", "SOEN 341", "ENGR 213", "ENGR 233", "MATH 205", "CHEM 205", "CHEM 206", "SOEN 228", "MATH 203", "MATH 204","CHEM 204", "PHYS 204", "PHYS 205", "PHYS 206");
$priorityPrereq = array("COMP 248", "COMP 249", "COMP 352", "COMP 232", "MATH 203", "MATH 204", "COMP 346", "ENCS 282", "SOEN 341", "ENGR 213", "ENGR 233","SOEN 228");

$decodedDone=json_decode($array['CoursesDones'],true);

foreach ($decodedDone as $key => $key_value) {
		foreach ($key_value as $x => $x_value) {
		array_push($coursesDone,$x_value['number']);
		    }
}

$decodedrem=json_decode($array['CoursesRem'],true);

foreach ($decodedrem as $key => $key_value) {
		foreach ($key_value as $x => $x_value) {
		array_push($coursesRem,$x_value['number']);
		   }
}

// var_dump($priorityPrereq);

// var_dump($coursesDone);

// var_dump($coursesRem);

$schedule= new Schedule($coursesRem,$coursesDone,4,'Monday','Morning',$priorityPrereq);

var_dump($schedule);


// $query ="SELECT * FROM courses where username='$username' ";
// // Check if these credentials are taken

// $response= mysqli_query($dbc,$query);

// $array= mysqli_fetch_array($response);






// while($current = mysqli_fetch_assoc($response)) {
//     if(++$counter == $numResults) {
//     	echo json_encode($current);
//     }  else {
// 		echo json_encode($current) . ',' ;
// 	}
// }



mysqli_close($dbc);



?>