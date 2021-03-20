function validateLogin(formArray) {
    let error = []
    formArray.forEach(element => {
      let form = document.getElementById(element);
      if (!form.value) {
        error.push(element);
        document.getElementById(`${element}-error`).innerHTML = `${element} harus di isi`
      }
      else {
        document.getElementById(`${element}-error`).innerHTML = ``
      }
    });
    if (error.length < 1) {
      var username = document.getElementById("Username").value;
      var password = document.getElementById("Password").value;
      if (username == "admin" && password == "admin123") {
        window.location.href = 'home.html'
      }
      else {
        alert("Password/Username yang anda masukkan salah!");
      }
    }
  }