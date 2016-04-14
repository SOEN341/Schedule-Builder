<?php  
require_once('../mysqli_connect.php');
require_once('../preferences');
require_once('../Course.php');
$username=$_POST['username'];
$schedule=$_POST['schedule'];
//$username='user17';
//$schedule='{"schedule": [{"section": "JJ","classroom": "H555","type": "Lab","day": "1","beginTime": "11:30","endTime": "14:00","course": "SOEN 346"}, {"section": "HH","classroom": "MB S2.051","type": "Lecture","day": "24","beginTime": "11:30","endTime": "12:45","course": "SOEN 341"}]}';
$schedule2 = json_decode($schedule,true);
$arrSchedule = Array();
$newTaken=Array();
$count = 0;
foreach ($schedule2 as $key => $value){
	foreach ($value as $key2 => $value2){
		array_push($newTaken, $value2['course']);
	}
}


//var_dump($decodedschedule);


$coursesDone=Array();
$coursesRem=Array();
$courseload='';

$query ="SELECT * FROM users where username='$username' ";

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


//var_dump($coursesDone);

//get the courses currently in the schedule

//$newTaken=$coursesDone;
$newRem=$coursesRem;


//add them to courses taken 
foreach ($coursesDone as $key => $value) {
	//add the values to the array of courses taken
	array_push($newTaken, $value);
}

$result=array_diff($newRem, $newTaken); 

//var_dump($result);

$counter2=0;

		
$output='{"response" : [';



while (count($result)!=0 && $counter2<10) {

//remove them from courses needed
$result=array_diff(array_unique($newRem), array_unique($newTaken)); //returns the list where the  new taken courses( courses that are currently in the schedule) were removed from the list coure needed
//echo "Counter". $counter2;
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
		//echo "Pre remaining";
		//var_dump(array_unique($postCullc));
		//var_dump(array_unique($anotc));

	$remaininglist=array_unique(array_diff(array_unique($postCullc),array_unique($anotc)));	//list of priotiry courses after the prereq were removed
	$counter=0;

	//echo "Remaining";
	
	//var_dump($remaininglist);

	//$schedule='{"schedule": [{"section": "JJ","classroom": "H555","type": "Lab","day": "1","beginTime": "11:30","endTime": "14:00","course": "SOEN 346"}, {"section": "HH","classroom": "MB S2.051","type": "Lecture","day": "24","beginTime": "11:30","endTime": "12:45","course": "SOEN 341"}]}';



	foreach ($remaininglist as $key => $value) {
		$counter++;	
		if ($counter<=$courseload) {
			$sql= "SELECT * FROM courses WHERE courseCode = '$value'";
			$response= mysqli_query($dbc,$sql);
			$answer= mysqli_fetch_array($response);

			$courseID= $answer['courseId'] ;
			$semester=$answer['semester'] ;
			$year=$counter2 ;
			$name=$answer['name'] ;
			$courseCode=$answer['courseCode'] ;

			$output = $output . json_encode(array("courseID"=>"$courseID","semester"=>"$semester","year"=>"$year","name"=>"$name","courseCode"=>"$courseCode")) . ",";
			// echo json_encode(array("success"=>"true","username"=>"$username","courseload"=>"$CLoad","dayoff"=>"$dayOff","preferredTime"=>"$pTime"));  

			 $cid=$answer['courseId'];
			// echo " courseID: " . $answer['courseId'] ;
			// echo " semester: " . $answer['semester'] ;
			// echo " year: " . $counter2 ;
			// echo " name: " . $answer['name'] ;
			// echo " courseCode: " . $answer['courseCode'] ;
			

			//echo $counter2;
			//echo ",<br/>";
			array_push($newTaken,$value);
		}
			
	}		
	
	$newRem=array_diff(array_unique($newRem),array_unique($newTaken));
	foreach ($anotc as $key => $value) {
		array_push($newRem,$value);	
	}
	$newRem=array_unique($newRem);
	$newTaken=array_unique($newTaken);

	// var_dump($result);
	//echo "New rem after anotc";
	//var_dump($newRem);
	//echo "New taken after adding";
	 //var_dump($newTaken);

	//var_dump($newTaken);

$counter2++;
}//end while
$output=substr($output, 0,strlen($output)-1) . "]}";
echo $output;



// $schedule='{"response" : [{"courseID":"3","semester":"Summer","year":"0","name":"Object-Oriented Programming II","courseCode":"COMP 249"},{"courseID":"38","semester":"Summer","year":"0","name":"Applied Advanced Calculus","courseCode":"ENGR 233"},{"courseID":"13","semester":"Winter","year":"0","name":"System Hardware","courseCode":"SOEN 228"},{"courseID":"14","semester":"Summer","year":"0","name":"Web Programming","courseCode":"SOEN 287"},{"courseID":"9","semester":"Summer","year":"1","name":"Principles of Programming Languages","courseCode":"COMP 348"},{"courseID":"11","semester":"Summer","year":"1","name":"Data Structures and Algorithms","courseCode":"COMP 352"},{"courseID":"41","semester":"Summer","year":"1","name":"Technical Writing and Communication","courseCode":"ENCS 282"},{"courseID":"32","semester":"Summer","year":"1","name":"Sustainable Development and Environmental Stewardship","courseCode":"ENGR 202"},{"courseID":"8","semester":"Winter","year":"2","name":"Operating Systems","courseCode":"COMP 346"},{"courseID":"44","semester":"Summer","year":"2","name":"Principles of Electrical Engineering","courseCode":"ELEC 275"},{"courseID":"47","semester":"Summer","year":"2","name":"Probability and Statistics in Engineering","courseCode":"ENGR 371"},{"courseID":"17","semester":"Winter","year":"2","name":"Introduction to Formal Methods for Software Engineering","courseCode":"SOEN 331"},{"courseID":"5","semester":"Fall","year":"3","name":"Introduction to Theoretical Computer Science","courseCode":"SOEN 335"},{"courseID":"19","semester":"Fall","year":"3","name":"Software Requirements and Specifications","courseCode":"SOEN 342"},{"courseID":"23","semester":"Fall","year":"3","name":"Management, Measurement and Quality Control","courseCode":"SOEN 384"},{"courseID":"50","semester":"Summer","year":"3","name":"Numerical Methods in Engineering","courseCode":"ENGR 391"},{"courseID":"20","semester":"Fall","year":"4","name":"Software Architecture and Design I","courseCode":"SOEN 343"},{"courseID":"134","semester":"Winter","year":"4","name":"User Interface Design","courseCode":"SOEN 357"},{"courseID":"53","semester":"Summer","year":"4","name":"Engineering Management Principles and Economics","courseCode":"ENGR 301"},{"courseID":"16","semester":"Fall","year":"4","name":"Information Systems Security","courseCode":"SOEN 321"},{"courseID":"21","semester":"Winter","year":"5","name":"Software Architecture and Design II","courseCode":"SOEN 344"},{"courseID":"22","semester":"Winter","year":"5","name":"Software Testing, Verification and Quality Assurance","courseCode":"SOEN 345"},{"courseID":"56","semester":"Summer","year":"5","name":"Impact of Technology on Society","courseCode":"ENGR 392"},{"courseID":"25","semester":"Winter","year":"6","name":"Software Engineering Team Design Project","courseCode":"SOEN 390"},{"courseID":"27","semester":"Fall-Winter","year":"7","name":"Capstone Software Engineering Design Project","courseCode":"SOEN 490"}]}';


// var_dump(json_decode($schedule,true));




				// courseID: '1',
				// semester: 'Fall',
				// year: '3',
				// name: 'Object Oriented Programming 1',
				// courseCode: 'COMP 248'

?>