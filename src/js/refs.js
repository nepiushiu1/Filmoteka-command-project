export const refs = {
  // containers
  homeCardsContainer: document.querySelector('.cards__list--home'),
  libraryCardsContainer: document.querySelector('.cards__list--library'),

  // buttons
  btnWatched: document.querySelector('.watched'),
  btnQueue: document.querySelector('.queue'),

  btnAddToWatched: document.querySelector('.modal_watched'),
  btnAddToQueue: document.querySelector('.modal_queue'),

  // search
  DEBOUNCE_DELAY: 300,
  inputSearch: document.querySelector('.search-form'),
  filmsSearchList: document.querySelector('.search-form__list'),

  //modal-card
  modalCardContainer: document.querySelector('.modal_card'),
};
