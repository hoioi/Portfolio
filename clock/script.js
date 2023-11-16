const body = document.querySelector("body");
const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");
const modeSwich = document.querySelector(".mode-switch");

if (localStorage.getItem("mode") === "Dark Mode") {
  body.classList.add("dark");
  modeSwich.textContent = "Light Mode";
}
modeSwich.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDarkMode = body.classList.contains("dark");

  modeSwich.textContent = isDarkMode ? "Light Mode" : "Dark Mode";

  localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
});

const updateTime = () => {
  let date = new Date(),
    secToDeg = (date.getSeconds() / 60) * 360;
  minToDeg = (date.getMinutes() / 60) * 360;
  hrToDeg = (date.getHours() / 12) * 360;

  secondHand.style.transform = `rotate(${secToDeg}deg)`;
  minuteHand.style.transform = `rotate(${minToDeg}deg)`;
  hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};

setInterval(updateTime, 1000);

updateTime();

// electronicClock

let hrs = document.querySelector("#hrs");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

setInterval(() => {
  let date = new Date();

  hrs.innerHTML = (date.getHours() < 10 ? "0" : "") + date.getHours();
  min.innerHTML = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
  sec.innerHTML = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();
}, 1000);
