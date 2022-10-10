import { refs } from './refs';
import makingMarkup from './api/render-card-markup';
import { insertFilmsMarkupToLibrary } from './api/insertingIntoDifferentContainers';
// import { insertFilmsMarkup } from './api/main-home-file';

//
// function insertFilmsLibrary(filmsMarkup) {
//   refs.libraryCardsContainer.insertAdjacentHTML('beforeend', filmsMarkup);
// }

// ТЕПЕР insertFilmsMarkupToLibrary(вже імпортовано у цей файл) - ЦЕ ФУНКЦІЯ,
// ЯКА ВІДПОВІДАЄ ЗА ВСТАВКУ РОЗМІТКИ У КОНТЕЙНЕР БІБЛІОТЕКИ.
// У ЦЮ ФУНКЦІЮ ПЕРЕДАЄТЬСЯ РЕЗУЛЬТАТ ВИКОНАННЯ ФУНКЦІЇ makingMarkup

let arrayFilmsWatched = [];
let arrayFilmsQueue = [];

export function addWatchedLocalStorage(obj) {
  arrayFilmsWatched.push(...obj);

  localStorage.setItem('watched', JSON.stringify(arrayFilmsWatched));

  console.log('arrayFilmsWatched', arrayFilmsWatched);
  return arrayFilmsWatched;
}

export function addQueueLocalStorage(obj) {
  arrayFilmsQueue.push(...obj);

  localStorage.setItem('queue', JSON.stringify(arrayFilmsQueue));

  console.log('arrayFilmsQueue', arrayFilmsQueue);
  return arrayFilmsQueue;
}

export function getWatchedFilms() {
  try {
    const saveFilms = localStorage.getItem('watched');
    const parsedFilms = JSON.parse(saveFilms);
    //      ЗМІНИ ТУТ. БУЛО:
    // const renderWatched = makingMarkup(parsedFilms);
    // insertFilmsLibrary(renderWatched);
    //      СТАЛО
    const renderWatched = makingMarkup(parsedFilms);
    insertFilmsMarkupToLibrary(renderWatched);
  } catch (error) {
    console.log(error);
  }
}

export function getQueueFilms() {
  try {
    const saveFilms = localStorage.getItem('queue');
    const parsedFilms = JSON.parse(saveFilms);
    //      ЗМІНИ ТУТ. БУЛО:
    // const renderQueue = makingMarkup(parsedFilms);
    // insertFilmsLibrary(renderQueue);
    //      СТАЛО
    const renderQueue = makingMarkup(parsedFilms);
    insertFilmsMarkupToLibrary(renderQueue);
  } catch (error) {
    console.log(error);
  }
}
