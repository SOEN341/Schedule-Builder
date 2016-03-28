<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>

        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">

        <style>
            html, body {
                height: 100%;
            }

            body {
                margin: 0;
                padding: 0;
                width: 100%;
                display: table;
                font-weight: 100;
                font-family: 'Lato';
            }

            .container {
                text-align: center;
                display: table-cell;
                vertical-align: middle;
            }

            .content {
                text-align: center;
                display: inline-block;
            }


        </style>
    </head>
    <body>
        <div class="container">
            <div class="content">
                <?php
                // Full texts   username    email   userType    password    CoursesDones    CoursesRem  CLoad   dayOff  pTime 

                require_once('../mysqli_connect.php'); // defini
                $sql = "SELECT * FROM `users`";
                $response=mysqli_query($dbc,$sql);
                
                echo '<table align="left"
                cellspacing="5" cellpadding="8">

                <tr><td align="left"><b>First Name</b></td>
                <td align="left"><b>username   </b></td>
                <td align="left"><b>Email</b></td>
                <td align="left"><b>usertype</b></td>
                <td align="left"><b>password</b></td>
                <td align="left"><b>coursesdone</b></td>
                <td align="left"><b>courserem</b></td>
                <td align="left"><b>cload</b></td>
                <td align="left"><b>dayoff</b></td></tr>;
                <td align="left"><b>ptime</b></td></tr>';

                 while($row = mysqli_fetch_array($response)){
                  
                echo '<tr><td align="left">' .
                $row['username'] . '</td><td align="left">' .
                $row['email'] . '</td><td align="left">' .
                $row['userType'] . '</td><td align="left">' .
                $row['password'] . '</td><td align="left">' .
                $row['CoursesDones'] . '</td><td align="left">' .
                $row['CoursesRem'] . '</td><td align="left">' .
                $row['CLoad'] . '</td><td align="left">' .
                $row['dayOff'] . '</td><td align="left">' .
                $row['pTime'] . '</td><td align="left">';
                  
                 echo '</tr>';
                 }  
                 echo '</table>';

                    

                




                ?>

            </div>
        </div>
    </body>
</html>
