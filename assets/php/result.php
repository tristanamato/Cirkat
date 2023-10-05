<?php
$errors = [];

$data = array_map('trim', array_map('htmlentities', $_POST));

if (!isset($data['firstname']) || empty($data['firstname'])) {
    $errors[] = 'Please enter your first name';
}
if (!isset($data['lastname']) || empty($data['lastname'])) {
    $errors[] = 'Please enter your last name';
}
if (!isset($data['address']) || empty($data['address'])) {
    $errors[] = 'Please enter your Postal address';
}
if (!isset($data['email']) || empty($data['email'])) {
    $errors[] = 'Please enter your email';
}
elseif (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'The format is not the right one';
}
if (!isset($data['shows']) || empty($data['shows'])) {
    $errors[] = 'Please select the shows';
}
if (!isset($data['number']) || empty($data['number'])) {
    $errors[] = 'Please enter your card numbers';
}
if (!isset($data['securityCode']) || empty($data['securityCode']>4)) {
    $errors[] = 'Please enter your code security';
}
if (!isset($data['dateCard']) || empty($data['dateCard'])) {
    $errors[] = 'Please enter your date card';
}
elseif (strlen($data['message'])<10 || strlen($data['message'])>50) {
    $errors[] = 'Your message must be 10 and 50 characters long';
}

if (!empty($errors)) {
    require 'error.php';
    die ();
}
else {
    require 'valid.php';
}