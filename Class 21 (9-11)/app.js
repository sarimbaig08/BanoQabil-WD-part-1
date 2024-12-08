// var let const
//global scope and block level
//reassignment and redeclaration

//var redec & reasg => global scope
//let reasg => block level
//const  => block level

// const firstName = "sarim";

// if (true) {
//   const firstName = "baig";
//   console.log("inside", firstName);
// }

// console.log("outside", firstName);

// let fruits = ["apple", "mango", 123, true, null, undefined];
// console.log(fruits);

// let userNames = ["sarim", "annus", "hassan", "raheel"];

// userNames.push("baig");
// userNames.push("baig");
// userNames.pop();

// userNames.unshift("baig");
// userNames.shift();
console.log(userNames, "userNames1");

// let selectedNames = userNames.slice(1, 3);

//splice => index, quantity to remove items, new values to be added

userNames.splice(2, 0, "helo", "helo2");
console.log("userNames2", userNames);

userNames.splice(2, 0, "helo3", "helo4");
console.log("userNames3", userNames);

// var name1 = "sarim";
// var name2 = "hassan";
// var name3 = "baig";
// var pass1 = "sarim123";
// var pass2 = "hassan123";
// var pass3 = "baig123";

var signupName = prompt("SIGNUP: Enter name"); //SARIM
var signupPassword = prompt("SIGNUP: Enter password"); //123

var userName = prompt("LOGIN: enter your name");

if (userName == signupName) {
  var password = prompt("LOGIN: enter your password");
  if (password == signupPassword) {
    console.log(signupName, "You are logged in");
  } else console.log("Please enter correct password");
}

// else if (userName == name2) {
//   var password = prompt("enter your password");
//   if (password == pass2) {
//     console.log("hassan: You are logged in");
//   } else console.log("Please enter correct password");
// } else if (userName == name3) {
//   var password = prompt("enter your password");
//   if (password == pass3) {
//     console.log("baig: You are logged in");
//   } else console.log("Please enter correct password");
// }
else {
  console.log("Please enter correct name");
}
