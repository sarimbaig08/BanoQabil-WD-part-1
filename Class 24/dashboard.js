var productSection = document.getElementById("productSection");

async function fetchData() {
  try {
    let productApi = await fetch("https://fakestoreapi.com/products");
    productApi = await productApi.json();

    for (var i = 0; i < productApi.length; i++) {
      productSection.innerHTML += `<div class="card" style="width: 18rem">
        <img src="${productApi[i].image}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${productApi[i].title}</h5>
          <p class="card-text">
          ${productApi[i].description}
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;
    }
  } catch (error) {
    console.log(error);
  }
}

fetchData();

// setTimeout(() => {
//   console.log("Function working");
// }, 3000);

// console.log("Next function");
