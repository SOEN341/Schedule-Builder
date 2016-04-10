<?php
require_once('../mysqli_connect.php'); 
$courseId=$_POST['courseId'];
if (!(isset($courseId))) {
   $courseId='';
}
//$courseId='7'; //test pursposes
$query ="SELECT * FROM sections WHERE courseId='$courseId'";              

$response= mysqli_query($dbc,$query); 
//echo 'Error: ' . mysqli_error($dbc);
$rows = array();

$numResults = mysqli_num_rows($response);
$counter = 0;
echo '[' ;
while($current = mysqli_fetch_assoc($response)) {
    if(++$counter == $numResults) {
    	echo json_encode($current);
    }  else {
		echo json_encode($current) . ',' ;
	}
}
echo ']';
//echo mysqli_fetch_array($response);
mysqli_close($dbc);