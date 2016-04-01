<?php
require_once('../mysqli_connect.php'); // defining and connecting to the database as root

$query ="SELECT * FROM courses"; // search for the user
// with these credentials                          

$response= mysqli_query($dbc,$query); 
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
   

