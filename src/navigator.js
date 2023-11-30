titleHome.addEventListener('click', () => {
 location.hash='#home';
})
expCloseBtn.addEventListener('click', () => {
 location.hash='#home';
});
searchBtn.addEventListener('click', () => {
 location.hash='#search=' + inputTextSearch.value;
});
searchBtn1.addEventListener('click', () => {
 location.hash='#search=' + inputTextSearch1.value;
});


window.addEventListener('DOMContentLoaded', navigator, false );
window.addEventListener('hashchange', navigator, false);

function navigator() {
 console.log({location});

 if(location.hash.startsWith('#trends')) {
  trendsPage();
 }else if (location.hash.startsWith('#search=')){
  searchPage();
 }else if (location.hash.startsWith('#movie=')){
  moviePage();
 } else if (location.hash.startsWith('#tv=')){
  tvPage();
 }else if (location.hash.startsWith('#category=')){
  categoryPage();
 }else {
  homePage();
 }
 location.hash

 document.body.scrollTop=0;
 document.documentElement.scrollTop=0;
}

function homePage(){
 console.log('home');
 exp.classList.add('a');
 categoryExt.classList.add('a');
 searchSelection.classList.add('a');
 navBar.classList.remove('a');
 intro.classList.remove('a');
 films.classList.remove('a');
 tv.classList.remove('a');
 category.classList.remove('a');

 getTrendingMoviesPreview();
 getTrendingTvPreview();
 getCategoryMovies();
}
function trendsPage(){
 console.log('trends');
}
function searchPage(){
 exp.classList.add('a');
 categoryExt.classList.remove('a');
 categorySelectionTitle.classList.add('a');
 searchSelection.classList.remove('a');
 navBar.classList.add('a');
 intro.classList.add('a');
 films.classList.add('a');
 tv.classList.add('a');
 category.classList.add('a');

 const [_, query] = location.hash.split('=');
 getMoviesBySearch(query);

 console.log('category');
 console.log('search');
}
function tvPage(){
 exp.classList.remove('a');
 categoryExt.classList.add('a');
 searchSelection.classList.add('a');
 navBar.classList.add('a');
 intro.classList.add('a');
 films.classList.add('a');
 tv.classList.add('a');
 category.classList.add('a');
 console.log('category');
 console.log('tv');

 const [idSeeMore, tvId] = location.hash.split('=');
 geTvId(tvId);
 validateTvOrMovie(idSeeMore);
}
function moviePage(){
 exp.classList.remove('a');
 categoryExt.classList.add('a');
 searchSelection.classList.add('a');
 navBar.classList.add('a');
 intro.classList.add('a');
 films.classList.add('a');
 tv.classList.add('a');
 category.classList.add('a');
 console.log('category');
 console.log('movie');

 const [idSeeMore, movieId] = location.hash.split('=');
 getMovieId(movieId);
 validateTvOrMovie(idSeeMore);
 
}
function categoryPage(){
 exp.classList.add('a');
 categoryExt.classList.remove('a');
 searchSelection.classList.add('a');
 navBar.classList.remove('a');
 intro.classList.add('a');
 films.classList.add('a');
 tv.classList.add('a');
 category.classList.add('a');
 console.log('category');

 const [_, categoryData] = location.hash.split('=');
 const [categoryId, categoryName] = categoryData.split('-');
 getMoviesByCategory(categoryId);
}
