<?php
class Time {
    public $Day='';
    public $StartTime='';
    public $EndTime='';

    function __construct($OldDay,$OldStart,$OldEnd){
        $this->Day=$OldDay;
        $this->StartTime=$OldStart;
        $this->EndTime=$OldEnd;
    }

    function CompareTo($NewDay,$NewStart,$NewEnd){

        $modifyOne = strtotime($this->StartTime);
        $modifyTwo = strtotime($this->EndTime);
        $modifyThree = strtotime($NewStart);
        $modifyFour = strtotime($NewEnd);

        if($NewDay == $this->Day && ((($modifyThree > $modifyOne) && ($modifyThree < $modifyTwo)) || (($modifyFour > $modifyOne) && ($modifyFour < $modifyTwo)) ||(($modifyThree == $modifyOne) && ($modifyFour == $modifyTwo))))
        {
            return False;
            if($NewDay == $this->Day && (($modifyOne == $modifyFour) || ($modifyThree == $modifyTwo)))
            {
                return False;
            }
        }

        else
        {
            return True;
        }

    }

}


?>