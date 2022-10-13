import { refs } from './../refs';
// import fetchFilms from './fetch_search_films';
import MoviesApiService from '../api/moviesApiServiceClass';
import Spinner from '../spinner';
import makingMarkup from '../api/render-card-markup';
import { insertFilmsMarkupToHome } from '../api/insertingIntoDifferentContainers';
import { createPagination } from '../pagination-query';
import timeoutForBadRequest from './timeoutForBadRequest';

const movieApiServise = new MoviesApiService();
const spinner = new Spinner();

refs.formSearch.addEventListener('submit', onSearchFilmByKeyword);

//* функція обробляє результат fetch та викликає на його основі рендеринг головної сторінки
function onSearchFilmByKeyword(e) {
  e.preventDefault();

  const searchFilms = e.currentTarget.elements.searchInput.value.trim();
  movieApiServise.query = searchFilms;

  refs.homeCardsContainer.innerHTML = '';
  spinner.show();
  try {
    movieApiServise
      .fetchSearchingMovies()
      .then(({ results, total_results }) => {
        if (results.length === 0) {
          timeoutForBadRequest();
          return;
        };

        const searchingMarkup = makingMarkup(results);

        spinner.hide();
        insertFilmsMarkupToHome(searchingMarkup);
        createPagination(total_results, searchFilms);
      });
  } catch (err) {
    err => console.log(err);
  };

  refs.inputSearch.value = '';
  refs.filmsSearchList.innerHTML = '';
  refs.filmsSearchList.classList.remove('search-form__list--bgc');
};
