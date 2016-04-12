<?php
class Time {
    public $Day='';
    public $StartTime='';
    public $EndTime='';

    public $Testday='Monday';
    public $TestStart='13:50:00';
    public $Testend='14:30:00';

    function __construct($OldDay,$OldStart,$OldEnd){
        $this->Day=$OldDay;
        $this->StartTime=$OldStart;
        $this->EndTime=$OldEnd;
    }

    function Test($NewDay,$NewStart,$NewEnd){

        $modifyOne = strtotime($this->StartTime);
        $modifyTwo = strtotime($this->EndTime);
        $modifyThree = strtotime($NewStart);
        $modifyFour = strtotime($NewEnd);

        if($NewDay == $this->Day && ((($modifyThree > $modifyOne) && ($modifyThree < $modifyTwo)) || (($modifyFour > $modifyOne) && ($modifyFour < $modifyTwo)) ||(($modifyThree == $modifyOne) && ($modifyFour == $modifyTwo))))
        {
            echo "The test works";
        }

        if($NewDay == $this->Day && (($modifyOne == $modifyFour) || ($modifyThree == $modifyTwo)))
        {
            echo "The test works";
        }

        else
        {
            echo "Everything is good";
        }

    }

}


?>