function validateSignup(formArray) {
    let error = []
    formArray.forEach(element => {
      let form = document.getElementById(element);
      if (!form.value) {
        error.push(element);
        document.getElementById(`${element}-reg-error`).innerHTML = `${element} harus di isi`
      }
      else {
        document.getElementById(`${element}-reg-error`).innerHTML = ``
      }
    });
    if (error.length < 1) {
        window.location.href = 'home.html';
    }
  }