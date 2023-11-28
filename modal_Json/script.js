// modal on/of

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

//number min/plus

const minbtn = document.querySelector(".minbtn");
const plusbtn = document.querySelector(".plusbtn");
const num = () => {
  document.querySelector(".num").innerText = i;
};

let i = 0;

plusbtn.addEventListener("click", () => {
  if (i < 3) {
    i++;
    num();
  } else {
    alert("해당 상품의 최대구매 수량은 3개입니다");
  }
});
minbtn.addEventListener("click", () => {
  if (i > 1) {
    i--;
    num();
  } else {
    alert("해당 상품의 최소구매 수량은 1개입니다");
  }
});

//json

let title_name = document.querySelector(".title_name");
let img = document.querySelector(".modal_img");
let title_price = document.querySelector(".title_price");
let sale_price = document.querySelector(".sale_price");

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
        sale_price.innerHTML = infoData[j].sale_price;
        img.style.backgroundImage = `url(${infoData[j].img})`;
      });
    });
  });
