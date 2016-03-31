
<?php
 $username=$_POST['username'];
 $password=$_POST['password'];
// $username='JASONB';
// $password='pass1';

require_once('../mysqli_connect.php'); // defining and connecting to the database as root

$query ="SELECT username,password,userType FROM users WHERE username='$username' AND password='$password' "; // search for the user
// with these credentials                          

$response= mysqli_query($dbc,$query); 


if(mysqli_num_rows($response) <= 0){ //number of response is 0, so no user with these credentials
  echo json_encode(array("success"=>"false","username"=>"$username","error"=>"usernamenotfound"));             
} else {
	$row = mysqli_fetch_array($response);
		if ($row['userType']==1) {
			$type= 'true';
		} else {
			$type= 'false';
		}	
  echo json_encode(array("success"=>"true","username"=>"$username","isAdmin"=>"$type"));

}
mysqli_close($dbc);

//exemple to prevent mysql injection
   
   // $query = "INSERT INTO students (first_name, last_name, email,
	  //       street, city, state, zip, phone, birth_date, sex, date_entered,
	  //       lunch_cost, student_id) VALUES (?, ?, ?,
	  //       ?, ?, ?, ?, ?, ?, ?, NOW(), ?, NULL)";
	         
	  //       $stmt = mysqli_prepare($dbc, $query);
	         
	  //       i Integers
	  //       d Doubles
	  //       b Blobs
	  //       s Everything Else
	         
	  //       mysqli_stmt_bind_param($stmt, "ssssssisssd", $f_name,
	  //                              $l_name, $email, $street, $city,
	  //                              $state, $zip, $phone, $b_date,
	  //                              $sex, $lunch);
	         
	  //       mysqli_stmt_execute($stmt);
	         
	  //       $affected_rows = mysqli_stmt_affected_rows($stmt);

