<?php
require_once('connect.php');

$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();

$student_number = $data ['student_number'];
$student_name = $data ['student_name'];
$course = $data ['course'];
$year = $data ['year'];
$email = $data ['email'];
$contact_number = $data ['contact_number'];
$home_add = $data ['home_add'];
$id = $_GET['id'];

$query = mysqli_query($con, "update studentss_tbl set student_number = '$student_number', student_name = '$student_name', course = '$course', year = '$year', email = '$email', contact_number = '$contact_number', home_add = '$home_add' where id = '$id' LIMIT 1");

if($query){
    http_response_code(201);
    $message['status'] = "Success";
}else{
    http_response_code(422);
    $message['status'] = "Error";
}

echo json_encode($message);
echo mysqli_error($con);


?>