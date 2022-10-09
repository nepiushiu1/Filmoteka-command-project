import { refs } from './../refs';
import fetchFilms from './fetch_search_films';
import renderMarkupSearchFilms from './render_search_films';

// refs.inputSearch.addEventListener('submit', onSearchFilmByKeyword);

//* функція обробляє результат fetch та викликає на його основі рендеринг головної сторінки
function onSearchFilmByKeyword(e) {
  e.preventDefault();

  const { elements: { searchInput }} = e.target;
  const searchFilms = searchInput.value.trim();

  if(!searchFilms) {
    refs.filmsSearchList.innerHTML = '';
    return;
  };

  //! треба вставити коректний функцію розмітки замість renderMarkupSearchFilms
  //! і потім розкомітити слухача на сабміт
  try {
    fetchFilms(searchFilms).then(films => {
      renderMarkupSearchFilms(films)
      });
  } catch (err) {
    err => console.log(err);
  }
}; 