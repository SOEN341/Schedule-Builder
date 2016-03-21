<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

   $username=$_POST['username'];
   $password=$_POST['password'];
   
                       
//  $query ="SELECT username FROM students WHERE username='$username' ";

//raw queries
$query = DB::select('select username from users where  id=:id', ['id' => 1]);
    // $query ="SELECT username FROM students WHERE username='$username' ";

foreach ($query as $result) {
    echo $result->name;
}


//check for register
// $query ="SELECT username FROM students WHERE username='$username' ";
// id = :id', ['id' => 1]);
//adding
//$query ="SELECT username,password FROM student WHERE username='$username' AND password='$password' "; // serach for the user
//// with these credentials
//
//$response= mysqli_query($dbc,$query);




  // Check if the username exist already                          
  
//  $response= mysqli_query($dbc,$query);
//
//  if(mysqli_num_rows($response) <= 0){
//
//                             // registering
//   echo "You are now registered as a(an) " . $type . "  " . "<br/>";
//   echo "First name: " .$firstName . "  "  . "<br/>";
//
//
//   // creating the  user  in the table
//      $query= "INSERT INTO  student (`fname`, `lName`, `username`, `password`, `cDone`, `remCourse`, `labs`, `tutorials`, `studentId`) VALUES ('Stannis','Baratheon','$username','$password','a','aa','as','a','');";
//
//   if (mysqli_query($dbc, $query)) {
//       //echo "You have been registered successfully." . '<br/>'	;
//      echo json_encode(array("result"=>"registered","username"=>"$username","password"=>"$password"));
//
//   } else {
//       echo "Error: " . $query . "<br/>" . mysqli_error($dbc);
//   }
//
//  } else {
//
//     // redirect
//  	?>


