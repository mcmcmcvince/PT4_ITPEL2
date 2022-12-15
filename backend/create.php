<?php
    require_once('connect.php');
    session_start();

    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    $message = array();

    $student_number = $data ['student_number'];
    $student_name = $data ['student_name'];
    $course = $data ['course'];
    $year = $data ['year'];
    $email = $data ['email'];
    $contact_number = $data ['contact_number'];
    $home_add = $data ['home_add'];

    //create the sql query
    $query = mysqli_query($con, "insert into studentss_tbl(student_number, student_name, course, year, email, contact_number,home_add, reg_date) values('$student_number', '$student_name', '$course', '$year', '$email', '$contact_number', '$home_add', NOW())");
    if($query){
        http_response_code(201);
        $message['status'] = "Success....";
    }else{
        http_response_code(422);
        $message['status'] = 'Error....';
    }

    echo json_encode($message);
    echo mysqli_error($con);
?>