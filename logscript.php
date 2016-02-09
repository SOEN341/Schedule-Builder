
<?php

// // for debug purpose
// // $tLogIn=''; // declaring the variables
// // $tpass=''; 
$username = isset($_POST['username']) ? $_POST['username'] :''; 
$password = isset($_POST['password']) ? $_POST['password'] : '';           
// // echo $tLogIn . '<br/>';
// // echo $tpass . '<br/>' ;

require_once('mysqli_connect.php'); // defining and connecting to the database as root

$query ="SELECT username,password FROM student WHERE username='$username' AND password='$password' "; // serach for the user 
// with these credentials                          

$response= mysqli_query($dbc,$query); 


if(mysqli_num_rows($response) <= 0){ //number of response is 0, so no user with these credentials
  echo json_encode(array("result"=>"bad","username"=>"$username","password"=>"$password"));             
} else {
  echo json_encode(array("result"=>"good","username"=>"$username","password"=>"$password"));  
}

$demand=mysqli_fetch_array($response);  // array containing the values in the query

?>

<?php                           
     
   mysqli_close($dbc);  
   
   ?>