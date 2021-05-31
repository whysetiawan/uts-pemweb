<?php
include "../db/connection.php";
header("Content-type: text/plain");

$page = (isset($_GET['page'])) ? (int) $_GET['page'] : 1;
$limit =  ((isset($_GET['item_count'])) ? (int) $_GET['item_count'] : 10);

$start = ($page - 1) * $limit;
$query = mysqli_query($connection, "SELECT * FROM user LIMIT " . $start . "," . $limit);

$count_query = mysqli_query($connection, "SELECT COUNT(*) FROM user LIMIT 0, 100");
$total;

if ($count_query) {
  $total = mysqli_fetch_array($count_query);
}

$response = array();

while ($row = mysqli_fetch_array($query)) {
  $item = array();
  $item['id'] = $row['id_user'];
  $item['name'] = $row['name'];
  $item['email'] = $row['email'];
  $item['username'] = $row['username'];
  $item['password'] = $row['password'];
  $item['role_id'] = $row['role_id'];
  array_push($response, $item);
}
echo json_encode(
  array(
    "users" => $response,
    "total" => $total[0]
  )
);
