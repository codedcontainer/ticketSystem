<?php

include('config.php');

$prjName = $_POST['prjName'];
//echo $prjName;

//Check to see if the value has been added to the Database
//If not add the value

$prjFind = mysqli_query($con, "SELECT COUNT(*) FROM prj WHERE prj_name = ". $prjName);

echo $prjFind;


?>