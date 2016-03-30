<?php	

define('DB_USER', 'admin');
define('DB_PASSWORD', 'kyloren');
define('DB_HOST', 'localhost');
define('DB_NAME', '341');

$dbc = @mysqli_connect(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME)
or die('Could not connect to my sql : ' .
mysqli_connect_error());

?>
