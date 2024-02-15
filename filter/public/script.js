/*----navigation----*/

document.addEventListener("DOMContentLoaded", () => {
  const allButton = document.querySelector(".navigation[data-name='all']");
  allButton.classList.add("active");

  allButton.click();
});

const navs = document.querySelectorAll(".navigation");
const titleHash = document.querySelector(".title h1");

navs.forEach((nav) => {
  nav.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    nav.classList.add("active");

    let navName = nav.getAttribute("data-name");

    switch (navName) {
      case "all":
        titleHash.innerHTML = "#전체";
        break;
      case "romance":
        titleHash.innerHTML = "#로맨스";
        break;
      case "fantasy":
        titleHash.innerHTML = "#판타지";
        break;
      case "action":
        titleHash.innerHTML = "#액션";
        break;
      case "comic":
        titleHash.innerHTML = "#개그";
        break;
      case "daily_life":
        titleHash.innerHTML = "#일상";
        break;
      default:
        titleHash.innerHTML = "#전체";
        break;
    }

    /*----json----*/
    let webtoonboxes = document.querySelectorAll(".webtoonbox");

    const url = "webtoon.json";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const infoData = data;

        webtoonboxes.forEach((webtoonbox, i) => {
          let titleNameElement = webtoonbox.querySelector(".title_name");
          let artistElement = webtoonbox.querySelector(".artist");
          let gradeElement = webtoonbox.querySelector(".grade");
          let imgElement = webtoonbox.querySelector(".img");

          titleNameElement.innerHTML = infoData[i].title_name;
          artistElement.innerHTML = infoData[i].artist;
          gradeElement.innerHTML = infoData[i].grade;
          imgElement.style.backgroundImage = `url(${infoData[i].img})`;

          /*----filter----*/
          let webtoon = webtoonbox.getAttribute("data-name");

          if (webtoon === navName || navName === "all") {
            webtoonbox.classList.remove("hide");
            webtoonbox.classList.add("show");
          } else {
            webtoonbox.classList.add("hide");
            webtoonbox.classList.remove("show");
          }
        });
      });
  });
});
