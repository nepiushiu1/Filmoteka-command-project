
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
  
  // console.log('arrayFilmsWatched', arrayFilmsWatched);
  
  export function getWatchedFilms() {
      try {
          const saveFilms = localStorage.getItem('watched');
          const parsedFilms = JSON.parse(saveFilms);
          /** Замість console.log будемо рендерити фільми на сторінку */
          console.log(parsedFilms);
      } catch (error) {
          console.log(error);
      }
  }
  
  // Запускаємо функцію при клікові на кнопку Watched
//   getWatchedFilms();
  
  export function getQueueFilms () {
      try {
          const saveFilms = localStorage.getItem('queue');
          const parsedFilms = JSON.parse(saveFilms);
          /** Замість console.log будемо рендерити фільми на сторінку */
          console.log(parsedFilms);
      } catch (error) {
          console.log(error);
      }
  }
  
  // Запускаємо функцію при клікові на кнопку Queue
  // getQueueFilms()