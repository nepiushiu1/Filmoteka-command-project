import { refs } from './../refs';
import fetchFilms from './fetch_search_films';
import MoviesApiService from '../api/moviesApiServiceClass';
import makingMarkup from '../api/render-card-markup';
import { createPagination } from '../pagination';

import renderMarkupSearchFilms from './render_search_films';

refs.inputSearch.addEventListener('submit', onSearchFilmByKeyword);

//* функція обробляє результат fetch та викликає на його основі рендеринг головної сторінки
function onSearchFilmByKeyword(e) {
  e.preventDefault();

  const searchFilms = e.currentTarget.elements.searchInput.value.trim();

  try {
    fetchFilms(searchFilms).then(({ results, total_results }) => {
      refs.homeCardsContainer.innerHTML = '';
      makingMarkup(results);
      createPagination(total_results);
    });
  } catch (err) {
    err => console.log(err);
  }
}
