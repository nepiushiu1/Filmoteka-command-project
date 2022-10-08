// import './pagination';

import MoviesApiService from './js/fetch-trending-movies.js';
import makingMarkup from './js/render-card-markup.js';

const moviesApiService = new MoviesApiService();
const container = document.querySelector('.container');

moviesApiService
  .fetchTrendingMovies()
  .then(insertImgMarkup)
  .catch(error => console.log(error));

moviesApiService
  .fetchGenres()
  .then(console.log('ok'))
  .catch(error => console.log(error));

function insertImgMarkup(films) {
  container.insertAdjacentHTML('beforeend', makingMarkup(films));
}
