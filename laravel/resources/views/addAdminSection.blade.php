<?php
require_once('../mysqli_connect.php'); 
$json=$_POST['json'];
if (!(isset($json))) {
   $json='{}';
}
//$json='{"section":"UI-GR","sectionId":"null","classroom":"H-4","semester":"Winter","type":"Lab","dayOffered":"5","beginTime":"13:35:00","endTime":"14:35:00","courseId":"2","courseCode":"COMP 248","sectionNum":"1"}';

$content = json_decode($json, true);

$section= $content['section'];
$sectionId='null';
$classroom=$content['classroom'];
$semester=$content['semester'];
$type=$content['type'];
$dayOffered=$content['dayOffered'];
$beginTime=$content['beginTime'];
$endTime=$content['endTime'];
$courseId= $content['courseId'];
$courseCode= $content['courseCode'];
$sectionNum=$content['sectionNum'];

// var_dump($content);

$query ="SELECT sectionId,section FROM sections WHERE section='$section' ";

$response= mysqli_query($dbc,$query);
//echo 'Error: ' . mysqli_error($dbc);

if(mysqli_num_rows($response) <= 0){ 

$sql="INSERT INTO `sections` (`section`, `sectionId`, `classroom`, `semester`, `type`, `dayOffered`, `beginTime`, `endTime`, `courseId`, `courseCode`, `sectionNum`) VALUES 
('$section', '$sectionId', '$classroom', '$semester', '$type', $dayOffered, '$beginTime', '$endTime', $courseId, '$courseCode', $sectionNum)";

mysqli_query($dbc,$sql);

$queryId ="SELECT sectionId FROM sections WHERE section='$section' AND  semester='$semester' ";

$response= mysqli_query($dbc,$queryId);
//echo 'Error: ' . mysqli_error($dbc);

$current=mysqli_fetch_array($response)['sectionId'];

echo json_encode(array("success"=>"true","SectionID"=>"$current","Section"=>"$json"));  

} else {
echo json_encode(array("success"=>"false","Section"=>"$json","Salt"=>"Section present already."));  
}

mysqli_close($dbc);