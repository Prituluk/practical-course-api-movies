const leftBtnFilms = document.querySelector("#arrow-left-films");
const rightBtnFilms = document.querySelector("#arrow-right-films");
const leftBtnTv = document.querySelector("#arrow-left-tv");
const rightBtnTv = document.querySelector("#arrow-right-tv");
const scrollContentFilm = document.querySelector("#scrolling-card-film");
const scrollContentTv = document.querySelector("#scrolling-card-tv");

const btnCloseVideo = document.querySelector(".video-close-btn");


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

// playTrailer.addEventListener('click', () => {
//  getTrailerVideoMovie(id);
//  trailerVideo.classList.remove('a');
// });

btnCloseVideo.addEventListener('click', () => {
 trailerVideo.classList.add('a');
});
// 2DP
// const exp = document.querySelector('.exp');

// films.addEventListener('click', () => {
//  const currentHight = window.innerHeight;
//  localStorage.setItem('lastHeight', currentHight);
// });


//  expCloseBtn.addEventListener('click', () => {
//   const storedHeight = localStorage.getItem('lastHeight');
//   if (storedHeight){
//    window.resizeTo(window.innerWidth, storedHeight);
//   }
//  });
