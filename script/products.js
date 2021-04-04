const productArray = [
  {
    nama: "Coffee",
    jenis: "Drinks",
    harga_produksi: "Rp 15.000",
    harga_jual: "Rp 20.000",
  },
  {
    nama: "Seblak",
    jenis: "Foods",
    harga_produksi: "Rp 15.000",
    harga_jual: "Rp 20.000",
  },
  {
    nama: "Salad",
    jenis: "Dessert",
    harga_produksi: "Rp 15.000",
    harga_jual: "Rp 20.000",
  },
  {
    nama: "Kebab",
    jenis: "Beverages",
    harga_produksi: "Rp 15.000",
    harga_jual: "Rp 27.000",
  },
  {
    nama: "Ramen",
    jenis: "Foods",
    harga_produksi: "Rp 20.000",
    harga_jual: "Rp 30.000",
  },
  {
    nama: "Coffee",
    jenis: "Drinks",
    harga_produksi: "Rp 15.000",
    harga_jual: "Rp 20.000",
  }
];

function pushProducts() {
  const nama = document.getElementById("Nama").value;
  const jenis = document.getElementById("Jenis").value;
  const harga_produksi = document.getElementById("Harga-Produk").value;
  const harga_jual = document.getElementById("Harga-Jual").value;
  productArray.push({
    nama,
    jenis
  });
  const body = $("#table-body");
    const newRow = document.createElement("tr");
    body[0].appendChild(newRow);
    let newName = document.createElement("td");
    newName.textContent = nama;
    newRow.appendChild(newName);
    let newJenis = document.createElement("td");
    newJenis.textContent = jenis;
    newRow.appendChild(newJenis);
    let newHarga = document.createElement("td");
    newHarga.textContent = harga_produksi;
    newRow.appendChild(newHarga);
    let newJual = document.createElement("td");
    newJual.textContent = harga_jual;
    newRow.appendChild(newJual);
}
