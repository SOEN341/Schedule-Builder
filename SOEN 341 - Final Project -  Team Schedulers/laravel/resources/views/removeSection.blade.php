<?php
require_once('../mysqli_connect.php'); 
$sectionId=$_POST['sectionId']; //section id
if (!(isset($sectionId))) {
   $sectionId='';
}
//$sectionId='4';

$query ="SELECT sectionId FROM sections WHERE sectionId='$sectionId' ";

$response= mysqli_query($dbc,$query);

if(mysqli_num_rows($response) <= 0){ 

echo json_encode(array("Sucess"=>"false","Section"=>"$sectionId","Salt"=>"That sectionId does not exist.")); 

}else{

$sql="DELETE FROM `sections` WHERE sectionId='$sectionId'";

mysqli_query($dbc,$sql);

//echo 'Section: bla bla ' . mysqli_error($dbc);

echo json_encode(array("Sucess"=>"true","Section"=>"$sectionId"));  
}

mysqli_close($dbc);