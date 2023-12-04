async function getTrendingMoviesPreview() {
 
 const res = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=" + API_KEY);
 const data = await res.json();


 const movies = data.results;
 
 const liMovies = document.querySelector("#films-li");
 liMovies.innerHTML='';
 movies.forEach(movie => {

   // FRONT CARD
  
  const containerMovies = document.createElement('div');
  containerMovies.classList.add('containerMovie');
  
  containerMovies.addEventListener('click', () => {
    imgPlayTrailerMovies.classList.remove('a');
    buttonPlayTrailerMovies.classList.remove('a');
    imgPlayTrailerTv.classList.add('a');
    buttonPlayTrailerTv.classList.add('a');
    location.hash='#movie=' + movie.id;
    
  });
  

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


async function getMovieId(movieId){
  
  const resMovieId = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
  const rtaMovie = await resMovieId.json();
  const categoryMovie = rtaMovie.genres;



  expBackgraund.style.backgroundImage = `linear-gradient(rgba(5, 7, 12, 0.75), rgba(5, 7, 12, 0.75)), url('https://image.tmdb.org/t/p/original${rtaMovie.backdrop_path}')`;
  const banner = document.querySelector('.banner');
  const imgExt = document.querySelector('.banner-img');
  imgExt.setAttribute('alt', rtaMovie.title);
  imgExt.setAttribute('src', 'https://image.tmdb.org/t/p/w500' + rtaMovie.poster_path);
  const fav = document.querySelector('.favorite');

  const titleContain = document.querySelector('.exp-title');
  const titleExp = document.querySelector('.title-film-esp');
  const dateFilm = document.querySelector('#date-film');
  const [year, m, d ] = rtaMovie.release_date.split('-');
  dateFilm.innerHTML = ` (${year})`; 
  titleExp.innerHTML = rtaMovie.title;

  const expCategory = document.querySelector('.exp-category');
  const points = document.querySelector('#points');
  points.innerHTML = rtaMovie.vote_average.toFixed(1);

  
  
  categoryLi.innerHTML='';
  categoryMovie.forEach(category => {
    
    const categoryItem = document.createElement('a');
    categoryItem.classList.add('category-item');
    categoryItem.innerHTML = category.name;
    categoryLi.appendChild(categoryItem);
    
    console.log(movieId);
  })

  const Ts = document.querySelector('.t-s');
  Ts.innerHTML=rtaMovie.overview;



  exp.appendChild(expBackgraund);
  expBackgraund.appendChild(banner);
  banner.appendChild(imgExt);
  banner.appendChild(fav);
  expBackgraund.appendChild(titleContain);
  titleContain.appendChild(titleExp);
  titleExp.appendChild(dateFilm);
  titleContain.appendChild(expCategory);
  expCategory.appendChild(points);
  expCategory.appendChild(categoryUl);
  categoryUl.appendChild(categoryLi);


  
  console.log({rtaMovie,categoryMovie});
}

async function geTvId(tvId){
  
  const resTvId = await fetch(`https://api.themoviedb.org/3/tv/${tvId}?api_key=${API_KEY}`);
  const rtaTv = await resTvId.json();
  const categoryTv = rtaTv.genres;

  
  expBackgraund.style.backgroundImage = `linear-gradient(rgba(5, 7, 12, 0.75), rgba(5, 7, 12, 0.75)), url('https://image.tmdb.org/t/p/original${rtaTv.backdrop_path}')`;
  const banner = document.querySelector('.banner');
  const imgExt = document.querySelector('.banner-img');
  imgExt.setAttribute('alt', rtaTv.name);
  imgExt.setAttribute('src', 'https://image.tmdb.org/t/p/w500' + rtaTv.poster_path);
  const fav = document.querySelector('.favorite');

  const titleContain = document.querySelector('.exp-title');
  const titleExp = document.querySelector('.title-film-esp');
  const dateFilm = document.querySelector('#date-film');
  const [year, m, d ] = rtaTv.first_air_date.split('-');
  dateFilm.innerHTML = ` (${year})`; 
  titleExp.innerHTML = rtaTv.name;

  const expCategory = document.querySelector('.exp-category');
  const points = document.querySelector('#points');
  points.innerHTML = rtaTv.vote_average.toFixed(1);

  
  
  categoryLi.innerHTML='';
  categoryTv.forEach(category => {
    
    const categoryItem = document.createElement('a');
    categoryItem.classList.add('category-item');
    categoryItem.innerHTML = category.name;
    categoryLi.appendChild(categoryItem);
    
    console.log(category.name);
  })

  const Ts = document.querySelector('.t-s');
  Ts.innerHTML=rtaTv.overview;



  exp.appendChild(expBackgraund);
  expBackgraund.appendChild(banner);
  banner.appendChild(imgExt);
  banner.appendChild(fav);
  expBackgraund.appendChild(titleContain);
  titleContain.appendChild(titleExp);
  titleExp.appendChild(dateFilm);
  titleContain.appendChild(expCategory);
  expCategory.appendChild(points);
  expCategory.appendChild(categoryUl);
  categoryUl.appendChild(categoryLi);



  
  console.log({rtaTv, categoryTv});
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

  containerTv.addEventListener('click', () => {
    imgPlayTrailerMovies.classList.add('a');
    buttonPlayTrailerMovies.classList.add('a');
    imgPlayTrailerTv.classList.remove('a');
    buttonPlayTrailerTv.classList.remove ('a');
    location.hash='#tv=' + tv.id;
    
  });

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

async function getTrailerVideoMovie(movieId) {

  const resVideo = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`);
  const video = await resVideo.json();
  
  const videoResults = video.results;

  const officialTrailer = videoResults.find(video => video.name.includes("Official Trailer") || video.name.includes("Trailer") || video.type.includes("Trailer"));
  const secondTrailer = videoResults.find(video => video.official === true ); 

  if (officialTrailer) {
    const videoKey = officialTrailer.key;

    const srcVideo = document.querySelector('#ytplayer');
    srcVideo.setAttribute('src', `https://www.youtube.com/embed/${videoKey}`);

    const closeBtn = document.getElementById('closeVideoBtn');
    closeBtn.addEventListener('click', () => {
      srcVideo.setAttribute('src', '');
    });

    expCloseBtn.addEventListener('click', () => {
      srcVideo.setAttribute('src', '');
      trailerVideo.classList.add('a');
    });

    console.log({ video, videoResults, officialTrailer, videoKey });
  } else if (secondTrailer) {
    const secondVideoKey = secondTrailer.key;

    const srcVideo = document.querySelector('#ytplayer');
    srcVideo.setAttribute('src', `https://www.youtube.com/embed/${secondVideoKey}`);

    const closeBtn = document.getElementById('closeVideoBtn');
    closeBtn.addEventListener('click', () => {
      srcVideo.setAttribute('src', '');
    });

    expCloseBtn.addEventListener('click', () => {
      srcVideo.setAttribute('src', '');
      trailerVideo.classList.add('a');
    });
  } else {
    srcAlterVideo.classList.add('a');
    trailerVideo.classList.add('a');
    alert('Trailer no disponible');
    console.log('No se encontró un video con el nombre "Official Trailer".');
  }
  
  console.log(video);

}

async function getTrailerVideoTv(tvId) {

  const resVideo = await fetch(`https://api.themoviedb.org/3/tv/${tvId}/videos?api_key=${API_KEY}`);
  const video = await resVideo.json();
  
  const videoResults = video.results;

  const officialTrailer = videoResults.find(video => video.type === "Trailer");
  const alterTrailer = videoResults.find(video => video.type);

  if (officialTrailer) {
    const videoKey = officialTrailer.key;

    const srcVideo = document.querySelector('#ytplayer');
    srcVideo.setAttribute('src', `https://www.youtube.com/embed/${videoKey}`);

    const closeBtn = document.getElementById('closeVideoBtn');
    closeBtn.addEventListener('click', () => {
      srcVideo.setAttribute('src', '');
    });

    expCloseBtn.addEventListener('click', () => {
      srcVideo.setAttribute('src', '');
      trailerVideo.classList.add('a');
    });

    // console.log({ videoResults, officialTrailer, videoKey });
  }else if (alterTrailer) {
    const videoAlter = alterTrailer.key;

    // const srcAlterVideo = document.querySelector('#ytplayer');
    srcAlterVideo.setAttribute('src', `https://www.youtube.com/embed/${videoAlter}`);

    const closeBtn = document.getElementById('closeVideoBtn');
    closeBtn.addEventListener('click', () => {
      srcVideo.setAttribute('src', '');
    });

    expCloseBtn.addEventListener('click', () => {
      srcVideo.setAttribute('src', '');
      trailerVideo.classList.add('a');
    });
  
  } else {
    srcAlterVideo.classList.add('a');
    trailerVideo.classList.add('a');
    alert('Trailer no disponible');
    console.log('No se encontró un video con el nombre "Official Trailer".');
  }
  
  console.log({video});

}

function validateTvOrMovie(idSeeMore){
  if(idSeeMore === "#tv") {
    imgPlayTrailerMovies.classList.add('a');
    buttonPlayTrailerMovies.classList.add('a');
    imgPlayTrailerTv.classList.remove('a');
    buttonPlayTrailerTv.classList.remove ('a');
    
  } else if (idSeeMore === "#movie") {
    imgPlayTrailerMovies.classList.remove('a');
    buttonPlayTrailerMovies.classList.remove('a');
    imgPlayTrailerTv.classList.add('a');
    buttonPlayTrailerTv.classList.add('a');
   
  }else {
    console.warn("error");
  }
}

playTrailerMovies.addEventListener('click', () => {
  const [_, movieId] = location.hash.split('=');
  getTrailerVideoMovie(movieId);
  trailerVideo.classList.remove('a');
  srcAlterVideo.classList.remove('a');
 });

playTrailerTv.addEventListener('click', () => {
  const [l, tvId] = location.hash.split('=');
  getTrailerVideoTv(tvId);
  trailerVideo.classList.remove('a');
  srcAlterVideo.classList.remove('a');

 });

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

  const containerCategory = document.querySelector('.container-category--card');
  genre.forEach(genres => {

    const containerMovies = document.createElement('div');
    containerMovies.classList.add('container');
  
    containerMovies.addEventListener('click', () => {
        location.hash='#movie=' + genres.id;
      
    });
    
    // const categoryCard = document.createElement('div');
    // categoryCard.classList.add('container');
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
    
    containerCategory.appendChild(containerMovies);
    containerMovies.appendChild(cardCategory);
    cardCategory.appendChild(cardImg);
    containerMovies.appendChild(titleCard);


    
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


    const containerMovies = document.createElement('div');
    containerMovies.classList.add('container');
  
    containerMovies.addEventListener('click', () => {
     
     
        location.hash='#movie=' + genres.id;
      
    
  
  });

    
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
    containerCategory.appendChild(containerMovies);
    containerMovies.appendChild(cardCategory);
    cardCategory.appendChild(cardImg);
    containerMovies.appendChild(titleCard);
  
  
    
  });
  console.log({genreData, genre});
  }