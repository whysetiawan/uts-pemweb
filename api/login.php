<?php
include "../db/connection.php";

$json = json_decode(file_get_contents('php://input', true));
$username = $json->username ? $json->username : null;
$email = $json->email ? $json->email : null;
$password = $json->password;

$query = false;
if ($username) {
  $query = mysqli_query($connection, "SELECT * FROM user WHERE username = '$username' AND password='$password' ");
}
if ($email) {
  $query = mysqli_query($connection, "SELECT * FROM user WHERE email = '$email' AND password='$password' ");
}

if ($query && mysqli_num_rows($query) > 0) {
  session_start();
  $_SESSION['user'] = $username != null ? $username : $email;
  $response = array();
  while ($row = mysqli_fetch_array($query)) {
    $_SESSION['id'] = $row['id_user'];
    $response["username"] = $row["username"];
    $response["email"] = $row["email"];
    $response["id"] = $row["id_user"];
    $response["role"] = $row["role_id"];
  }

  echo json_encode(
    array(
      "status" => "success",
      "message" => "Login Berhasil",
      "user" => $response
    )
  );
} else {
  echo json_encode(array("status" => "failure", "message" => "Username/Email atau Password salah "));
}
