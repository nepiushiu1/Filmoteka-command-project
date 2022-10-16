import { refs } from './refs';
import makingMarkup from './api/render-card-markup';
import { insertFilmsMarkupToLibrary } from './api/insertingIntoDifferentContainers';
import { createLibraryPagination, container } from './pagination-library';
import { currentLibrary } from './library-header-btns';

//ДОДАТИ ДО КЛЮЧА "WATCHED" В LOCAL STORAGE
// Передано змінну style
export function addWatchedLocalStorage(obj, btn, style) {
  let arrayFilmsWatched = [];
  const w = localStorage.getItem('watched');
  if (w) {
    arrayFilmsWatched = JSON.parse(w);
  }

  // Перевірка на наявність об'єкта в масиві фільмів "WATCHED"
  const isAddedFilm = arrayFilmsWatched.find(arr => arr.id === obj.id);
  if (isAddedFilm) {
    deleteWatched(obj, style);
    return;
  }

  arrayFilmsWatched.push(obj);
  localStorage.setItem('watched', JSON.stringify(arrayFilmsWatched));
  if (btn.textContent === 'ADD TO WATCHED') {
    btn.textContent = 'REMOVE FROM WATCHED';
  }
  return arrayFilmsWatched;
}

//ДОДАТИ ДО КЛЮЧА "QUEUE" В LOCAL STORAGE
export function addQueueLocalStorage(obj, btn, style) {
  let arrayFilmsQueue = [];
  const q = localStorage.getItem('queue');
  if (q) {
    arrayFilmsQueue = JSON.parse(q);
  }

  // Перевірка на наявність об'єкта в масиві фільмів "QUEUE"
  const isAddedFilm = arrayFilmsQueue.find(arr => arr.id === obj.id);
  if (isAddedFilm) {
    deleteQueue(btn, style);
    return;
  }

  arrayFilmsQueue.push(obj);
  localStorage.setItem('queue', JSON.stringify(arrayFilmsQueue));
  if (btn.textContent === 'ADD TO QUEUE') {
    btn.textContent = 'REMOVE FROM QUEUE';
  }
  return arrayFilmsQueue;
}

export function getWatchedFilms() {
  clearLibrary();
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

    // const renderWatched = makingMarkup(parsedFilms);
    // insertFilmsMarkupToLibrary(renderWatched);
    createLibraryPagination(`${currentLibrary}`);
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

    // const renderQueue = makingMarkup(parsedFilms);
    // insertFilmsMarkupToLibrary(renderQueue);
    createLibraryPagination(`${currentLibrary}`);
  } catch (error) {
    console.log(error);
  }
}

// Функція для видалення фільмів з масиву WATCHED
export function deleteWatched(element, style) {
  console.log('style', style);
  const arrayFromLocStorage = JSON.parse(localStorage.getItem('watched'));
  const index = arrayFromLocStorage.findIndex(arr => arr.id === element.id);
  arrayFromLocStorage.splice(index, 1);

  localStorage.setItem('watched', JSON.stringify(arrayFromLocStorage));
  // Додано умову застосування функції getWatchedFilms()
  if (style) {
    console.log('Видалення з головної сторінки');
    return;
  } else {
    // getWatchedFilms();
    createLibraryPagination(`${currentLibrary}`);
    console.log('Видалення з бібліотеки!!!!!!!!!!!!');
  }
}

// Функція для видалення фільмів з масиву QUEUE
export function deleteQueue(element, style) {
  console.log('style', style);
  const arrayFromLocStorage = JSON.parse(localStorage.getItem('queue'));

  // try {
    const index = arrayFromLocStorage.findIndex(arr => arr.id === element.id);
    arrayFromLocStorage.splice(index, 1);
  // } catch (error) {
    
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // console.log(index);
    // addElToLibrary(index);
    // console.log('Данных еще нет');
  // }

  localStorage.setItem('queue', JSON.stringify(arrayFromLocStorage));
  // Додано умову застосування функції getWatchedFilms()
  if (style) {
    console.log('Видалення з головної сторінки');
    return;
  } else {
    createLibraryPagination(`${currentLibrary}`);
    // getQueueFilms();
    console.log('Видалення з бібліотеки!!!!!!!!!!!!');
  }
}

//   Фунуція для очищення попередніх результатів рендеру
export function clearLibrary() {
  try {
    refs.libraryCardsContainer.innerHTML = '';
  } catch {
    // console.log('Данных еще нет');
  }
}

// Функція для відмальовки "заглушки" (якщо localStorage порожній)
export function addScreenSaver() {
  try {
    refs.libraryCardsContainer.innerHTML = `<strong 
      style="
      font-size: 18px;
      color: var(--secondary-text-cl);">
      ${translateNoInformation()}
      </strong>`;
    container.innerHTML = '';
    function translateNoInformation() {
      const lang = localStorage.getItem('lang');
      if (!lang || lang === 'en-US') {
        return 'Sorry, no information has been added';
      }
      if (lang === 'uk-UA') {
        return 'Вибачте, ще жодної інформації не додано';
      }
    }
  } catch {
    // console.log('Данных еще нет');
  }
}
