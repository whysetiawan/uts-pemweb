<?php
include "../db/connection.php";

$json = json_decode(file_get_contents('php://input', true));
$id = $json->id;

$query = mysqli_query($connection, "DELETE FROM produk WHERE id_produk = '$id' ");

if ($query) {
  echo json_encode(array("status" => "success", "message" => "Berhasil menghapus data"));
} else {
  echo json_encode(array("message" => mysqli_error($connection)));
}
