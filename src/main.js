async function getTrendingMoviesPreview() {
 const res = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=" + API_KEY);
 const data = await res.json();


 const movies = data.results;
 movies.forEach(movie => {
  const li = document.querySelector("#li");
  const container = document.createElement('div');
  container.classList.add('container');

  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.classList.add('card-img');
  img.setAttribute('alt', movie.title);
  img.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path,);

  card.appendChild(img);
  container.appendChild(card);
  li.appendChild(container);
 });
 console.log({data, movies});
}

getTrendingMoviesPreview();