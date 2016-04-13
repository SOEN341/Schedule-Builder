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

    function CompareTo($NewDay,$NewStart,$NewEnd)
    {

        $int = intval($NewDay);


        echo "Start " . $this->StartTime . "<br/>";
        echo "End  " . $this->EndTime  . "<br/>";

        echo "newStart " . $NewStart . "<br/>";
        echo "newEnd  " . $NewEnd  . "<br/>";

        $this->StartTime= str_replace(":", "", $this->StartTime);
        $this->EndTime=str_replace(":", "", $this->EndTime);
        $NewStart=str_replace(":", "", $NewStart);
        $NewEnd=str_replace(":", "", $NewEnd);


        echo "Start " . $this->StartTime . "<br/>";
        echo "End  " . $this->EndTime  . "<br/>";

        echo "newStart " . $NewStart . "<br/>";
        echo "newEnd  " . $NewEnd  . "<br/>";   


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
               
        $startThis = $this->StartTime;
        echo $startThis . "<br/>" ;
        $endThis = $this->EndTime;
        echo $endThis . "<br/>" ;
        $starpar = $NewStart;
        echo $starpar . "<br/>" ;
        $endpar = $NewEnd;
        echo $endpar . "<br/>" ;

        if($dayOne == $this->Day || $dayTwo == $this->Day)
        {
            //starttime1 == startime 2
            if ($startThis==$starpar) {
                return false;
            }
            if ($endThis==$endpar) {
                return false;
            }
             if ($endThis==$starpar) {
                return false;
            }

            if ($startThis==$endpar) {
                return false;
            }

            if ( ($starpar > $startThis) && ($starpar > $endThis) ) {
                return false;
            }

            if ( ($endpar > $startThis) && ($endpar < $endThis) ) {
                return false;
            }           
            
        }

        return true;
      

    }

}


?>
