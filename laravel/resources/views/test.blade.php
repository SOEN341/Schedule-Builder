<?php
require_once('../mysqli_connect.php');
require_once('../preferences');
//$username=$_POST['username'];
//$username='Jason123';
$username='user17';

// $query ="SELECT * FROM users where username='$username' ";
// // Check if these credentials are taken

// $response= mysqli_query($dbc,$query);

// $array= mysqli_fetch_array($response);

// $coursesDone=Array();
// $coursesRem=Array();
// $coursesInformationDone = Array();
// $coursesInformationRem = Array();


// //$priorityPrereq = array("COMP 248", "COMP 249", "COMP 352", "COMP 232", "MATH 203", "MATH 204", "COMP 346", "ENCS 282", "SOEN 341", "ENGR 213", "ENGR 233", "MATH 205", "CHEM 205", "CHEM 206", "SOEN 228", "MATH 203", "MATH 204","CHEM 204", "PHYS 204", "PHYS 205", "PHYS 206");
// $priorityPrereq = array("COMP 248", "COMP 249", "COMP 352", "COMP 232", "COMP 346", "ENCS 282", "SOEN 341", "ENGR 213", "ENGR 233","SOEN 228");

// $decodedDone=json_decode($array['CoursesDones'],true);

// foreach ($decodedDone as $key => $key_value) {
// 		foreach ($key_value as $x => $x_value) {
// 		array_push($coursesDone,$x_value['number']);
// 		   }
// }

// $decodedrem=json_decode($array['CoursesRem'],true);

// foreach ($decodedrem as $key => $key_value) {
// 		foreach ($key_value as $x => $x_value) {
// 		array_push($coursesRem,$x_value['number']);
// 		   }
// }

// var_dump($priorityPrereq);

// var_dump($coursesDone);

// var_dump($coursesRem);



// $schedule= new Schedule($coursesRem,$coursesDone,4,'Monday','Morning',$priorityPrereq);

// var_dump($schedule->courses);		

// $postCull=Array();

// //var_dump($schedule);

// foreach ($schedule->courses as $x => $x_value) {
// 	echo "$x_value";
// 	$query ="SELECT * FROM courses where coursecode='$x_value' ";
// 	// Check if these credentials are taken
// 	$response= mysqli_query($dbc,$query);

// 	$answer= mysqli_fetch_array($response);

// 	$cid=$answer['courseId'];

// 	// echo "   $cid"  ;

// 	// $query ="SELECT prerequisitesList FROM prerequisites where courseId='$cid' ";
// 	// // Check if these credentials are taken
// 	// $response= mysqli_query($dbc,$query);

// 	// echo mysqli_error($dbc);

// 	// $answer2= mysqli_fetch_array($response);

// 	// //var_dump($answer2);

// 	// $json=json_decode($answer2['prerequisitesList'],true);

// 	// //$temp=$json['List'];

// 	// var_dump($json);

// 	//echo $json['List'];



// }

// 	// foreach ($json['List'] as $key => $value) {
// 	// 	foreach ($value as $x => $x_value) {
// 	// 		//array_push($postCull,$x_value);	
// 	// 		var_dump($x_value);
// 	// 		// foreach ($x_value as $y => $y_value) {
// 	// 		// 	echo $y_value;			}
// 	// 	}
		
// 	// }	
	
// 	//array_push($postCull,$json['courseCode']);
		   
	





	$sql = "SELECT * FROM `prerequisites`";
	// Check if these credentials are taken
	$result= mysqli_query($dbc,$sql);

	//echo mysqli_error($dbc);

	$result3= mysqli_fetch_array($result);

	var_dump($result3);

	// $json=

	//$temp=$json['List'];

	// echo "$json";

	// var_dump($json);



//var_dump($postCull);



// $query ="SELECT * FROM prerequisites where username='$username' ";
// // Check if these credentials are taken

// $response= mysqli_query($dbc,$query);

// $array= mysqli_fetch_array($response);

// $coursesDone=Array();
// $coursesRem=Array();


// $courses=  $schedule->courses;


// foreach ($courses as $key => $value){
// 	//$temp = $value['number'];
// 	$queryForCoursesDone = mysqli_fetch_array(mysqli_query($dbc,"SELECT * FROM sections WHERE courseCode = '$value' "));
// 	$query ="SELECT * FROM sections where courseCode='$value' ";
// 	array_push($coursesInformationDone, $queryForCoursesDone);

// 	//this returns all the sections
// 	//create an object $course containing all the sections(lecture, lab, tutorial) for all the courses in $courses
// }

// print_r(array_values($coursesInformationDone));
//print_r(array_values($courses));

//loop through $arrayofcourses
//schedule.add($courses)






mysqli_close($dbc);



?>