<?php
/**
 * This example shows settings to use when sending via Google's Gmail servers.
 * This uses traditional id & password authentication - look at the gmail_xoauth.phps
 * example to see how to use XOAUTH2.
 * The IMAP section shows how to save this message to the 'Sent Mail' folder using IMAP commands.
 */
//Import PHPMailer classes into the global namespace
require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';
require 'OAuth.php';
//Create a new PHPMailer instance
$mail = new PHPMailer\PHPMailer\PHPMailer;
//Tell PHPMailer to use SMTP
$mail->IsSMTP(); // enable SMTP
$mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
$mail->SMTPAuth = true; // authentication enabled
$mail->SMTPSecure = 'tls'; // secure transfer enabled REQUIRED for Gmail
$mail->Host = "smtp.gmail.com";
$mail->Port = 587; // 465 for ssl or 587 tls
$mail->IsHTML(true);
$mail->Username = "luisjavier004@gmail.com";
$mail->Password = "luiginj464548";
$mail->SetFrom("ejemplo@gmail.com");
$mail->Subject = "Test";
$mail->Body = "hello esto es un ejemplo de emails final";
$mail->AddAddress("luisjavier004@hotmail.com");
$mail->AddAddress("videolearn004@gmail.com");

 if(!$mail->Send()) {
 	echo("Algo ha salido mal /n");
    echo "Mailer Error: " . $mail->ErrorInfo;
 } else {
    echo "Message has been sent";
 }