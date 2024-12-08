//initializing/declaration =>var firstname;
//value assignment =>firstname = "sarim";

//Re Declaration & Override

//VAR
// var => allow re-initialization & override
// var firstname = "hello";
// firstname = "sarim";
// console.log(firstname);

//Global scope
// var firstname = "hello";
// if (true) {
//   var firstname = "sarim";
//   console.log("inside", firstname);
// }
// console.log("outside", firstname);

//LET
// let => don't allow re-initialization but allow override
// let lastName = "hello";
// lastName = "sarim";
// console.log(lastName);

//Block scope
// let firstname = "hello";
// if (true) {
//   let firstname = "sarim";
//   firstname = "sarim baig";
//   console.log("inside", firstname);
// }
// console.log("outside", firstname);

// CONST
// const => don't allow re-initialization & override
// const userName = "hello";
// userName = "sarim";
// console.log(userName);

//Block scope
// const firstname = "hello";
// if (true) {
//   const firstname = "sarim";
//   console.log("inside", firstname);
// }
// console.log("outside", firstname);

//ARRAY

// let userNames = ["mirza", "sarim", "baig", 123, true, null, undefined];

//MEHTODS TO ADD AND REMOVE VALUES FORM END
// userNames.push("bano qabil");
// userNames.push("pharlo");
// userNames.pop();
// userNames.pop();

//MEHTODS TO ADD AND REMOVE VALUES FORM START
// userNames.unshift("bano qabil");
// userNames.shift();

//SLICE & SPLICE
// var selectedName = userNames.slice(2, 3);

// Splice takes 3 arguments
// 1: index Number
// 2: total count of the values to be deleted
// 3:values to be added

// let userNames = ["mirza", "sarim", "baig", 123, true, null, undefined];
// console.log(userNames);

// userNames.splice(0, 2, "helo", "helo2");
// console.log(userNames);

// userNames.splice(0, 0, "num1", "num2");
// console.log(userNames);
// console.log("selectedName", selectedName);

// MALE (11-1): LOOPS

// 1: Variable dec & value asg
// 2:Condition
// 3:inc/dec

for (var i = 1; i <= 10; i++) {
  document.write("2 x ", i, " = ", 2 * i, "<br>");
}

var userNames = [
  "sarim",
  "adeel",
  "asim",
  "hassan",
  "qasim",
  "abeer",
  "helo",
  "hassan",
  "qasim",
  "abeer",
  "helo",
];
var selectedName = prompt("Enter your user name");
var flag = false;
for (var j = 0; j < userNames.length; j++) {
  if (selectedName == userNames[j]) {
    flag = true;
    console.log("You are logged in", userNames[j]);
  }
}

if (flag == false) {
  console.log("Unautherize");
}
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// FEMALE (9-11): LOOPS
