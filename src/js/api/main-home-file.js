import MoviesApiService from './moviesApiServiceClass';
import makingMarkup from './render-card-markup';
import { insertFilmsMarkupToHome } from './insertingIntoDifferentContainers';
import { refs } from '../refs';
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
    const markup = makingMarkup(results);
    insertFilmsMarkupToHome(markup);
    createPagination(total_results);
    localStorage.setItem(`currentFilm`, JSON.stringify(results));
  })
  .catch(error => console.log(error));
