const leftBtnFilms = document.querySelector("#arrow-left-films");
const rightBtnFilms = document.querySelector("#arrow-right-films");
const leftBtnTv = document.querySelector("#arrow-left-tv");
const rightBtnTv = document.querySelector("#arrow-right-tv");
const scrollContentFilm = document.querySelector("#scrolling-card-film");
const scrollContentTv = document.querySelector("#scrolling-card-tv");

leftBtnFilms.addEventListener("click", () => {
 scrollContentFilm.scrollLeft -= 500;
});
rightBtnFilms.addEventListener("click", () => {
 scrollContentFilm.scrollLeft += 500;
});

leftBtnTv.addEventListener("click", () => {
 scrollContentTv.scrollLeft -= 500;
});
rightBtnTv.addEventListener("click", () => {
 scrollContentTv.scrollLeft += 500;
});