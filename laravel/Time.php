<?php
class Time {
    public $Day='';
    public $StartTime='';
    public $EndTime='';
    public $SectionName='';

    function __construct($OldDay,$OldStart,$OldEnd, $Name){
        $this->Day=$OldDay;
        $this->StartTime=$OldStart;
        $this->EndTime=$OldEnd;
        $this->SectionName=$Name;
    }

    function CompareTo($NewDay,$NewStart,$NewEnd){

        $int = int($NewDay);

        $dayOne = '';
        $dayTwo = '';
        if($int > 5)
        {
            $str = strval($int);
            $dayOne = $str[0];
            $dayTwo = $str[1];
        }

        $modifyOne = strtotime($this->StartTime);
        $modifyTwo = strtotime($this->EndTime);
        $modifyThree = strtotime($NewStart);
        $modifyFour = strtotime($NewEnd);

        if($dayOne == null && $dayTwo == null)
        {
            if ($int == $this->Day && ((($modifyThree > $modifyOne) && ($modifyThree < $modifyTwo)) || (($modifyFour > $modifyOne) && ($modifyFour < $modifyTwo)) || (($modifyThree == $modifyOne) && ($modifyFour == $modifyTwo))))
            {
               return false;
            }
            elseif ($int == $this->Day && (($modifyOne == $modifyFour) || ($modifyThree == $modifyTwo)))
            {
                return False;
            }
            else
            {
                return True;
            }
        }

        if($dayOne != null && $dayTwo != null)
        {
            if (($dayOne || $dayTwo) == $this->Day && ((($modifyThree > $modifyOne) && ($modifyThree < $modifyTwo)) || (($modifyFour > $modifyOne) && ($modifyFour < $modifyTwo)) || (($modifyThree == $modifyOne) && ($modifyFour == $modifyTwo))))
            {
                return False;
            }
            elseif (($dayOne || $dayTwo) == $this->Day && (($modifyOne == $modifyFour) || ($modifyThree == $modifyTwo)))
            {
                return False;
            }
            else
            {
                return True;
            }
        }

    }

}


?>
