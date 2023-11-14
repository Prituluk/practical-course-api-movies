async function getTrendingMoviesPreview() {
 
 const res = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=" + API_KEY);
 const data = await res.json();


 const movies = data.results;
 movies.forEach(movie => {

   // FRONT CARD
  const liMovies = document.querySelector("#films-li");
  const containerMovies = document.createElement('div');
  containerMovies.classList.add('container');

  const card = document.createElement('div');
  card.classList.add('card');

  const titleCard = document.createElement('span');
  titleCard.classList.add('title-card');
  titleCard.innerHTML = movie.title;

  const img = document.createElement('img');
  img.classList.add('card-img');
  img.setAttribute('alt', movie.title);
  img.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path,);

  card.appendChild(img);
  containerMovies.appendChild(card);
  containerMovies.appendChild(titleCard);
  liMovies.appendChild(containerMovies);

    // BACK CARD 
  // const expB = document.querySelector('.exp-backgraund');
  // const banner = document.createElement('div');
  // banner.classList.add('banner');

  // const bannerImg = document.createElement('img');
  // bannerImg.classList.add('banner-img');
  // bannerImg.setAttribute('alt', movie.title);
  // bannerImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path)

  // expB.appendChild(banner);
  // banner.appendChild(bannerImg);


 }); 
 console.log({data, movies});
}



async function getTrendingTvPreview() {
 const res = await fetch("https://api.themoviedb.org/3/trending/tv/day?api_key=" + API_KEY);
 const data = await res.json();
 const tvs = data.results;

 tvs.forEach(tv => {
  // FRONT CARD
  const liTv = document.querySelector("#tv-li");
  const containerTv = document.createElement('div');
  containerTv.classList.add('container');
  const cardTv = document.createElement('div');
  cardTv.classList.add('card');

  const tvImg = document.createElement('img');
  tvImg.classList.add('card-img');
  tvImg.setAttribute('alt', tv.name);
  tvImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + tv.poster_path);

  const titleCard = document.createElement('span');
  titleCard.classList.add('title-card');
  titleCard.innerHTML = tv.name;

  containerTv.appendChild(cardTv);
  cardTv.appendChild(tvImg);
  containerTv.appendChild(titleCard);
  liTv.appendChild(containerTv);

  // BACK CARD 

 


 });
 console.log({data, tvs});
}


async function getCategoryMovies() {
 const resCategory = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=" + API_KEY);
 const genreData = await resCategory.json();
 const genre = genreData.genres;

 genre.forEach(genres => {
  const categoryUl = document.querySelector('#category-list--ul');
  const categoryLi = document.createElement('li');
  
  const link = document.createElement('a');
  link.classList.add('category-list--link');
  link.setAttribute('id', 'id' + genres.id);
  link.innerHTML = genres.name;

  categoryUl.appendChild(categoryLi);
  categoryLi.appendChild(link);
 });
 console.log({genre});

}
