import { refs } from './refs';
import makingMarkup from './api/render-card-markup';
import {
  insertFilmsMarkupToHome,
  insertFilmsMarkupToLibrary,
} from './api/insertingIntoDifferentContainers';

const arrayFilmsQueue = [];

export function addWatchedLocalStorage(obj) {
  let arrayFilmsWatched = [];
  const w = localStorage.getItem('watched');
  if (w) {
    arrayFilmsWatched = JSON.parse(w);
  }

  arrayFilmsWatched.push(obj);
  localStorage.setItem('watched', JSON.stringify(arrayFilmsWatched));
  return arrayFilmsWatched;
}

export function addQueueLocalStorage(obj) {
  arrayFilmsQueue.push(obj);

  localStorage.setItem('queue', JSON.stringify(arrayFilmsQueue));
  return arrayFilmsQueue;
}

export function getWatchedFilms() {
  // clearLibrary();
  try {
    const saveFilms = localStorage.getItem('watched');
    //Якщо в localStorage немає ключа watched - показуємо заглушку
    if (saveFilms === null) {
      addScreenSaver();
      return;
    }

    const parsedFilms = JSON.parse(saveFilms);
    if (parsedFilms.length === 0) {
      addScreenSaver();
      return;
    }

    const renderWatched = makingMarkup(parsedFilms);
    insertFilmsMarkupToHome(renderWatched);
  } catch (error) {
    console.log(error);
  }
}

export function getQueueFilms() {
  clearLibrary();
  try {
    const saveFilms = localStorage.getItem('queue');
    //Якщо в localStorage немає ключа queue - показуємо заглушку
    if (saveFilms === null) {
      addScreenSaver();
      return;
    }

    const parsedFilms = JSON.parse(saveFilms);
    // Перевірка на порожній масив в localStorage
    if (parsedFilms.length === 0) {
      addScreenSaver();
      return;
    }

    const renderQueue = makingMarkup(parsedFilms);
    insertFilmsMarkupToHome(renderQueue);
  } catch (error) {
    console.log(error);
  }
}

//   Фунуція для очищення попередніх результатів рендеру
function clearLibrary() {
  refs.homeCardsContainer.innerHTML = '';
}

// Функція для відмальовки "заглушки" (якщо localStorage порожній)
function addScreenSaver() {
  refs.homeCardsContainer.innerHTML = `<strong 
    style="
    font-size: 18px;
    color: var(--secondary-text-cl);">
    Sorry, no information has been added
    </strong>`;
}
