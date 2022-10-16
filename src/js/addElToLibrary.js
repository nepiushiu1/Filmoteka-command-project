// import { insertModalMarkupHome } from './insertingIntoDifferentContainers';
import {
  addWatchedLocalStorage,
  addQueueLocalStorage,
  deleteQueue,
  deleteWatched,
} from './local_storage';
import { textModalBtn } from './modal-btns';

export function addElToLibrary(idInput) {
  // if (
  //   e.target.nodeName !== 'IMG' &&
  //   e.target.nodeName !== 'DIV' &&
  //   e.target.nodeName !== 'B' &&
  //   e.target.nodeName !== 'H2' &&
  //   e.target.nodeName !== 'P'
  // ) {
  //   return;
  // }

  // document.body.classList.add('show-modal');
  // window.addEventListener('keydown', modalCloseByEsc);

  // const currentId = e.target.dataset.id;
  const currentId = idInput;

  const unParsedCurrentArrayFilmsW = localStorage.getItem('watched');
  const unParsedCurrentArrayFilmsQ = localStorage.getItem('queue');

  const parsedCurrentArrayFilmsW = JSON.parse(unParsedCurrentArrayFilmsW);
  const parsedCurrentArrayFilmsQ = JSON.parse(unParsedCurrentArrayFilmsQ);

  // console.log(parsedCurrentArrayFilms.find(obj => obj.id == currentId));
  // let libraryMovieWatched = parsedCurrentArrayFilmsW.find(
  //   obj => obj.id == currentId
  // );
  // let libraryMovieQueue = parsedCurrentArrayFilmsQ.find(
  //   obj => obj.id == currentId
  // );

  // const render = makingModalCardMarkup(
  //   libraryMovieWatched || libraryMovieQueue
  // );
  // insertModalMarkupHome(render);
  ///////////////////////////////////////////////////////////////////////////
  //** Код для запису об'єктів в LOCAL STORAGE */
  const watchedBtn = document.querySelector('#watched-btn');
  watchedBtn.addEventListener('click', () => {
    let arrayFilmsWatched = [];
    const w = localStorage.getItem('watched');
    if (w) {
      arrayFilmsWatched = JSON.parse(w);
    }

    // Перевірка на наявність об'єкта в масиві фільмів "WATCHED"
    const isAddedFilm = arrayFilmsWatched.find(arr => arr.id == currentId);
    isAddedFilm
      ? deleteWatched(libraryMovieWatched)
      : addWatchedLocalStorage(libraryMovieQueue, watchedBtn, style);
    textModalBtn(currentId);
  });

  const queueBtn = document.querySelector('#queue-btn');
  queueBtn.addEventListener('click', () => {
    let arrayFilmsQueue = [];
    const q = localStorage.getItem('queue');
    if (q) {
      arrayFilmsQueue = JSON.parse(q);
    }

    // Перевірка на наявність об'єкта в масиві фільмів "QUEUE"
    const isAddedFilm = arrayFilmsQueue.find(arr => arr.id == currentId);
    isAddedFilm
      ? deleteQueue(libraryMovieQueue)
      : addQueueLocalStorage(libraryMovieWatched, queueBtn, style);
    textModalBtn(currentId);
  });
  /////////////////////////////////////////////////////////////////////////////
  textModalBtn(currentId);
}
