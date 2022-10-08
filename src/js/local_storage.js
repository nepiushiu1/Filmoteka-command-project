// import { refs } from './refs';
import makingMarkup from "./api/render-card-markup";
// import { insertFilmsMarkup } from './api/main-home-file';

// Створено для перевірки роботи ф-ції getWatchedFilms
const header = document.querySelector('.page-header');
function insertFilmsLibrary(filmsMarkup) {
    header.insertAdjacentHTML('afterend', filmsMarkup);
  }
 ///////////////////////////////////////////////////////////////////////////////////////// 


  // MAIN CODE FOR PROJECT
  let arrayFilmsWatched = [];
  let arrayFilmsQueue = [];
  
  export function addWatchedLocalStorage (obj) {
      
      arrayFilmsWatched.push(...obj);
  
      localStorage.setItem('watched', JSON.stringify(arrayFilmsWatched));
  
      console.log('arrayFilmsWatched', arrayFilmsWatched);
      return arrayFilmsWatched;
  }
  
  export function addQueueLocalStorage (obj) {
      
      arrayFilmsQueue.push(...obj);
  
      localStorage.setItem('queue', JSON.stringify(arrayFilmsQueue));
  
      console.log('arrayFilmsQueue', arrayFilmsQueue);
      return arrayFilmsQueue;
  }
  
  export function getWatchedFilms() {
      try {
          const saveFilms = localStorage.getItem('watched');
          const parsedFilms = JSON.parse(saveFilms);

          const renderWatched = makingMarkup(parsedFilms);
          insertFilmsLibrary(renderWatched);
      } catch (error) {
          console.log(error);
      }
  }
  
  export function getQueueFilms () {
      try {
          const saveFilms = localStorage.getItem('queue');
          const parsedFilms = JSON.parse(saveFilms);

          const renderQueue = makingMarkup(parsedFilms);
          insertFilmsLibrary(renderQueue);
      } catch (error) {
          console.log(error);
      }
  }
  