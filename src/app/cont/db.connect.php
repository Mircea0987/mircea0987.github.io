<?php

$connect = mysqli_connect('localhost','root','','porductangular');

$error = mysqli_connect_error();

if(!$connect){
    die("Cannot connect to database!");
}