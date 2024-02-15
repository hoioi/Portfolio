// modal on/off

const modalWrap = document.querySelector(".modalWrap");
const glass = document.querySelectorAll(".clickIcon");
const xmark = document.querySelector(".fa-xmark");

glass.forEach((glass01) => {
  glass01.addEventListener("click", () => {
    modalWrap.classList.add("click");
  });
});

xmark.addEventListener("click", () => {
  modalWrap.classList.remove("click");
});

// hide on/off

const hide = document.querySelector(".hide");
const plus = document.querySelector(".fa-plus");
const delivery = document.querySelector(".delivery");
const deliveryTime = document.querySelector(".deliveryTime");

plus.addEventListener("click", () => {
  hide.classList.add("open");
  delivery.classList.add("open");
  deliveryTime.classList.add("open");
});

//json

let title_name = document.querySelector(".title_name");
let img = document.querySelector(".modal_img");
let img_1280 = document.querySelector(".modal_img_1280");
let img_480 = document.querySelector(".modal_img_480");
let title_price = document.querySelector(".title_price");

const url = "modal.json";
fetch(url)
  .then((info) => info.json())
  .then((info) => {
    const infoData = info;

    glass.forEach((glass01, j) => {
      glass01.addEventListener("click", () => {
        const infoDataI = infoData[j];

        title_name.innerHTML = infoData[j].title_name;
        title_price.innerHTML = infoData[j].title_price;

        img.style.backgroundImage = `url(${infoData[j].img})`;
        img_1280.style.backgroundImage = `url(${infoData[j].img_1280})`;
        img_480.style.backgroundImage = `url(${infoData[j].img_480})`;
      });
    });
  });

//number min/plus

const minbtn = document.querySelector(".minbtn");
const plusbtn = document.querySelector(".plusbtn");
const num = () => {
  document.querySelector(".num").innerText = i;
};

let i = 0;
let price = 342000;
let sale_price = document.querySelector(".sale_price");

const counterReset = () => {
  let result = i * price;
  sale_price.innerText = result;
};

plusbtn.addEventListener("click", () => {
  if (i < 3) {
    i++;
    num();
    counterReset();
  } else {
    alert("해당 상품의 최대구매 수량은 3개입니다");
  }
});

minbtn.addEventListener("click", () => {
  if (i > 1) {
    i--;
    num();
    counterReset();
  } else {
    alert("해당 상품의 최소구매 수량은 1개입니다");
  }
});
