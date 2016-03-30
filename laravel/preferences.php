<?php
class preferences {
	public $courseLoad='';
	public $dayOff='';
	public $prefTime='';
		
	function __construct($courseLoad,$dayOff,$prefTime){
		$this->dayOff=$dayOff;
		$this->prefTime=$prefTime;
		$this->courseLoad=$courseLoad;
	}
}

?>