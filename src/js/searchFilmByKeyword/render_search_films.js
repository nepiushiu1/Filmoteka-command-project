import { refs } from './../refs';

//* функція рендерить розмітку випадаючого меню
export default function renderMarkupSearchFilms(films) {
  refs.filmsSearchList.innerHTML = '';
  refs.filmsSearchList.classList.remove('search-form__list--bgc');

  //* якщо запит не коректний
  if(films.results.length === 0) {
    const markup = '<p class="search-form--badrequest">Search result not successful. Enter the correct movie name!</p>';
    refs.filmsSearchList.innerHTML = markup;
    return;
  }; 

    //*рендер фільмів у випадаючому списку
    const markup = films.results.slice(0,5).map(( { title, vote_average} ) => {
      return `<li class="search-form__item">${title} - ${vote_average}</li>`;
    }).join('');
    refs.filmsSearchList.classList.add('search-form__list--bgc');
  

  refs.filmsSearchList.insertAdjacentHTML("beforeend", markup);
};

