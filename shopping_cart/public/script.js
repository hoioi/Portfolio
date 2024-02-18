let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});

closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "상하이버거",
    price: 8800,
    img: "./img/McSpicy_Shanghai_Burge.png",
  },
  {
    id: 2,
    name: "불고기버거",
    price: 7500,
    img: "./img/Bulgogi_burger.png",
  },
  {
    id: 3,
    name: "치즈버거",
    price: 9000,
    img: "./img/Cheeseburger.png",
  },
  {
    id: 4,
    name: "빅맥",
    price: 8000,
    img: "./img/BigMac.png",
  },
  {
    id: 5,
    name: "더블불고기버거",
    price: 7000,
    img: "./img/Double_Bulgogi_Burger.png",
  },
  {
    id: 6,
    name: "1955버거",
    price: 9500,
    img: "./img/1955_burger.png",
  },
];

let listCards = [];

function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
    <img class="img" src="${value.img}" /> 
      <div class="title">${value.name}</div>
      <div class="price">${value.price.toLocaleString()}</div>
      <button onclick="addToCard(${key})">Add To Cart</button>
    `;
    list.appendChild(newDiv);
  });
}
initApp();
function addToCard(key) {
  if (listCards[key] == null) {
    listCards[key] = { ...products[key], quantity: 1 };
  } else {
    listCards[key].quantity += 1;
  }
  reloadCard();
}

function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
      <img class="Cardimg" src="${value.img}" /> 
        <div>${value.name}</div>
        <div>${value.price.toLocaleString()}</div>
        <div>${value.quantity}</div>
        <div>
          <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
          <div class="count">${value.quantity}</div>
          <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
        </div>
      `;
      listCard.appendChild(newDiv);
    }
    totalPrice += value.price * value.quantity;
    count += value.quantity;
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}

function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
  }
  reloadCard();
}
