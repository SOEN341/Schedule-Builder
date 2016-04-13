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

        echo "Start " . $this->StartTime . "<br/>";
        echo "End  " . $this->EndTime  . "<br/>";

        echo "newStart " . $NewStart . "<br/>";
        echo "newEnd  " . $NewEnd  . "<br/>";

        $int = $NewDay;

        $dayOne = '';
        $dayTwo = '';
        $dayThree= '';

        //echo strlen($int) ;        
        if ( strlen($int) === 1) {
          $dayOne = intval($int);
          }
         elseif ( strlen($int) == 2) {
            $dayOne = $int[0];
            echo $dayOne . "  <br/> "; 
            $dayTwo = $int[1];
             echo $dayTwo . "  <br/> "; 
        } 
               
        $startThis = strtotime($this->StartTime);
        echo $startThis . "<br/>" ;
        $endThis = strtotime($this->EndTime);
        echo $endThis . "<br/>" ;
        $starpar = strtotime($NewStart);
        echo $starpar . "<br/>" ;
        $endpar = strtotime($NewEnd);
        echo $endpar . "<br/>" ;

        if($dayOne == null && $dayTwo == null)
        {
            if ($NewDay == $this->Day && ((($starpar > $startThis) && ($starpar < $endThis)) || (($endpar > $startThis) && ($endpar < $endThis)) || (($starpar == $startThis) && ($endpar == $endThis))))
            {
                return False;
                if ($NewDay == $this->Day && (($startThis == $endpar) || ($starpar == $endThis)))
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
            if (($dayOne || $dayTwo) == $this->Day && ((($starpar > $startThis) && ($starpar < $endThis)) || (($endpar > $startThis) && ($endpar < $endThis)) || (($starpar == $startThis) && ($endpar == $endThis))))
            {
                return False;

                if (($dayOne || $dayTwo) == $this->Day && (($startThis == $endpar) || ($starpar == $endThis)))
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
