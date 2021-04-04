let productArray = [
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
  },
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
  },
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
  },
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


function validateArray(arr, x, y){
  let array = arr;
  if(typeof arr === String){
    JSON.parse(arr);
  }
  paginate(array, x, y)
}

function paginate(array, page_size, page_number) {
  let i = 0;
  const paginateArray = array.slice((page_number - 1) * page_size, page_number * page_size);
  const paginateDiv = $("#paginate");
  paginateDiv.empty();
  const totalPagination = array.length / page_size;
  while (i < totalPagination) {
    const isActive = page_number === i + 1 ? "active" : "";
    const ahref = $("<a class=" + isActive + ">" + (i + 1) + "</a>").attr({
      id: 'paginate-link',
      href: 'javascript:validateArray(' + JSON.stringify(array) + ',' + 5 + ',' + (i + 1) + ')'
    });
    paginateDiv.append(ahref);
    i++;
  }
  showProducts(paginateArray, page_size * (page_number - 1));
}


function showProducts(arr, page_number){
  const body = $("#table-body");
  body.empty();
  arr.slice(0,10).forEach((element, index) => {
    const newRow = document.createElement("tr");
    body[0].appendChild(newRow);
    const id = document.createElement("td");
    id.textContent = (index + (1 + page_number)).toString();
    newRow.appendChild(id);
    let newName = document.createElement("td");
    newName.textContent = element.nama;
    newRow.appendChild(newName);
    let newJenis = document.createElement("td");
    newJenis.textContent = element.jenis;
    newRow.appendChild(newJenis);
    let newHarga = document.createElement("td");
    newHarga.textContent = element.harga_produksi;
    newRow.appendChild(newHarga);
    let newJual = document.createElement("td");
    newJual.textContent = element.harga_jual;
    newRow.appendChild(newJual);
    let edit = document.createElement("td");
    edit.textContent = "Edit";
    newRow.appendChild(edit);
    let del = document.createElement("td");
    del.textContent = "Delete";
    newRow.appendChild(del);
  });

}

function pushProducts() {
  const nama = document.getElementById("Nama").value;
  const jenis = document.getElementById("Jenis").value;
  const harga_produksi = document.getElementById("Harga-Produk").value;
  const harga_jual = document.getElementById("Harga-Jual").value;
  productArray.push({
    nama,
    jenis,
    harga_produksi,
    harga_jual,
  });
  paginate(productArray, 5, productArray / 5);
  const modal = document.getElementById("modal-container");
  modal.style.display = "none";
}


function searchProducts(){
  const keyword = document.getElementById('search').value;
  console.log(keyword);
  const filtered  = productArray.filter((element, index) => {
    const lowerKeyword = keyword.toLowerCase();
    const lowerIndex = index.toString().toLowerCase();
    console.log(element.nama.toLowerCase().includes(lowerKeyword))
    return  element.nama.toLowerCase().includes(lowerKeyword) || element.jenis.toLowerCase().includes(lowerKeyword) || lowerIndex.includes(lowerKeyword);
  })
  paginate(filtered, 5, 1);
}

function showAddModal(){
  const modal = document.getElementById("modal-container");
  const btn = document.getElementById("show-add-btn");
  const span = document.getElementsByClassName("close")[0];
  btn.onclick = function () {
    modal.style.display = "block";
  }
  span.onclick = function () {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}