
<?php 								
   require_once('mysqli_connect.php'); #connection
   
   $userN=$_POST['username'];
   $passW=$_POST['password']; 
   
   
                       
  $query ="SELECT username FROM students WHERE username='$userN' "; 
  // Check if the username exist already                          
  
  $response= mysqli_query($dbc,$query);  
  
  if(mysqli_num_rows($response) <= 0){
    			
   
   // creating the  user  in the table
   $query= "INSERT INTO  student (`fname`, `lName`, `username`, `password`, `cDone`, `remCourse`, `labs`, `tutorials`, `studentId`) VALUES ('Jon','Snow','$userN','$passW','a','aa','as','a','');";
   
   if (mysqli_query($dbc, $query)) {
       echo "You have been registered successfully." . '<br/>'	;
   } else {
       echo "Error: " . $query . "<br/>" . mysqli_error($dbc);
   }
                       
  } else {
  
     // redirect
  	?>
<script type="text/javascript">
   alert("This username is not available");
   window.location.href = "register.php";
</script>
<?php                           
   } 
   
   mysqli_close($dbc);	
   
   ?>
