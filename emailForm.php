<?php


if ( isset($_POST["email"]) && isset($_POST['name']) && isset($_POST["comment"]) ) {

  $name = $_POST['name'];
  $email = $_POST['email'];
  $company = $_POST['company'];
  $comment = $_POST['comment'];


  $to = 'jt7903@gmail.com';
  $subject = 'Contact from Portfolio';
  $headers = "From: $email";
  $body = "From: $name\n E-Mail: $email\n Message:\n $comment";


  if ( mail($to, $subject, $body, $headers) ) {
    header ("Location: success.html");
  } else {
    echo '<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later</div>';
  }
}
