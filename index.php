<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>NO title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Le styles -->
    <link href="../assets/css/bootstrap.css" rel="stylesheet">
    <style type="text/css">   

    </style>
                                
  </head>

  <body>

    <?php 
    require_once('objects.php');
	   


    $course1= new course ('/2','COMP 248','OBJ-ORIENTED PROGRAMMING I',3,'Q',"");
	$course2= new course ('/4','COMP 248','OBJ-ORIENTED PROGRAMMING I',3,'U',"");
	$course3= new course ('/1','COMP 249','OBJ-ORIENTED PROGRAMMING II',3,'CC',"");
	$course4= new course ('/4','COMP 249','OBJ-ORIENTED PROGRAMMING II',3,'PP',"");
	$course5= new course ('/2','COMP 335','INTRO/THEORETICAL COMP SCI',3,'E',"");
	$course6= new course ('/2','COMP 345','ADVANCED PROGRAM DESIGN, C++',4,'N',"");
	$course7= new course ('/4','COMP 345','ADVANCED PROGRAM DESIGN, C++',4,'S',"");
	$course8= new course ('/4','COMP 346','OPERATING SYSTEMS',4,'NN',"");
	$course9= new course ('/1','COMP 348','PRIN./PROGRAMMING LANGUAGES',3,'CC',"");
	$course10= new course ('/2','COMP 348','PRIN./PROGRAMMING LANGUAGES',3,'U',"");
	$course11= new course ('/1','COMP 352','DATA STRUCTURES + ALGORITHMS',3,'AA',"");
	$course12= new course ('/2','COMP 352','DATA STRUCTURES + ALGORITHMS',3,'G',"");
	$course13= new course ('/4','SOEN 228','SYSTEM HARDWARE',4,'DD',"");
	$course14= new course ('/4','SOEN 228','SYSTEM HARDWARE',4,'H',"");
	$course15= new course ('/1','SOEN 287','WEB PROGRAMMING',3,'CC',"");
	$course16= new course ('/4','SOEN 287','WEB PROGRAMMING',3,'U',"");
	$course17= new course ('/2','SOEN 321','Information Systems Security',3,'GG',"");
	$course18= new course ('/4','SOEN 331','INTRO TO FML MTHDS FOR SOEN',3,'U',"");
	$course19= new course ('/4','SOEN 341','SOFTWARE PROCESS',3,'S',"");
	$course20= new course ('/2','SOEN 342','SW REQUIREMENTS + SPECS.',3,'H',"");
	$course21= new course ('/2','SOEN 343','S.W. ARCHITECURE & DESIGN I',3,'H',"");
	$course22= new course ('/4','SOEN 344','S.W. ARCHITECURE & DESIGN II',3,'S',"");
	$course23= new course ('/4','SOEN 345','S.W. TESTING, VERIF & QA',3,'S',"");
	$course24= new course ('/2','SOEN 384','MGMT+QUALITY CTRL./SW DEV.',3,'F',"");
	$course25= new course ('/4','SOEN 385','CONTROL SYSTEMS+APPLICATIONS',3,'S',"");
	$course26= new course ('/4','SOEN 390','SOFTWARE ENGR. TEAM PROJECT',3.5,'S',"");
	$course27= new course ('/2','SOEN 422','EMBEDDED SYSTEMS/SOFTWARE',4,'MM',"");
	$course28= new course ('/3','SOEN 490','CAPSTONE SW ENGR DESIGN PROJ',4,'SS',"");


    
	//Creating an array of courses that are taken already
	$done=Array($course1,$course2,$course3,$course4,$course5,$course6,$course7,$course8,$course9,$course10,$course11,$course12);
	//creating an array of courses that needs to be taken
	$todo=Array($course13,$course14,$course15,$course16,$course17,$course18,$course19,$course20,$course21,$course22,$course23,$course24,$course25,$course26,$course27,$course28);

	$labs=Array();
	$tutorials=Array(); // emtpy arrays for constructor

	//Creating a new student with aforementioned courses
	$lordGaben= new student (2546011,$done,$todo,$labs,$tutorials);


	
	//printing out the course of LordGaben
	echo   nl2br( "printing out the courses taken by LordGaben\n"  );
	foreach ($lordGaben->getCoursesTaken() as $course) {
    	echo nl2br( $course->getCode() . ' ' . $course->getName() . ' ' . $course->getDescription() . ' ' . $course->getSemester() . ' ' .  $course->getSection() . ' ' . $course->getCredits() . "\n" ) ;
    }
    //printing out the course to be taken by LordGaben
    echo  nl2br( "printing out the courses to be taken by LordGaben  \n"  );
    foreach ($lordGaben->getRemCourses() as $course) {
    	echo nl2br( $course->getCode() . ' ' . $course->getName() . ' ' . $course->getDescription() . ' ' . $course->getSemester() . ' ' .  $course->getSection() . ' ' . $course->getCredits() . "\n" ) ;
    }

    // echo serialize($done);

    // echo unserialize(serialize($done));

   //testing seriazable arrays
	// foreach (unserialize(serialize($done)) as $course) {
 //    	echo nl2br( $course->getCode() . ' ' . $course->getName() . ' ' . $course->getDescription() . ' ' . $course->getSemester() . ' ' .  $course->getSection() . ' ' . $course->getCredits() . "\n" ) ;
 //    }




    ?>



 

  </body>
</html>
