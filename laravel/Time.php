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

        $int = $NewDay;
        $dayOne = '';
        $dayTwo = '';
        if($int > '5')
        {
            $dayOne = $int[0];
            $dayTwo = $int[1];
        }

        else
        {
            $int = int($NewDay);
        }


        $modifyOne = strtotime($this->StartTime);
        $modifyTwo = strtotime($this->EndTime);
        $modifyThree = strtotime($NewStart);
        $modifyFour = strtotime($NewEnd);

        if($dayOne == null && $dayTwo == null)
        {
            if ($NewDay == $this->Day && ((($modifyThree > $modifyOne) && ($modifyThree < $modifyTwo)) || (($modifyFour > $modifyOne) && ($modifyFour < $modifyTwo)) || (($modifyThree == $modifyOne) && ($modifyFour == $modifyTwo))))
            {
                return False;
                if ($NewDay == $this->Day && (($modifyOne == $modifyFour) || ($modifyThree == $modifyTwo)))
                {
                    return False;
                }
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
                if (($dayOne || $dayTwo) == $this->Day && (($modifyOne == $modifyFour) || ($modifyThree == $modifyTwo)))
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

}


?>