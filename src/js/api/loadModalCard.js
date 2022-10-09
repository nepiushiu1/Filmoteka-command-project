import modalCard from '.././templates/modal_card.hbs';

import MoviesApiService from './moviesApiServiceClass';
//import createMarkup  from './render-modal-card';

import { refs } from '../refs';

//вешаем слушалетя
refs.homeCardsContainer.addEventListener('click', clickOnMovie);

const moviesApiService = new MoviesApiService();

function clickOnMovie(e) {
  if (e.target.nodeName !== 'IMG' && e.target.nodeName !== 'H2') {
    return;
  }
      const eventId = e.target.getAttribute('id');
      moviesApiService.fetchTrendingMovies(eventId).then(event => renderModalCard(event));
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
    localStorage.removeItem("key");
  }
    function modalCloseByEsc(e) {
    if (e.code === 'Escape') {
      modalClose();
    }
  }