import MoviesApiService from './moviesApiServiceClass';
import Spinner from '../spinner';
import makingMarkup from './render-card-markup';
import { insertFilmsMarkupToHome } from './insertingIntoDifferentContainers';
import { refs } from '../refs';
import { createPagination } from '../pagination';
import { BASE_POSTER_URL } from './render-card-markup';
// import { makingSwiper } from './render-slide-markup';
// import { swiper } from '../swiper';

const moviesApiService = new MoviesApiService();
const spinner = new Spinner();

// GETTING GENRES TO LOCALSTORAGE
// DO NOT MOVE THIS FUNCTION!!!
moviesApiService
  .fetchGenres()
  .then(({ genres }) => {
    for (const { id, name } of genres) {
      localStorage.setItem(`genre_${id}`, name);
    }
  })
  .catch(error => console.log(error));

// RENDERING MARKUP USING GENRES FROM LOCALSTORAGE
spinner.show();
moviesApiService
  .fetchTrendingMovies()
  .then(({ results, total_results }) => {
    const markup = makingMarkup(results);

    spinner.hide();
    insertFilmsMarkupToHome(markup);
    createPagination(total_results);
    localStorage.setItem(`currentFilm`, JSON.stringify(results));
  })
  .catch(error => console.log(error));
