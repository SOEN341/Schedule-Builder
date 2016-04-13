<?php
require_once('../mysqli_connect.php');
require_once('../preferences');
require_once('../Course.php');
//$username=$_POST['username'];
$username='user17';

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
	$queryForCourseLecture =mysqli_fetch_assoc(mysqli_query($dbc, "SELECT * FROM sections WHERE courseCode = '$value' AND type = 'Lecture'"));
	$queryForCourseTutorial = mysqli_fetch_assoc(mysqli_query($dbc, "SELECT * FROM sections WHERE courseCode = '$value' AND type = 'Tutorial'"));
	$queryForCourseLab = mysqli_fetch_assoc(mysqli_query($dbc, "SELECT * FROM sections WHERE courseCode = '$value' AND type = 'Lab'"));
	$tempArr = $queryForCourseLab;

	$responseLecture = mysqli_query($dbc, "SELECT * FROM sections WHERE courseCode = '$value' AND type = 'Lecture'");
	$responseTutorial = mysqli_query($dbc, "SELECT * FROM sections WHERE courseCode = '$value' AND type = 'Tutorial'");
	$responseLab= mysqli_query($dbc, "SELECT * FROM sections WHERE courseCode = '$value' AND type = 'Lab'");;


	if(mysqli_num_rows($responseLecture) <= 0){
		continue;
	}
	else{
		foreach ($queryForCourseLecture as $key2 => $lecture){
			array_push($tempQueryForCourseLecture, $lecture);
		}
	}
	if(mysqli_num_rows($responseTutorial) <= 0){
		continue;
	}
	else{
		foreach ($queryForCourseTutorial as $key3 => $tutorial){
			array_push($tempQueryForCourseTutorial, $tutorial);
		}
	}


	if(mysqli_num_rows($responseLab) <= 0){
		continue;
	}
	else{
		foreach ($queryForCourseLab as $key4 => $labStuff){
			array_push($tempQueryForCourseLab, $labStuff);
		}
	}


	//$tempQueryForCourseLab = array_filter($tempArr,'strlen');
	//print_r(array_values($tempQueryForCourseLecture));
	//print_r(array_values($tempQueryForCourseTutorial));
	//var_dump($queryForCourseLecture);

	$jsonLectures = json_encode($tempQueryForCourseLecture);
	$jsonTutorials = json_encode($tempQueryForCourseTutorial);
	$jsonLabs = json_encode($tempQueryForCourseLab);

	//echo '"';
	//$query ="SELECT * FROM sections where courseCode='$value' ";
	array_push($coursesLectures, $jsonLectures);
	array_push($coursesTutorials,$jsonTutorials);
	array_push($coursesLabs, $jsonLabs);

	//TODO: this returns all the sections
	//TODO: create an object $course containing all the sections(lecture, lab, tutorial) for all the courses in $courses
	$course = new Course($value, $coursesLectures, $coursesTutorials, $coursesLabs);
	//var_dump($course->getName());
	array_push($arrayofcourses,$course);
}

//var_dump($arrayofcourses);

foreach ($arrayofcourses as $key => $value) {
	// if (count($schedule->schedule)==$courseload) {
	// 	break;
	// }
	//var_dump($value);
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
$queryForCourseLecture =mysqli_fetch_assoc(mysqli_query($dbc, "SELECT * FROM sections WHERE courseCode = '$value' AND type = 'Lecture'"));
	$queryForCourseTutorial = mysqli_fetch_assoc(mysqli_query($dbc, "SELECT * FROM sections WHERE courseCode = '$value' AND type = 'Tutorial'"));
	$queryForCourseLab = mysqli_fetch_assoc(mysqli_query($dbc, "SELECT * FROM sections WHERE courseCode = '$value' AND type = 'Lab'"));
	$tempArr = $queryForCourseLab;

	$responseLecture = mysqli_query($dbc, "SELECT * FROM sections WHERE courseCode = '$value' AND type = 'Lecture'");
	$responseTutorial = mysqli_query($dbc, "SELECT * FROM sections WHERE courseCode = '$value' AND type = 'Tutorial'");
	$responseLab= mysqli_query($dbc, "SELECT * FROM sections WHERE courseCode = '$value' AND type = 'Lab'");;


	if(mysqli_num_rows($responseLecture) <= 0){
		continue;
	}
	else{
		foreach ($queryForCourseLecture as $key2 => $lecture){
			array_push($tempQueryForCourseLecture, $lecture);
		}
	}
	if(mysqli_num_rows($responseTutorial) <= 0){
		continue;
	}
	else{
		foreach ($queryForCourseTutorial as $key3 => $tutorial){
			array_push($tempQueryForCourseTutorial, $tutorial);
		}
	}


	if(mysqli_num_rows($responseLab) <= 0){
		continue;
	}
	else{
		foreach ($queryForCourseLab as $key4 => $labStuff){
			array_push($tempQueryForCourseLab, $labStuff);
		}
	}


	//$tempQueryForCourseLab = array_filter($tempArr,'strlen');
	//print_r(array_values($tempQueryForCourseLecture));
	//print_r(array_values($tempQueryForCourseTutorial));
	//var_dump($queryForCourseLecture);

	$jsonLectures = json_encode($tempQueryForCourseLecture);
	$jsonTutorials = json_encode($tempQueryForCourseTutorial);
	$jsonLabs = json_encode($tempQueryForCourseLab);

	//echo '"';
	//$query ="SELECT * FROM sections where courseCode='$value' ";
	array_push($coursesLectures, $jsonLectures);
	array_push($coursesTutorials,$jsonTutorials);
	array_push($coursesLabs, $jsonLabs);

	//TODO: this returns all the sections
	//TODO: create an object $course containing all the sections(lecture, lab, tutorial) for all the courses in $courses
	$course = new Course($value, $coursesLectures, $coursesTutorials, $coursesLabs);
	//var_dump($course->getName());
	array_push($arrayofcourses,$course);

}

foreach ($arrayofcourses2 as $key => $value) {
	// if (count($schedule->schedule)==$courseload) {
	// 	break;
	// }
	$schedule->addCourse($value);
}


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//generating the course sequence-----------

//get the courses currently in the schedule
$newTaken=Array();
$newTaken=$coursesDone;
$newRem=$coursesRem;


//add them to courses taken 
foreach ($newTaken as $key => $value) {
	//add the values to the array of courses taken
}

$result=array_diff($newRem, $newTaken); 

//var_dump($result);

$counter2=0;


while (count($result)!=0 && $counter2<10) {

//remove them from courses needed
$result=array_diff(array_unique($newRem), array_unique($newTaken)); //returns the list where the  new taken courses( courses that are currently in the schedule) were removed from the list coure needed
echo "Counter". $counter2;
//var_dump($result);
//var_dump($newRem);
//var_dump($newTaken);

	//cull courses needed to get courses the user can take and store the prereq he does not have in the anotc array
	$postCullc=Array();
	$anotc=Array();

		foreach ($result as $x => $x_value) {
		//echo "$x_value";
		$query ="SELECT * FROM courses where coursecode='$x_value' ";
		// Check if these credentials are taken
		$response= mysqli_query($dbc,$query);

		$answer= mysqli_fetch_array($response);

		$cid=$answer['courseId'];
		

		if ($cid==41) {
			$cid=132;
		}

		
		//echo "$cid    <br/>"	;

		$query ="SELECT prerequisitesList FROM prerequisites where courseId='$cid'  ";
		// Check if these credentials are taken
		$response= mysqli_query($dbc,$query);

		//var_dump($response);	

		$answer2= mysqli_fetch_array($response);

		
		$json=json_decode($answer2['prerequisitesList'],true);

		if ($cid==5) {
			$json=json_decode('{"List":[{"type":"1", "courseCode" : "COMP 249"},{"type":"1", "courseCode" : "COMP 232"}]}',true);
		}

		$temp=$json['List'];		


		$fcourse=$x_value;

		//echo "$fcourse <br/>   ";

		//var_dump($temp);

		
		if(count($temp)===0)
			array_push($postCullc,$fcourse);

		if (!empty($temp)) {
			
		foreach (array_filter($temp) as $key => $value) {		
				//echo $value['courseCode'];
				$val=$value['courseCode'];
				//echo "   needs:" . $val;
				if(in_array($val, $newTaken,true)){
				//	echo " True.  ";
					array_push($postCullc,$fcourse);
				} else {
				//	echo "not.    ";
					array_push($anotc, $fcourse);
				}
			
		}
			} else
       { 
       		//echo "$fcourse" . "failed <br/> <br/>";
       }

		}	
		echo "Pre remaining";
		var_dump(array_unique($postCullc));
		var_dump(array_unique($anotc));

	$remaininglist=array_unique(array_diff(array_unique($postCullc),array_unique($anotc)));	//list of priotiry courses after the prereq were removed
	$counter=0;

	echo "Remaining";

	var_dump($remaininglist);
	foreach ($remaininglist as $key => $value) {
		if ($counter<=$courseload) {
			echo "$value<br/>";
			array_push($newTaken,$value);
		}
		$counter++;		
	}		
	
	$newRem=array_diff(array_unique($newRem),array_unique($newTaken));
	foreach ($anotc as $key => $value) {
		array_push($newRem,$value);	
	}
	$newRem=array_unique($newRem);
	$newTaken=array_unique($newTaken);

	// var_dump($result);
	echo "New rem after anotc";
	var_dump($newRem);
	echo "New taken after adding";
	 var_dump($newTaken);

	//var_dump($newRem);

$counter2++;
}//end while








//add the cload number of courses to a certain year






// Retrieve the user’s taken courses. Add the course from the chosen schedule to that array and remove them from the needed courses
// Assume the user wants to take the same course load every semester, we’ll call this number x
// Again remove any course that aren’t in the prereqs and create the priority array. We also need to  keep track of which semester we’re adding courses for and remove any courses that aren’t offered in that semester
// Add the first x courses to the first semester
// Again retrieve the needed and taken courses lists from the database and adjust them to reflect the schedule and course sequence
// Loop this process until you have a complete course sequence with all the needed courses





mysqli_close($dbc);



?>