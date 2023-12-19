const items = document.querySelectorAll(".item");

const url = "information.json";
fetch(url)
  .then((info) => info.json())
  .then((data) => {
    const infoData = data;

    items.forEach((item, i) => {
      let img = item.querySelector(".img");
      let name = item.querySelector(".name");
      let en_name = item.querySelector(".en_name");
      let content_text = item.querySelector(".content_text");
      let L_price = item.querySelector(".detail_L_price");
      let M_price = item.querySelector(".detail_M_price");
      let S_price = item.querySelector(".detail_S_price");

      name.innerHTML = infoData[i].name;
      img.style.backgroundImage = `url(${infoData[i].img})`;
      en_name.innerHTML = infoData[i].en_name;
      content_text.innerHTML = infoData[i].content_text;
      L_price.innerHTML = infoData[i].L_price;
      M_price.innerHTML = infoData[i].M_price;
      S_price.innerHTML = infoData[i].S_price;
    });
  });

/* */

let nextButton = document.querySelector("#next");
let prevButton = document.querySelector("#prev");
let backButton = document.querySelector("#back");
let seeMoreButton = document.querySelectorAll(".seeMore");
console.log(seeMoreButton);
let container = document.querySelector(".container");
let itemBox = document.querySelector(".itemBox");
let contentWrap = document.querySelector(".contentWrap");

nextButton.onclick = function () {
  showSlider("next");
};

prevButton.onclick = function () {
  showSlider("prev");
};

let unAcceptClick;
const showSlider = (type) => {
  nextButton.style.pointerEvents = "none";
  prevButton.style.pointerEvents = "none";

  container.classList.remove("prev", "next");
  let items = document.querySelectorAll(".item");
  if (type === "next") {
    itemBox.appendChild(items[0]);
    container.classList.add("next");
  } else {
    let positionLast = items.length - 1;
    itemBox.prepend(items[positionLast]);
    container.classList.add("prev");
  }

  clearTimeout(unAcceptClick);

  unAcceptClick = setTimeout(() => {
    nextButton.style.pointerEvents = "auto";
    prevButton.style.pointerEvents = "auto";
  }, 2000);
};
