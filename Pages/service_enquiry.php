<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $conn = new mysqli("localhost", "root", "", "evgo_db");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $state = $_POST['state'];
    $city = $_POST['city'];
    $pincode = $_POST['pincode'];
    $model = $_POST['Model1'];
    $modelNumber = $_POST['modelNumber'];
    $serviceType = $_POST['Model2'];
    $contactMethod = $_POST['contactMethod'];
    $serviceDate = $_POST['serviceDate'];
    $description = $_POST['description'];
    $message = $_POST['message'];


    $stmt = $conn->prepare("
        INSERT INTO service_enquiries 
        (name, email, phone, state, city, pincode, model, modelNumber, serviceType, contactMethod, serviceDate, description, message)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ");

    $stmt->bind_param(
        "sssssssssssss",
        $name,
        $email,
        $phone,
        $state,
        $city,
        $pincode,
        $model,
        $modelNumber,
        $serviceType,
        $contactMethod,
        $serviceDate,
        $description,
        $message
    );

    if ($stmt->execute()) {
        echo "Enquiry submitted successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
