<?php
require_once('../mysqli_connect.php'); // defining and connecting to the database as root

$query ="SELECT * FROM courses"; // search for the user
// with these credentials                          

$response= mysqli_query($dbc,$query); 

echo mysqli_fetch_array($response);

mysqli_close($dbc);
   

