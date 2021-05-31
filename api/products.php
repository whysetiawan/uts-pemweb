<?php
include "../db/connection.php";

$method = $_SERVER['REQUEST_METHOD'];

if ($method === "GET" && !isset($_GET['search'])) {
  $page = (isset($_GET['page'])) ? (int) $_GET['page'] : 1;
  $limit =  ((isset($_GET['item_count'])) ? (int) $_GET['item_count'] : 10);

  $start = ($page - 1) * $limit;
  $query = mysqli_query($connection, "SELECT * FROM produk LIMIT " . $start . "," . $limit);

  $count_query = mysqli_query($connection, "SELECT COUNT(*) FROM produk LIMIT 0, 100");
  $total;

  if ($count_query) {
    $total = mysqli_fetch_array($count_query);
  }

  $response = array();

  while ($row = mysqli_fetch_array($query)) {
    $item = array();
    $item['id'] = $row['id_produk'];
    $item['nama'] = $row['nama'];
    $item['kategori'] = $row['kategori'];
    $item['harga_produksi'] = $row['harga_produksi'];
    $item['harga_jual'] = $row['harga_jual'];
    $item['stok'] = $row['stok'];
    array_push($response, $item);
  }
  echo json_encode(
    array(
      "item" => $response,
      "total" => $total[0],
      "method" => $method
    )
  );
} else if ($method === "GET" && isset($_GET['search'])) {
  $keyword = isset($_GET['search']) ? $_GET['search'] : '';
  $query = mysqli_query($connection, "SELECT * FROM produk WHERE kategori LIKE '%$keyword%' OR nama LIKE '%$keyword%' LIMIT 10");

  $response = array();
  while ($row = mysqli_fetch_array($query)) {
    $item = array();
    $item['id'] = $row['id_produk'];
    $item['nama'] = $row['nama'];
    $item['kategori'] = $row['kategori'];
    $item['harga_produksi'] = $row['harga_produksi'];
    $item['harga_jual'] = $row['harga_jual'];
    $item['stok'] = $row['stok'];
    array_push($response, $item);
  }
  echo json_encode(
    array(
      "item" => $response,
    )
  );
} else if ($method === "POST") {
  $json = json_decode(file_get_contents('php://input', true));
  $name = $json->name;
  $category = $json->category;
  $stock = $json->stock;
  $cost = $json->cost;
  $price = $json->price;
  $query = mysqli_query($connection, "INSERT INTO `produk` (nama, kategori, harga_produksi, harga_jual, stok) VALUES ('$name', '$category', '$cost', '$price', '$stock')");
  if ($query) {
    echo json_encode(
      array(
        "status" => "success",
        "message" => "Berhasil menambahkan produk",
        "method" => $method
      )
    );
  } else {

    echo json_encode(
      array(
        "status" => "failure",
        "message" => "Gagal menambahkan produk"
      )
    );
  }
} else if ($method === "PUT") {

  $json = json_decode(file_get_contents('php://input', true));
  $id = $json->id;
  $name = $json->name;
  $category = $json->category;
  $stock = $json->stock;
  $cost = $json->cost;
  $price = $json->price;

  $query = mysqli_query($connection, "UPDATE produk SET nama='$name', kategori='$category', stok=$stock, harga_produksi=$cost, harga_jual=$price WHERE id_produk=$id;  ");
  if ($query) {
    echo json_encode(
      array(
        "status" => "success",
        "message" => "Berhasil mengubah produk",
        "method" => $method
      )
    );
  } else {

    echo json_encode(
      array(
        "status" => "failure",
        "message" => "Gagal mengubah produk",
        "trace" => mysqli_error($connection)
      )
    );
  }
}
