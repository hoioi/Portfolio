/*----mainPage_json----*/

let cars = document.querySelectorAll(".car");

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
  });

/*----Search----*/

const search = document.querySelector(".search");

search.addEventListener("keyup", (e) => {
  // if (e.key == "Enter") {
  //   let searchValue = search.value;
  //   let value = searchValue.toLowerCase();
  //   cars.forEach((car) => {
  //     if (value === car.dataset.name) {
  //       return (car.style.display = "block");
  //     }
  //     car.style.display = "none";
  //   });
  // }

  let searchValue = search.value;
  let value = searchValue.toLowerCase();
  cars.forEach((car) => {
    if (value === car.dataset.name) {
      return (car.style.display = "block");
    }
    car.style.display = "none";
  });
});

search.addEventListener("keyup", () => {
  if (search.value != "") return;

  cars.forEach((car) => {
    car.style.display = "block";
  });
});

/*----Search----*/

// const search = document.querySelector(".search");

// search.addEventListener("keyup", (e) => {
//   if (e.key == "Enter") {
//     let searchValue = search.value;
//     let value = searchValue.toLowerCase();
//     cars.forEach((car) => {
//       if (value === car.dataset.name) {
//         return car.classList.add("show");
//         car.classList.remove("hide");
//       } else car.classList.remove("show");
//       car.classList.add("hide");
//     });
//   }
// });

// search.addEventListener("keyup", () => {
//   if (search.value != "") return;

//   cars.forEach((car) => {
//     car.classList.add("show");
//   });
// });
