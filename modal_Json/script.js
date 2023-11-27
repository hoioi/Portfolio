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
