/*----navigation----*/

const navs = document.querySelectorAll(".navigation");

navs.forEach((nav) => {
  nav.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    nav.classList.add("active");
  });
});

/*----json----*/
let webtoonboxes = document.querySelectorAll(".webtoonbox");

const url = "webtoon.json";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const infoData = data;

    webtoonboxes.forEach((webtoonbox, i) => {
      const titleNameElement = webtoonbox.querySelector(".title_name");
      const artistElement = webtoonbox.querySelector(".artist");
      const gradeElement = webtoonbox.querySelector(".grade");
      const imgElement = webtoonbox.querySelector(".img");

      titleNameElement.innerHTML = infoData[i].title_name;
      artistElement.innerHTML = infoData[i].artist;
      gradeElement.innerHTML = infoData[i].grade;
      imgElement.style.backgroundImage = `url(${infoData[i].img})`;
    });
  });
