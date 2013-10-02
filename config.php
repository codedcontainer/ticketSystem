<?php
//The following document provided information for creating a database and applicalbe databases. Please be sure to keep this information confidential at all times.

//The hostname is the location in which the database resides. If the hostname is not included when setting up a database, more than likely the hostname is localhost. 
$hn = "localhost";
$dbName = "ticketSystem"; // name of the database
$un = "root"; //username
$pass = "root"; //password

$con = mysqli_connect($hn, $un, $pass);


?>