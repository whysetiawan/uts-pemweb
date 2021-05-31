
const defaultItemCount = 2;
let arrayOfProducts = [];

$(document).ready(() => {
  fetchProducts();
  $("#search-form").on('input', 
    debounce(() => {
      const keyword = $('#search-form').val();
      searchProducts(keyword);
    }, 500)
  );
});

function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
          return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
  }
  return false;
};


function numberSeparator(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function renderTable(products, page = 1){
  let tableResult = '';
  let numStart = (page - 1) * defaultItemCount + 1;
    products.forEach((prod, idx) => {
      const strProd = encodeURIComponent(JSON.stringify(prod));
      const changeLink = userData.role > 1 ? '': '<a onclick="openEditModal(' + "'" + strProd + "'" + ')" class="btn-primary btn" href="#">Ubah</a>';
      const deleteLink = userData.role > 1 ? '': `<a onclick="deleteProduct('${prod.id}')" class="btn-danger btn" href="#">Hapus</a>`;
      console.log(`<a onclick="deleteProduct('${prod.id}')" class="btn-danger btn" href="#">Hapus</a>`)
      console.log(changeLink)
      tableResult += `<tr>
        <td>${numStart++}</td>
        <td>${prod.nama}</td>
        <td>${prod.kategori}</td>
        <td>${prod.stok}</td>
        <td>Rp ${numberSeparator(prod.harga_produksi)}</td>
        <td>Rp ${numberSeparator(prod.harga_jual)}</td>
        <td>
        ${changeLink}
          ${deleteLink}
        </td>
      </tr>
      `
  });
  $("#custom-table-body").html(tableResult);
}

function openEditModal(prod){
  const json = JSON.parse(decodeURIComponent(prod));
  console.log(json)
  $("#product-name").attr("value", json.nama);
  $("#product-category").attr("value", json.kategori);
  $("#product-stock").attr("value", json.stok);
  $("#product-cost").attr("value", json.harga_produksi);
  $("#sale-price").attr("value", json.harga_jual);
  window.history.pushState({id: json.id}, 'Kedai Licious', `http://localhost:8080/uts/dashboard/products.html?id=${json.id}`)
  $("#update-modal").modal("show");
}

async function editProduct(){
  try {
    const id = getUrlParameter("id");
    const name = $("#product-name").val();
    const category = $("#product-category").val();
    const stock = $("#product-stock").val();
    const cost = $("#product-cost").val();
    const price = $("#sale-price").val();
    let url = new URL("http://localhost:8080/uts/api/products.php");
    const req = await fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        id,
        name,
        category,
        stock,
        cost,
        price,
      })
    });
    const json = await req.json();
    if(json.status === 'success'){

      window.location = window.location.href.split("?")[0];
    }
    else {
      throw json;
    }
  } catch (error) {
    console.log(error);
    alert("Terjadi Kesalahan")
  }
}

function renderPagination(pages){
  $('.pagination').html('');
  const allPages = Math.ceil(pages / defaultItemCount);
  for(let i = 0; i < allPages; i++){
    const isActive = (i + 1) === 1 ? 'active' : '';
    $('.pagination').append($(`<li class="page-item ${isActive}"><a class="page-link" href="javascript:fetchProducts(${i+1})"> ${i+1}</a></li>`))
  }
}

async function fetchProducts(page, itemCount = defaultItemCount) {
  try {
    let url = new URL("http://localhost:8080/uts/api/products.php");
    url.search =  new URLSearchParams({
      page: page ?? 1,
      item_count: itemCount,
    });
    const req = await fetch(url, {
      method: "GET",
    });
    const json = await req.json();
    arrayOfProducts = json.item;
    renderTable(arrayOfProducts, page);
    renderPagination(parseInt(json.total));
    if(page){
      updatePagination(page);
    }
  } catch (error) {
    alert("Something went wrong")
  }
}

function updatePagination(page){
  const pagination = $('.pagination').children();
  for(let i = 0; i < pagination.length; i++){
    if(i === (page - 1)){
      $(pagination[i]).addClass('active');
    }
    else {
      $(pagination[i]).removeClass('active');
    }
  }
}

async function searchProducts(word){
  if(!word){
    fetchProducts();
  }
  else {
    try {
      console.log("searching")
      let url = new URL("http://localhost:8080/uts/api/products.php");
      url.search = new URLSearchParams({
        search: word
      });
      const req = await fetch(url, {
        method: "GET"
      });
      const json = await req.json();
      console.log(json);
      renderTable(json.item)
      renderPagination(0);
    } catch (error) {
      alert("Something went wrong", error.toString())
    }
  }
}


function debounce(callback, delay) {
  let timeout
  return () => {
    let args = arguments
    clearTimeout(timeout)
    timeout = setTimeout(function() {
      callback.apply(this, args)
    }.bind(this), delay)
  }
}

async function addProduct(){
  try {
    console.log('addProduct');
    const name = $("#product-name").val();
    const category = $("#product-category").val();
    const stock = $("#product-stock").val();
    const cost = $("#product-cost").val();
    const price = $("#sale-price").val();
    const bodyString = JSON.stringify({
      name,
      category,
      stock,
      cost,
      price
    })
    console.log(bodyString)
    let url = new URL("http://localhost:8080/uts/api/products.php");
    const req = await fetch(url, {
      method: "POST",
      body: bodyString,
    });
    const json = await req.json();
    if(json.status === 'success'){
      alert(json.message);
    }
    else {
      throw json;
    }
  } catch (error) {
    console.log(error);
    alert("Terjadi Kesalahan", error.message.toString() ?? error.toString() );
  }
}

async function deleteProduct(id){
  try {
    const url = new URL("http://localhost:8080/uts/api/delete_products.php");
    const req = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        id
      })
    });
    const json = await req.json();
    if(json.status === 'success'){
      alert("Berhasil menghapus data")
    }
    else {
      throw json;
    }
  } catch (error) {
    console.log(error);
    alert("Terjadi Kesalahan", error.message ?? error.toString());
  }
}