async function getTrendingMoviesPreview() {
 
 const res = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=" + API_KEY);
 const data = await res.json();


 const movies = data.results;
 
 const liMovies = document.querySelector("#films-li");
 liMovies.innerHTML='';
 movies.forEach(movie => {

   // FRONT CARD
  
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

 const liTv = document.querySelector("#tv-li");
 liTv.innerHTML='';
 tvs.forEach(tv => {
  // FRONT CARD
  
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
 const categoryUl = document.querySelector('#category-list--ul');
 categoryUl.innerHTML='';
 genre.forEach(genres => {
  
  const categoryLi = document.createElement('li');
  
  const link = document.createElement('a');
  link.classList.add('category-list--link');
  link.setAttribute('id', 'id' + genres.id);
  link.addEventListener('click',  () => {
    location.hash = `#category=${genres.id}-${genres.name}`;
    categorySelectionTitle.innerHTML = genres.name;
  })
  link.innerHTML = genres.name;

  categoryUl.appendChild(categoryLi);
  categoryLi.appendChild(link);
 });
 console.log({genre});

}

async function getMoviesByCategory(id) {

  const resCategory = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&api_key=${API_KEY}`);
  const genreData = await resCategory.json();
  const genre = genreData.results;

  genre.forEach(genres => {
    
    const containerCategory = document.querySelector('.container-category--card');
    const categoryCard = document.createElement('div');
    categoryCard.classList.add('container');
    const titleCard = document.createElement('span');
    titleCard.classList.add('title-card');
    titleCard.innerHTML= genres.title;
    const cardCategory = document.createElement('div');
    cardCategory.classList.add('card');
    const cardImg = document.createElement('img');
    cardImg.classList.add('card-img');
    cardImg.setAttribute('alt', genres.title);
    cardImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + genres.poster_path);
    
    
    categoryExt.appendChild(cardCategory);
    
    containerCategory.appendChild(categoryCard);
    categoryCard.appendChild(cardCategory);
    cardCategory.appendChild(cardImg);
    categoryCard.appendChild(titleCard);


    
  });
  console.log({genreData, genre});
  
}


async function getMoviesBySearch(query) {
  const resQuery = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`);
  
  const genreData = await resQuery.json();
  const genre = genreData.results;
  const containerCategory = document.querySelector('.container-category--card');
  containerCategory.innerHTML="";
  genre.forEach(genres => {

    // const containerCategory = document.querySelector('.container-category--card');
    const categoryCard = document.createElement('div');
    categoryCard.classList.add('container');
    
    const cardCategory = document.createElement('div');
    cardCategory.classList.add('card');

    const cardImg = document.createElement('img');
    cardImg.classList.add('card-img');
    cardImg.setAttribute('alt', genres.title);
    cardImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + genres.poster_path);

    const titleCard = document.createElement('span');
    titleCard.classList.add('title-card');
    titleCard.innerHTML= genres.title;

    // searchSelection.appendChild(searchSelection);
    searchSelection.appendChild(containerCategory);
    containerCategory.appendChild(categoryCard);
    categoryCard.appendChild(cardCategory);
    cardCategory.appendChild(cardImg);
    categoryCard.appendChild(titleCard);
  
  
    
  });
  console.log({genreData, genre});
  }