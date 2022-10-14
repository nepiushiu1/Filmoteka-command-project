export const refs = {
  // containers
  homeCardsContainer: document.querySelector('.cards__list--home'),
  libraryCardsContainer: document.querySelector('.cards__list--library'),

  swiperContainer: document.querySelector('.swiper-wrapper'),

  // buttons
  btnWatched: document.querySelector('#watched'),
  btnQueue: document.querySelector('#queue'),

  btnAddToWatched: document.querySelector('.modal_watched'),
  btnAddToQueue: document.querySelector('.modal_queue'),

  closeModalBtn: document.querySelector('.modal-close-button'),

  // search
  DEBOUNCE_DELAY: 300,
  formSearch: document.querySelector('.search-form'),
  filmsSearchList: document.querySelector('.search-form__list'),

  //modal-card
  modalCardBackdrop: document.querySelector('.modal-card-backdrop'),
  modalCardContainer: document.querySelector('.movie__container'),

  inputSearch: document.querySelector('.search-form__input'),

  //spinner
  spinner: document.querySelector('.lds-spinner'),

  //advertising
  advertising: document.querySelector('.advertising'),
};
