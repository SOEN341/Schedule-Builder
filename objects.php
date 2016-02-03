<?php 
// course, lab, tutorial, does the student have a prerequisite or corequisite 
//for the course, student id, which session the student wants to register
class student {

	private $studentid=0;
	//preferences 
	//to be discussed
	private $numOfCourses=0;
	//...

	private $coursesTaken= Array();
	private $remCourses=Array();
	private $labs= Array();
	private $tutorials= Array();	
	
	function __construct($studentid,$coursesTaken,$remCourses,$labs,$tutorials){
		$this->studentid=$studentid;
		$this->coursesTaken=$coursesTaken;
		$this->remCourses=$remCourses;
		$this->labs=$labs;
		$this->tutorials=$tutorials;
	}	

	public function getNumOfCourses(){
		return $this->numOFCourses;
	}
	
	public function getStudentId(){
		return $this->studentid;
	}

	public function getCoursesTaken(){
		return $this->coursesTaken;
	}

	public function getRemCourses(){
		return $this->remCourses;
	}

	public function getLabs(){
		return $this->labs;
	}

	public function getTutorials(){
		return $this->tutorials;
	}

//act on an array
	// foreach ($arr as $course) {
 //    	echo "$course" . ' ';
 //    }

}

class course {
	private $code='';
	private $name='';
	private $description='';
	private $semester='';
	private $section='';
	private $credits=0;

	
	function __construct($semester,$code,$name,$credits,$section,$description){
		$this->code=$code;
		$this->name=$name;
		$this->description=$description;
		$this->semester=$semester;
		$this->section=$section;
		$this->credits=$credits;
		
	}

	public function getCode(){
		return $this->code;
	}

	public function getName(){
		return $this->name;
	}

	public function getDescription(){
		return $this->description;
	}

	public function getSemester(){
		return $this->semester;
	}

	public function getSection(){
		return $this->section;
	}

	public function getCredits(){
		return $this->credits;
	}



}


 ?>