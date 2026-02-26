<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $conn = new mysqli("localhost", "root", "", "evgo_db");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $name       = $_POST['name'];
    $email      = $_POST['email'];
    $phone      = $_POST['phone'];
    $state      = $_POST['state'];
    $city       = $_POST['city'];
    $pincode    = $_POST['pincode'];
    $model      = $_POST['Model'];
    $inquiry    = $_POST['description'];
    $message    = $_POST['message'];

    $stmt = $conn->prepare("
        INSERT INTO general_enquiries 
        (name, email, phone, state, city, pincode, model, inquiry, message)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ");

    $stmt->bind_param(
        "sssssssss",
        $name,
        $email,
        $phone,
        $state,
        $city,
        $pincode,
        $model,
        $inquiry,
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
