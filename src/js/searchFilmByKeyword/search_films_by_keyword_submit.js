import { refs } from './../refs';
// import fetchFilms from './fetch_search_films';
import MoviesApiService from '../api/moviesApiServiceClass';
import Spinner from '../spinner';
import makingMarkup from '../api/render-card-markup';
import { insertFilmsMarkupToHome } from '../api/insertingIntoDifferentContainers';
import { createPagination } from '../pagination-query';
import timeoutForBadRequest from './timeoutForBadRequest';

// import { BASE_POSTER_URL } from '../api/render-card-markup';

const movieApiServise = new MoviesApiService();
const spinner = new Spinner();

refs.formSearch.addEventListener('submit', onSearchFilmByKeyword);

//* функція обробляє результат fetch та викликає на його основі рендеринг головної сторінки
function onSearchFilmByKeyword(e) {
  e.preventDefault();

  const searchFilms = e.currentTarget.elements.searchInput.value.trim();
  if (!searchFilms) {
    return console.log('Field cannot be empty');
  }

  movieApiServise.query = searchFilms;

  spinner.show();
  try {
    movieApiServise
      .fetchSearchingMovies()
      .then(({ results, total_results }) => {
        spinner.hide();

        if (results.length === 0) {
          timeoutForBadRequest();
          return;
        }

        refs.homeCardsContainer.innerHTML = '';
        const searchingMarkup = makingMarkup(results);
        insertFilmsMarkupToHome(searchingMarkup);
        createPagination(total_results, searchFilms);
        localStorage.setItem(`currentFilm`, JSON.stringify(results));
      });
  } catch (err) {
    err => console.log(err);
  }

  refs.inputSearch.value = '';
  refs.filmsSearchList.innerHTML = '';
  refs.filmsSearchList.classList.remove('search-form__list--bgc');
}
