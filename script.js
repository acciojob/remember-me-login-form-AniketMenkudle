
const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existing = document.getElementById("existing");


// Check if saved credentials already exist
if (
  localStorage.getItem("username") &&
  localStorage.getItem("password")
) {
  existing.style.display = "block";
}


// Submit form
form.addEventListener("submit", function (event) {

  event.preventDefault();

  alert("Logged in as " + username.value);

  if (checkbox.checked) {

    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);

    existing.style.display = "block";

  } else {

    localStorage.removeItem("username");
    localStorage.removeItem("password");

    existing.style.display = "none";
  }

});


// Login as existing user
existing.addEventListener("click", function () {

  const savedUsername = localStorage.getItem("username");

  alert("Logged in as " + savedUsername);

});

