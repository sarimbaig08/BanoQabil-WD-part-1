// SIGNUP
// Step 1: Get values from input fields
// Step 2: Create user Object
// Step 3: Create and push user object in an array
// Step 4: Store the array in browser local storage

//problem: On page refresh array gets empty due to which we are losing previous values
//sol: Initialize array with the values stored in local storage || []

var userName = document.getElementById("userName");
var userEamil = document.getElementById("email");
var userPass = document.getElementById("password");
var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");

function signupFunc() {
  if (userName.value == "" || !userEamil.value || !userPass.value) {
    alert("Please fill all the fields");
    return;
  }

  let usersArray = localStorage.getItem("users") || [];
  console.log("wiuout parse", usersArray);

  if (usersArray.length != 0) {
    usersArray = JSON.parse(usersArray);
  }

  for (var i = 0; i < usersArray.length; i++) {
    if (userEamil.value == usersArray[i].userEamil) {
      alert("Email already in use");
      return;
    }
  }

  const userObj = {
    userName: userName.value,
    userEamil: userEamil.value,
    userPass: userPass.value,
  };
  usersArray.push(userObj);
  localStorage.setItem("users", JSON.stringify(usersArray));

  userName.value = "";
  userEamil.value = "";
  userPass.value = "";
  alert("Signed up successfully");
}

//LOGIN
// Step 1: Get data from user
// Step 2: Get data from browser local storage
// Step 3: Run a loop on array to check if the email and password match

function loginFunc() {
  let usersArray = localStorage.getItem("users");
  if (usersArray == null) {
    alert("You are not signed up");
    return;
  }
  usersArray = JSON.parse(usersArray);

  var flag = false;

  for (var i = 0; i < usersArray.length; i++) {
    if (
      loginEmail.value == usersArray[i].userEamil &&
      loginPassword.value == usersArray[i].userPass
    ) {
      flag = true;
      alert("Logged in successfully");
      window.location.replace("/dashboard.html");
    }
  }
  if (!flag) {
    alert("Please enter correct credentials");
  }
}
