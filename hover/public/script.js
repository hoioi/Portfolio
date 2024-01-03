const movies = document.querySelectorAll(".movie");
const dark = document.querySelector("#dark");
const white = document.querySelector("#white");

dark.addEventListener("click", () => {
  dark.style.display = "none";
  white.style.display = "block";
  movies.forEach((movie) => {
    movie.style.filter = "none";
  });
});

white.addEventListener("click", () => {
  dark.style.display = "block";
  white.style.display = "none";

  movies.forEach((movie) => {
    movie.style.filter = "grayscale(1)";
  });
});

movies.forEach((movie) => {
  movie.addEventListener("mouseover", () => {
    movie.style.filter = "none";
  });
  movie.addEventListener("mouseleave", () => {
    movie.style.filter = "grayscale(1)";
  });
});
