// alert("Connected");

// let fruits = ["apple", "mango", "kivi", "orange"];
// console.log(fruits);

// let userGmails = [
//   "123@gmail.com",
//   "sarim@gmail.com",
//   "helo@gmail.com",
//   "asim@gmail.com",
// ];
// console.log(userGmails);

// let email = "asim@gmail.com";
// let userName = "kivi";

// for (var i = 0; i < fruits.length; i++) {
//   console.log("2 x ", i, " = ", i * 2);
//   console.log(fruits[i]);
//   console.log(i);
// }
// console.log(fruits[2]);
// console.log()

// let fruits = ["apple", "mango", "kivi", "orange", "pineapple", "watermelon"];
// let userName = "kivi";

// var flag = false;
// for (var i = 0; i < fruits.length; i++) {
//   if (userName == fruits[i]) {
//     flag = true;
//     console.log("fruit mil gya");
//     break;
//   }
//   console.log(i, fruits[i]);
// }
// if (flag == false) {
//   console.log("Beta fruit nahi mila");
// }

// let signupName = "sarim";
// let signupPass = "1234";

let userNames = ["sarim", "hassan", "kabir", "azeem", "ahsan"];
let userPass = ["4444", "1122", "2233", "4455", "1234"];

let loginName;

//OBJECTS: KEY & VALUE

let sarim = {
  userName: "mirza sarim baig",
  userEmail: "sarim@gmail.com",
  userPass: "sarim1234",
  userAdd: "karachi",
  userNumber: "009900",
};
let yasir = {
  userName: "mirza yasir baig",
  userEmail: "yasir@gmail.com",
  userPass: "yasir1234",
  userAdd: "karachi",
  userNumber: "009900",
};

// console.log(sarim);
// console.log(yasir);

let productDetails = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    address: {
      geolocation: {
        lat: "-37.3159",
        long: "81.1496",
      },
      city: "kilcoole",
      street: "new road",
      number: 7682,
      zipcode: "12926-3874",
    },
    id: 6,
    email: "john@gmail.com",
    username: "johnd",
    password: "m38rmF$",
    name: {
      firstname: "john",
      lastname: "doe",
    },
  },
];

console.log(productDetails[5].email);
console.log(productDetails);

for (var k = 0; k < productDetails.length; k++) {
  // console.log("product", productDetails[k].id);
  if (productDetails[k].id == "6") {
    console.log(productDetails[k].email);
  }
}

for (var j = 0; j < 10; j++) {
  document.write(productDetails[j].rating.count, "<br>");
  console.log(productDetails[j].rating.count);
}

var flag = false;
for (var i = 0; i < userNames.length; i++) {
  // console.log(i, userNames[i]);
  if (loginName == userNames[i]) {
    // let loginPass = prompt("Enter password");
    // if (loginPass == userPass[i]) {
    console.log("Login");
    flag = true;
    break;
    // }
  }
}

if (!flag) {
  // console.log("Invalid username");
}

// let loginName = prompt("Enter name");

// if (userNames[0] == loginName) {
//   let loginPass = prompt("Enter your pass");
//   if (userPass[0] == loginPass) {
//     console.log("you are logged in");
//   } else {
//     console.log("Enter correct password");
//   }
// } else {
//   console.log("Enter correct username");
// }
