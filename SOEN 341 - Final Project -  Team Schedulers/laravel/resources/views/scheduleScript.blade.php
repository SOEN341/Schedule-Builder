<?php
require_once('../mysqli_connect.php');
require_once('../preferences');
require_once('../Course.php');
$username=$_POST['username'];
//$username='user17';

$coursesDone=Array();
$coursesRem=Array();
$coursesLectures = Array();
$coursesTutorials = Array();
$coursesLabs = Array();


$coursesDone=Array();
$coursesRem=Array();
$coursesInformationDone = Array();
$coursesInformationRem = Array();

$tempQueryForCourseLecture = Array();
$tempQueryForCourseTutorial = Array();
$tempQueryForCourseLab = Array();

$courseload='';

$query ="SELECT * FROM users where username='$username' ";
// Check if these credentials are taken

$response= mysqli_query($dbc,$query);


$array= mysqli_fetch_array($response);

//$priorityPrereq = array("COMP 248", "COMP 249", "COMP 352", "COMP 232", "MATH 203", "MATH 204", "COMP 346", "ENCS 282", "SOEN 341", "ENGR 213", "ENGR 233", "MATH 205", "CHEM 205", "CHEM 206", "SOEN 228", "MATH 203", "MATH 204","CHEM 204", "PHYS 204", "PHYS 205", "PHYS 206");
$priorityPrereq = array("COMP 248", "COMP 249", "COMP 352", "COMP 232", "COMP 346", "ENCS 282", "SOEN 341", "ENGR 213", "ENGR 233","SOEN 228");

$courseload=$array['CLoad'];

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

array_push($coursesDone,"MATH 205","MATH 203","MATH 204","PHYS 204","PHYS 205","CHEM 203"); //hardcoded because not added autamitically when the course list is generated

//var_dump($priorityPrereq);

//var_dump($coursesDone);

// var_dump($coursesRem);


$schedule= new Schedule($coursesRem,$coursesDone,4,'Monday','Morning',$priorityPrereq);

$courses=$schedule->courses;


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//removing the course the user does not have the prereq for

$postCull=Array();
$anot=Array();

//var_dump($courses);

foreach ($schedule->courses as $x => $x_value) {
	//echo "$x_value";
	$query ="SELECT * FROM courses where coursecode='$x_value' ";
	// Check if these credentials are taken
	$response= mysqli_query($dbc,$query);

	$answer= mysqli_fetch_array($response);

	$cid=$answer['courseId'];

	//echo " $cid"  ;


	if ($cid==41) {
		$cid=132;
	}


	$query ="SELECT prerequisitesList FROM prerequisites where courseId='$cid' ";
	// Check if these credentials are taken
	$response= mysqli_query($dbc,$query);

	//var_dump($response);	

	$answer2= mysqli_fetch_array($response);

	//var_dump($answer2);

	$json=json_decode($answer2['prerequisitesList'],true);

	//$temp=$json['List'];

	//var_dump($json);

	//echo $json['List']; //array to string conversion error

	if ($cid==5) {
		$json=json_decode('{"List":[{"type":"1", "courseCode" : "COMP 249"},{"type":"1", "courseCode" : "COMP 232"}]}',true);
	}

	$temp=$json['List'];

	$fcourse=$x_value;

	//echo "$fcourse";

	//var_dump($temp);

	if(count($temp)===0)
		array_push($postCull,$fcourse);


	foreach ($temp as $key => $value) {
		//echo $value['courseCode'];
		$val=$value['courseCode'];
		//echo " needs:" . $val;
		if(in_array("$val", $coursesDone,true)){
			//	echo " True.  ";
			array_push($postCull,$fcourse);
		} else {
			//echo "not.    ";
			array_push($anot, $fcourse);
		}

	}

}
// --------------------------------------------------------------------------------------------------

$courses=array_unique(array_diff($postCull,$anot));	//list of priotiry courses after the prereq were removed	


//var_dump($courses);

$schedule->courses=$courses;

$arrayofcourses=Array();

foreach ($courses as $key => $value){

	$sql= "SELECT * FROM sections WHERE courseCode = '$value' AND type = 'Lecture'";
	$response= mysqli_query($dbc,$sql);
	//var_dump(mysqli_fetch_array($response));

	$numResults = mysqli_num_rows($response);
	$counter = 0;
	while($current = mysqli_fetch_assoc($response)) {
       	array_push($tempQueryForCourseLecture,json_encode($current));   
	}

	$sql= "SELECT * FROM sections WHERE courseCode = '$value' AND type = 'Tutorial'";
	$response= mysqli_query($dbc,$sql);
	//var_dump(mysqli_fetch_array($response));

	$numResults = mysqli_num_rows($response);
	$counter = 0;
	while($current = mysqli_fetch_assoc($response)) {
       	array_push($tempQueryForCourseTutorial,json_encode($current));   
	}


	$sql= "SELECT * FROM sections WHERE courseCode = '$value' AND type = 'Lab'";
	$response= mysqli_query($dbc,$sql);
	//var_dump(mysqli_fetch_array($response));

	$numResults = mysqli_num_rows($response);
	$counter = 0;
	while($current = mysqli_fetch_assoc($response)) {
       	array_push($tempQueryForCourseLab,json_encode($current));   
	}


	
	//TODO: this returns all the sections
	//TODO: create an object $course containing all the sections(lecture, lab, tutorial) for all the courses in $courses
	$course = new Course($value, $tempQueryForCourseLecture, $tempQueryForCourseTutorial, $tempQueryForCourseLab);
	//var_dump($course->getName());
	array_push($arrayofcourses,$course);
}

//var_dump($arrayofcourses);

	foreach ($arrayofcourses as $key => $value) {
	if (count($schedule->scheduleCourse)==$courseload) {
		//echo "Cooooooooooooooooooooooooooooooooooooooooooooou" .count($schedule->scheduleCourse);
		//echo $courseload;
		break;
	}
		$schedule->addCourse($value);
		
	}

$remainingList=Array();

foreach ($anot as $key => $value) {
	array_push($remainingList,$value); //pushing the courses tha the student is going to need because they are important prereqs for the priority list
}

foreach ($coursesRem as $key => $value) {
	array_push($remainingList,$value);
}

//var_dump($courses);
//var_dump(array_unique($remainingList));
$remaininglist=array_diff($remainingList, $courses);
//var_dump(array_unique($remaininglist));


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//removing the courses from the needed list that the user does not have the preereq for


$postCull2=Array();
$anot2=Array();

//var_dump($courses);

foreach ($remaininglist as $x => $x_value) {
	//echo "$x_value";
	$query ="SELECT * FROM courses where coursecode='$x_value' ";
	// Check if these credentials are taken
	$response= mysqli_query($dbc,$query);

	$answer= mysqli_fetch_array($response);

	$cid=$answer['courseId'];


	if ($cid==41) {
		$cid=132;
	}


	//echo " $cid"  ;

	$query ="SELECT prerequisitesList FROM prerequisites where courseId='$cid' ";
	// Check if these credentials are taken
	$response= mysqli_query($dbc,$query);

	$answer2= mysqli_fetch_array($response);

	//var_dump($answer2);

	$json=json_decode($answer2['prerequisitesList'],true);

	//$temp=$json['List'];

	//var_dump($json);

	//echo $json['List']; //array to string conversion error

	if ($cid==5) {
		$json=json_decode('{"List":[{"type":"1", "courseCode" : "COMP 249"},{"type":"1", "courseCode" : "COMP 232"}]}',true);
	}

	$temp=$json['List'];

	$fcourse=$x_value;

	if(count($temp)===0)
		array_push($postCull2,$fcourse);
	else
		foreach ($temp as $key => $value) {
			//echo $value['courseCode'];
			$val=$value['courseCode'];
			//echo " needs:" . $val;
			if(in_array("$val", $coursesDone,true)){
				//echo " True.  ";
				array_push($postCull2,$fcourse);
			} else {
				//echo "not.    ";
				array_push($anot2, $fcourse);
			}

		}

}

//var_dump(array_unique($anot2));
//var_dump($postCull2);
$remaininglist=array_unique(array_diff(array_unique($postCull2),array_unique($anot2)));	//list of priotiry courses after the prereq were removed

// var_dump($remaininglist)
//---------------------------------------------------------------------------------------------------------------
//transforming into courses objects again
$arrayofcourses2=Array();

foreach ($remaininglist as $key => $value){
	$sql= "SELECT * FROM sections WHERE courseCode = '$value' AND type = 'Lecture'";
	$response= mysqli_query($dbc,$sql);
	//var_dump(mysqli_fetch_array($response));

	$numResults = mysqli_num_rows($response);
	$counter = 0;
	while($current = mysqli_fetch_assoc($response)) {
       	array_push($tempQueryForCourseLecture,json_encode($current));   
	}

	$sql= "SELECT * FROM sections WHERE courseCode = '$value' AND type = 'Tutorial'";
	$response= mysqli_query($dbc,$sql);
	//var_dump(mysqli_fetch_array($response));

	$numResults = mysqli_num_rows($response);
	$counter = 0;
	while($current = mysqli_fetch_assoc($response)) {
       	array_push($tempQueryForCourseTutorial,json_encode($current));   
	}


	$sql= "SELECT * FROM sections WHERE courseCode = '$value' AND type = 'Lab'";
	$response= mysqli_query($dbc,$sql);
	//var_dump(mysqli_fetch_array($response));

	$numResults = mysqli_num_rows($response);
	$counter = 0;
	while($current = mysqli_fetch_assoc($response)) {
       	array_push($tempQueryForCourseLab,json_encode($current));   
	}

	//TODO: this returns all the sections
	//TODO: create an object $course containing all the sections(lecture, lab, tutorial) for all the courses in $courses
	$course = new Course($value, $tempQueryForCourseLecture, $tempQueryForCourseTutorial, $tempQueryForCourseLab);
	//var_dump($course->getName());
	array_push($arrayofcourses2,$course);

}

foreach ($arrayofcourses2 as $key => $value) {	
	if (count($schedule->scheduleCourse)==$courseload) {
		//echo "Cooooooooooooooooooooooooooooooooooooooooooooou" .count($schedule->scheduleCourse);
		//echo $courseload;
		break;
	}
	$schedule->addCourse($value);
	
}

//var_dump($schedule->schedule);

$temp=Array();
$new_array=Array();

foreach ($schedule->schedule as $key => $value) {

    if( !in_array( $value['sectionId'], $temp )) {
        $new_array[] = $value;
        $temp[]    = $value['sectionId'];
    }
}

//removing duplicates
//var_dump($new_array);



$counter=0;
$total=count($new_array);

echo '{"schedule": [';

foreach ($new_array as $key => $value) {
	//var_dump($value);
	$counter++;
	 if($counter === $total) {
	 	echo json_encode($value);
		}  else {
		echo json_encode($value) . "," ;
	}	

}
echo ']}';

// echo
	// "section": "JJ",
	// "classroom": "H555",
	// "type": "Lab",
	// "day": "1",
	// "beginTime": "11:30",
	// "endTime": "14:00",
	// "course": "SOEN 346"

//$schedule='{"schedule": [{"section": "JJ","classroom": "H555","type": "Lab","day": "1","beginTime": "11:30","endTime": "14:00","course": "SOEN 346"}, {"section": "HH","classroom": "MB S2.051","type": "Lecture","day": "24","beginTime": "11:30","endTime": "12:45","course": "SOEN 341"}]}';

// $schedule='{"schedule": [{"section":"S SB","sectionId":"28","classroom":"SGW-H-929","semester":"Winter","type":"Tutorial","dayOffered":"1","beginTime":"10:15:00","endTime":"11:55:00","courseId":"4","courseCode":"COMP 249","sectionNum":"2"},{"section":"S","sectionId":"35","classroom":"SGW-H-820","semester":"Winter","type":"Lecture","dayOffered":"13","beginTime":"08:45:00","endTime":"10:00:00","courseId":"4","courseCode":"COMP 249","sectionNum":"3"},{"section":"R RC","sectionId":"131","classroom":"SGW-MB-S1.105","semester":"Winter","type":"Tutorial","dayOffered":"5","beginTime":"14:15:00","endTime":"15:55:00","courseId":"40","courseCode":"ENGR 233","sectionNum":"1"},{"section":"R","sectionId":"150","classroom":"SGW-H-411","semester":"Winter","type":"Lecture","dayOffered":"24","beginTime":"11:45:00","endTime":"13:00:00","courseId":"40","courseCode":"ENGR 233","sectionNum":"1"},{"section":"H HC","sectionId":"59","classroom":"SGW-H-825","semester":"Winter","type":"Tutorial","dayOffered":"3","beginTime":"16:15:00","endTime":"17:55:00","courseId":"13","courseCode":"SOEN 228","sectionNum":"2"},{"section":"H","sectionId":"66","classroom":"SGW-MB-S2.210","semester":"Winter","type":"Lecture","dayOffered":"13","beginTime":"14:45:00","endTime":"16:00:00","courseId":"13","courseCode":"SOEN 228","sectionNum":"2"},{"section":"S SB","sectionId":"68","classroom":"SGW-H-917","semester":"Winter","type":"Tutorial","dayOffered":"4","beginTime":"10:15:00","endTime":"11:55:00","courseId":"15","courseCode":"SOEN 287","sectionNum":"1"},{"section":"S","sectionId":"73","classroom":"SGW-H-967","semester":"Winter","type":"Lecture","dayOffered":"24","beginTime":"08:45:00","endTime":"10:00:00","courseId":"15","courseCode":"SOEN 287","sectionNum":"1"}]}';

// var_dump(json_decode($schedule,true));


mysqli_close($dbc);



?>
		