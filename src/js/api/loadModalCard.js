import modalCard from '../../templates/modal_card.hbs';

import MoviesApiService from './moviesApiServiceClass';
//import createMarkup  from './render-modal-card';

import { refs } from '../refs';

//вешаем слушалетя
refs.homeCardsContainer.addEventListener('click', clickOnMovie);

const moviesApiService = new MoviesApiService();

function clickOnMovie(e) {
  if (e.target.nodeName !== 'IMG' && e.target.nodeName !== 'B') {
    return;
  }

  // console.log(e.target);
  const currentId = e.target.dataset.id;
  // console.log(currentId);
  const unParsedCurrentArrayFilms = localStorage.getItem('currentFilm');
  const parsedCurrentArrayFilms = JSON.parse(unParsedCurrentArrayFilms);
  // console.log(parsedCurrentArrayFilms);
  console.log(parsedCurrentArrayFilms.find(obj => obj.id == currentId));

  // return modalCard(parsedCurrentArrayFilms.find(obj => obj.id == currentId));

  // currentArrayFilms.find();
  // const eventId = e.target.getAttribute('id');
  // console.log(eventId);
  // moviesApiService
  //   .fetchTrendingMovies(eventId)
  //   .then(event => renderModalCard(event));
}

function renderModalCard(arr) {
  const markup = modalCard(arr);
  refs.modalContainer.insertAdjacentHTML('beforeend', markup);

  // слушатели на фук-цию закрытия модалки
  refs.modalBox.addEventListener('click', modalCloseByEsc);
  refs.closeButton.addEventListener('click', modalClose);
  window.addEventListener('keydown', modalCloseByEsc);
}

// Функции закрытия модального окна
function modalClose() {
  modalBox.classList.remove('is-open');
  document.body.style.overflow = '';
  window.removeEventListener('keydown', modalCloseByEsc);
  localStorage.removeItem('key');
}

function modalCloseByEsc(e) {
  if (e.code === 'Escape') {
    modalClose();
  }
}
