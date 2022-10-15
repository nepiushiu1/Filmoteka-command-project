import { gettingGenresListForModal } from './gettingGenresList';
import makingMarkup from '../api/render-card-markup';
// import MoviesApiService from './moviesApiServiceClass';
import { refs } from '../refs';
import { insertModalMarkupHome } from './insertingIntoDifferentContainers';
import {
  addWatchedLocalStorage,
  addQueueLocalStorage,
  deleteQueue,
  deleteWatched,
} from '../local_storage';
import { textModalBtn } from '../modal-btns';
import { BASE_POSTER_URL } from '../api/constants/baseUrls';
import { setReleaseVote } from '../api/setReleaseDate';
// const moviesApiService = new MoviesApiService();

refs.libraryCardsContainer.addEventListener('click', clickOnMovie);
refs.closeModalBtn.addEventListener('click', onCloseModalBtnClick);
refs.modalCardBackdrop.addEventListener('click', onModalCardBackdropClick);

function clickOnMovie(e) {
  if (
    e.target.nodeName !== 'IMG' &&
    e.target.nodeName !== 'DIV' &&
    e.target.nodeName !== 'B' &&
    e.target.nodeName !== 'H2' &&
    e.target.nodeName !== 'P'
  ) {
    return;
  }

  document.body.classList.add('show-modal');
  window.addEventListener('keydown', modalCloseByEsc);

  const currentId = e.target.dataset.id;

  const unParsedCurrentArrayFilmsW = localStorage.getItem('watched');
  const unParsedCurrentArrayFilmsQ = localStorage.getItem('queue');

  const parsedCurrentArrayFilmsW = JSON.parse(unParsedCurrentArrayFilmsW);
  const parsedCurrentArrayFilmsQ = JSON.parse(unParsedCurrentArrayFilmsQ);

  // console.log(parsedCurrentArrayFilms.find(obj => obj.id == currentId));
  let libraryMovieWatched = parsedCurrentArrayFilmsW.find(obj => obj.id == currentId);
  let libraryMovieQueue = parsedCurrentArrayFilmsQ.find(obj => obj.id == currentId);

  const render = makingModalCardMarkup(libraryMovieWatched || libraryMovieQueue);
  insertModalMarkupHome(render);
  ///////////////////////////////////////////////////////////////////////////
  //** Код для запису об'єктів в LOCAL STORAGE */
  document.querySelector('#watched-btn').addEventListener('click', () => {
    let arrayFilmsWatched = [];
    const w = localStorage.getItem('watched');
    if (w) {
      arrayFilmsWatched = JSON.parse(w);
    }

    // Перевірка на наявність об'єкта в масиві фільмів "WATCHED"
    const isAddedFilm = arrayFilmsWatched.find(arr => arr.id == currentId);
    isAddedFilm
      ? deleteWatched(libraryMovieWatched)
      : addWatchedLocalStorage(libraryMovieQueue);
    textModalBtn(currentId);
  });

  document.querySelector('#queue-btn').addEventListener('click', () => {
    let arrayFilmsQueue = [];
    const q = localStorage.getItem('queue');
    if (q) {
      arrayFilmsQueue = JSON.parse(q);
    }

    // Перевірка на наявність об'єкта в масиві фільмів "QUEUE"
    const isAddedFilm = arrayFilmsQueue.find(arr => arr.id == currentId);
    isAddedFilm
      ? deleteQueue(libraryMovieQueue)
      : addQueueLocalStorage(libraryMovieWatched);
    textModalBtn(currentId);
  });
  /////////////////////////////////////////////////////////////////////////////
  textModalBtn(currentId);
}

function onCloseModalBtnClick() {
  window.removeEventListener('keydown', modalCloseByEsc);
  document.body.classList.remove('show-modal');
  refs.modalCardContainer.innerHTML = '';
}

function modalCloseByEsc(e) {
  if (e.code === 'Escape') {
    onCloseModalBtnClick();
  }
}

function onModalCardBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModalBtnClick();
  }
}

function makingModalCardMarkup(obj) {
  let imagePath = ``;
  !obj.poster_path
    ? (imagePath = `https://raw.githubusercontent.com/marvall/filmoteka/main/src/images/no-poster.png`)
    : (imagePath = `${BASE_POSTER_URL}/${obj.poster_path}`);
  const markup = `<div class="movie__container--left-side">              
                  <img class="movie__image" src="${imagePath}"
                    alt="${obj.title || obj.name}" />
                    <button type="button" class="movie__btn-trailer">
                        <svg width='120' height='80' class='youtube-icon' viewBox='0 -77 512.00213 512'>
                            <path
                                d='m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0'
                                fill='#f00'></path>
                            <path d='m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0' fill='#fff'></path>
                        </svg>
                    </button>                
            </div>
            <div class="movie__container--rigth-side">
                <h2 class="movie__title">${obj.title || obj.name}</h2>
                <table class="movie__info">
                    <tbody>
                        <tr class="movie__info-rows">
                            <td class="movie__info-name" data-key="votes">Vote / Votes</td>
                            <td class="movie__info-rating">
                                <span class="movie__info-rating-value movie__info-rating--accent">${setReleaseVote(
                                  obj.vote_average
                                )}</span>
                                <span class="movie__info-rating-slash">/</span>
                                <span class="movie__info-rating-value">${setReleaseVote(
                                  obj.vote_count
                                )}</span>
                            </td>
                        </tr>
                        <tr class="movie__info-rows">
                            <td class="movie__info-name" data-key="popularity">Popularity</td>
                            <td class="movie__info-numbers">${
                              obj.popularity
                            }</td>
                        </tr>
                        <tr class="movie__info-rows">
                            <td class="movie__info-name" data-key="originalTitle">Original Title</td>
                            <td class="movie__info-value">${
                              obj.original_title || obj.original_name
                            }</td>
                        </tr>
                        <tr class="movie__info-rows movie__info-rows--last">
                            <td class="movie__info-name" data-key="genre">Genre</td>
                            <td class="movie__info-value">${
                              gettingGenresListForModal(obj.genre_ids) ||
                              'Genre not defined'
                            }</td>
                        </tr>
                    </tbody>
                </table>
                <h2 class="movie__about-title" data-key="about">About</h2>
                <p class="movie__about-text">
                    ${obj.overview || 'No text'}
                </p>
                <div class="movie__btn-container">
                   
                    <button type="submit" id="watched-btn" data-id="${
                      obj.id
                    }" class="movie__btn btn btn--accent">ADD TO WATCHED
                        </button>
                    <button type="submit" id="queue-btn" data-id="${
                      obj.id
                    }" class="movie__btn btn btn-queue">ADD TO QUEUE
                        </button>
                </div>
            </div>
        </div>`;
  return markup;
}

export { makingModalCardMarkup };
