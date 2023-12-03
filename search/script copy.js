/*----mainPage_json----*/

const cars = document.querySelectorAll(".car");
const search = document.querySelector(".search");

const url = "main.json";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const infoData = data;
    cars.forEach((car, i) => {
      let main_imgElement = car.querySelector(".main_img");
      let car_nameElement = car.querySelector(".car_name");
      let car_typeElement = car.querySelector(".car_type");
      let car_priceElement = car.querySelector(".car_price");

      car_nameElement.innerHTML = infoData[i].car_name;
      car_typeElement.innerHTML = infoData[i].car_type;
      car_priceElement.innerHTML = infoData[i].car_price;
      main_imgElement.style.backgroundImage = `url(${infoData[i].main_img})`;
    });
    const getSearchResult = () => {
      if (search == "") {
        console.log(infoData);
        return infoData;
      } else {
        return infoData.filter((it) =>
          it.car_name.toLowerCase().includes(search)
        );
      }
    };
    search.addEventListener("input", getSearchResult);
    // getSearchResult().map((it) => [...it]);
    console.log(getSearchResult());
  });

// search.addEventListener("input", () => {
//   const searchValue = search.value.trim().toLowerCase();

//   cars.forEach((car) => {
//     const carName = car.dataset.name.toLowerCase();
//     const carType = car.dataset.type.toLowerCase();

//     const result =
//       carName.includes(searchValue) || carType.includes(searchValue);
//     car.style.display = result ? "block" : "none";
//   });
// });

// Reset Display on Empty Search
// search.addEventListener("keyup", () => {
//   if (search.value !== "") return;
//   cars.forEach((car) => {
//     car.style.display = "block";
//   });
// });

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
      });
    });
  });
