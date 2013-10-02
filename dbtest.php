<?php
include("config.php");

//Get the post type from Javascript file (index.js)
$db_test = isset($_POST['db_test']);


if($con == true)
{
	//check to see if the database exsists
	$db_bool = mysqli_query($con, 'CREATE DATABASE IF NOT EXISTS ticketSystem');
	$db_select = mysqli_select_db($con, 'ticketSystem');
			//checks and creates users table
			mysqli_query($con, "CREATE TABLE IF NOT EXISTS users
			( 
				user_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
				un CHAR(25) NOT NULL,
				pass CHAR(32) NOT NULL,
				admin_bl TINYINT(1) NOT NULL
			)");
			//checks and creates project table
			mysqli_query($con, "CREATE TABLE IF NOT EXISTS prj
			( 
				prj_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
				prj_name CHAR(100) NOT NULL
			)");
			//check and creates relational db for project/user/task id's
			mysqli_query($con, "CREATE TABLE IF NOT EXISTS rel
			( 
				rel_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
				prj_id INT NOT NULL,
				user_id INT NOT NULL,
				tsk_id INT NOT NULL
			)");
			//checks and creates task table
			mysqli_query($con, "CREATE TABLE IF NOT EXISTS tsk
			( 
				tsk_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
				tsk_prty TINYINT(1) NOT NULL,
				tsk_order TINYINT(1) NOT NULL,
				tsk_title CHAR(50) NOT NULL,
				tsk_cmt CHAR(250)
			)");
			if($db_test == 1) {print "1";}
}
else
{
	if($db_test == 1) {print "0";}
}
?>