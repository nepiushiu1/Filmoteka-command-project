import MoviesApiService from './moviesApiServiceClass';
import makingMarkup from './render-card-markup';
import { refs } from '../refs';

const moviesApiService = new MoviesApiService();

// GETTING GENRES TO LOCALSTORAGE
// DO NOT MOVE THIS FUNCTION!!!
moviesApiService
  .fetchGenres()
  .then(({ genres }) => {
    for (const { id, name } of genres) {
      //   console.log(id);
      //   console.log(name);
      localStorage.setItem(`genre_${id}`, name);
    }
  })
  .catch(error => console.log(error));

// RENDERING MARKUP USING GENRES FROM LOCALSTORAGE
moviesApiService
  .fetchTrendingMovies()
  .then(({ results }) => makingMarkup(results))
  .then(insertFilmsMarkup)
  .catch(error => console.log(error));

// FUNCTION FOR INSERTING MARKUP TO HOME-CARDS-CONTAINER
function insertFilmsMarkup(filmsMarkup) {
  refs.homeCardsContainer.insertAdjacentHTML('beforeend', filmsMarkup);
}
