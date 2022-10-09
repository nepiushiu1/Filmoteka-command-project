import MoviesApiService from './moviesApiServiceClass';
import makingMarkup from './render-card-markup';
// import { refs } from '../refs';
import { createPagination } from '../pagination';

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
  .then(({ results, total_results }) => {
    // for (const result of results) {
    //   if (localStorage.getItem(`film_${result.id}`)) {
    //     localStorage.removeItem(`film_${result.id}`);
    //   }
    // }

    makingMarkup(results);

    createPagination(total_results);
    localStorage.setItem(`currentFilm`, JSON.stringify(results));

    // for (const result of results) {
    //   // console.log(result);
    //   localStorage.setItem(`film_${result.id}`, JSON.stringify(result));
    // }
  })
  .catch(error => console.log(error));

// // FUNCTION FOR INSERTING MARKUP TO HOME-CARDS-CONTAINER
// export function insertFilmsMarkup(filmsMarkup) {
//   refs.homeCardsContainer.insertAdjacentHTML('beforeend', filmsMarkup);
// }
