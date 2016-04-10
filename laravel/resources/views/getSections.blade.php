<?php
require_once('../mysqli_connect.php'); 
$query ="SELECT * FROM sections";           

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