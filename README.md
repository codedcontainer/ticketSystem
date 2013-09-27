ticketSystem
============

Ticket system that allows users to fill out troublesome inquires concerning projects. These tickets can be assigned for a multiple number of users. New users can be added to a project.

DATABASE
========
The Databse has the following tables which support the content generated in the application.

1. user_id | UN | PASS | MD5 | Admin_bl
2. prj_id | prj_name
3. prj_id | user_id | tsk_id
4. tsk_id | tsk_prty | tsk_order | tsk_title | tsk_cmt

SYNOPSIS
========

There will be three sections to the application.
A. User settings
B. Project List
C. Task List

[1] Without any projects being created. (B) will display a message, "Pleasae first create a project". A input will display giving the user the option of creating a new project. (C) Tasks cannot be created without first creating a project. After a project or a task has been completed an Ajax call will be sent to a PHP file which will update the database. If multiple tasks have been created another Ajax call will be delivered to update the tsk_order field.

(A) Only administrative users are allowed to delete users from the appplication. Administrators can not delete other administrators, however any users can delete their own account at any time. Only Administrators can create and delete projects and delete any comment from any user. Any user without administrative privalages can only delete|modify|add their own tasks for a project.

FILE RELATIONSHIPS
==================

config.php -> DB Connection Settings (can you connect? Does DB exsist?)
firstRun.php -> Creates the nessesary DB and tables. 
Create New Project -> index.html -> index.js(AJAX) -> project.php -> DB
Create New User -> settings.html(AJAX) -> index.js(AJAX) -> users.php -> DB
Add New Task -> index.html -> index.js(AJAX) -> task.php -> DB

[2] index.html will display a warning "DB connection error - config.php must be configured before this application can be used" -> AJAX return to determine DB connection. If return is false, alert user that page will redirect to firstRun.php. Page will redirect back to index.html. index.html will make another AJAX request to determine if the falue is true. If true, get information from DB. This will then proceed to [1]

FUTURE REQUESTS
===============

	Allow the user to drag a sortable item into another users sortable item list.

