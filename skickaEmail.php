<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Validate the data (you can add your own validation logic here)

    // Send the email
    $to = $email;  // Email recipient
    $subject = "Contact Form Submission";
    $body = "Name: " . $name . "\n";
    $body .= "Email: " . $email . "\n";
    $body .= "Message: " . $message;

    $headers = "From: noel.garedal@gmail.com";  // Replace with your own email address

    if (mail($to, $subject, $body, $headers)) {
        $response = array("success" => true);
    } else {
        $response = array("success" => false);
    }

    echo json_encode($response);
}
?>