import { refs } from '../refs';
// FUNCTION FOR INSERTING MARKUP TO HOME-CARDS-CONTAINER
// function insertFilmsMarkupToHome(filmsMarkup) {
//   refs.homeCardsContainer.insertAdjacentHTML('beforeend', filmsMarkup);
// }

export const insertFilmsMarkupToHome = filmsMarkup =>
  refs.homeCardsContainer.insertAdjacentHTML('beforeend', filmsMarkup);
// FUNCTION FOR INSERTING MARKUP TO LIBRARY-CARDS-CONTAINER
// function insertFilmsMarkupToLibrary(filmsMarkup) {
//   refs.libraryCardsContainer.insertAdjacentHTML('beforeend', filmsMarkup);
// }

export const insertFilmsMarkupToLibrary = filmsMarkup =>
  refs.libraryCardsContainer.insertAdjacentHTML('beforeend', filmsMarkup);
