let userData = {};

$(document).ready(() => {
  const userString = localStorage.getItem('user');
  userData = JSON.parse(userString);
  $("#greeting").text(`Hello, ${userData.username}`)
})

async function userLogin(username, password){
  try {
    const url = new URL("http://localhost:8080/uts/api/login.php");
    const req = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        username,
        password
      })
    });
    const json = await req.json();
    console.log(json)
    if(json.status === 'success'){
      localStorage.setItem('user', JSON.stringify(json.user));
      window.location = 'http://localhost:8080/uts/dashboard/'
    }
    else {
      throw json;
    }
  } catch (error) {
    const msg = error.message ?? error.toString();
    alert("Terjadi Kesalahan " + msg);
  }
}