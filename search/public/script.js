/*----mainPage_json----*/

const cars = document.querySelectorAll(".car");

const url = "main.json";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const infoData = data;
    cars.forEach((car, i) => {
      let main_imgElement = car.querySelector(".main_img");
      let main_img480Element = car.querySelector(".main_img480");
      let car_nameElement = car.querySelector(".car_name");
      let car_typeElement = car.querySelector(".car_type");
      let car_priceElement = car.querySelector(".car_price");

      car_nameElement.innerHTML = infoData[i].car_name;
      car_typeElement.innerHTML = infoData[i].car_type;
      car_priceElement.innerHTML = infoData[i].car_price;
      main_imgElement.style.backgroundImage = `url(${infoData[i].main_img})`;
      main_img480Element.style.backgroundImage = `url(${infoData[i].main_img480})`;
    });
  });

const search = document.querySelector(".search");

search.addEventListener("input", () => {
  const searchValue = search.value.trim().toLowerCase();

  let filteredCars = 0;

  cars.forEach((car) => {
    const carName = car.dataset.name.toLowerCase();
    const carType = car.dataset.type.toLowerCase();

    const isMatch =
      carName.includes(searchValue) || carType.includes(searchValue);
    car.style.display = isMatch ? "block" : "none";

    if (isMatch) {
      filteredCars++;
    }
  });

  const resultText = document.querySelector("#resultText");
  resultText.innerHTML = `검색하신 결과 ${filteredCars}건이 나왔습니다.`;
});

// Reset Display on Empty Search
search.addEventListener("input", () => {
  if (search.value === "") {
    cars.forEach((car) => {
      car.style.display = "block";
    });

    const resultText = document.querySelector("#resultText");

    resultText.innerHTML = `검색하신 결과 0건이 나왔습니다.`;
  }
});

console.log(resultText);

/*----modal on/off----*/

const modal = document.querySelector(".modal");
const xmark = document.querySelector(".fa-xmark");

cars.forEach((car) => {
  car.addEventListener("click", () => {
    modal.classList.add("click");
  });
});

xmark.addEventListener("click", () => {
  modal.classList.remove("click");
});

/*----modal json----*/

let modal_subtitle = document.querySelector(".modal_subtitle");
let modal_titlename = document.querySelector(".modal_titlename");
let modal_price = document.querySelector(".modal_price");
let modal_mileage = document.querySelector(".modal_mileage");
let modal_people = document.querySelector(".modal_people");
let modal_displacement = document.querySelector(".modal_displacement");
let rightboximg = document.querySelector(".rightbox");
let rightboximg1280 = document.querySelector(".rightbox1280");
let rightboximg480 = document.querySelector(".rightbox480");

const url02 = "modal.json";
fetch(url02)
  .then((info) => info.json())
  .then((info) => {
    const infoData = info;

    cars.forEach((car, j) => {
      car.addEventListener("click", () => {
        const infoDataII = infoData[j];

        modal_subtitle.innerHTML = infoData[j].subtitle;
        modal_titlename.innerHTML = infoData[j].titlename;
        modal_price.innerHTML = infoData[j].price;
        modal_mileage.innerHTML = infoData[j].mileage;
        modal_people.innerHTML = infoData[j].people;
        modal_displacement.innerHTML = infoData[j].displacement;
        rightboximg.style.backgroundImage = `url(${infoData[j].imge})`;
        rightboximg1280.style.backgroundImage = `url(${infoData[j].imge_1280})`;
        rightboximg480.style.backgroundImage = `url(${infoData[j].imge_480})`;
      });
    });
  });
