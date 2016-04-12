<?php
class Time {
    public $Day='Monday';
    public $StartTime='13:35:00';
    public $EndTime='14:35:00';

    public $Testday='Monday';
    public $TestStart='13:50:00';
    public $Testend='14:30:00';

    function __Test($NewDay,$NewStart,$NewEnd){
        if($this->Testdayay == $this->Day && ($this->TestStart > $this->StartTime) && ($this->TestStart < $this->EndTime))
        {
            echo "The test works";
        }
        _test('Monday', '13:50:00', '14:30:00');
    }
}



?>