import { gettingGenresListForModal } from './gettingGenresList';
import makingMarkup from '../api/render-card-markup';
// import MoviesApiService from './moviesApiServiceClass';
import { refs } from '../refs';
import { insertModalMarkupHome } from './insertingIntoDifferentContainers';
import { addWatchedLocalStorage, addQueueLocalStorage } from '../local_storage';
import { textModalBtn } from '../modal-btns';
// const moviesApiService = new MoviesApiService();
//* для відкриття трейлеру
import { onTrailerClickBtn } from '../movie-trailer';

refs.homeCardsContainer.addEventListener('click', clickOnMovie);
refs.closeModalBtn.addEventListener('click', onCloseModalBtnClick);
refs.modalCardBackdrop.addEventListener('click', onModalCardBackdropClick);

function clickOnMovie(e) {
  if (e.target.nodeName !== 'IMG' && e.target.nodeName !== 'B') {
    return;
  }

  document.body.classList.add('show-modal');
  window.addEventListener('keydown', modalCloseByEsc);

  const currentId = e.target.dataset.id;
  const unParsedCurrentArrayFilms = localStorage.getItem('currentFilm');
  const parsedCurrentArrayFilms = JSON.parse(unParsedCurrentArrayFilms);

  // console.log(parsedCurrentArrayFilms.find(obj => obj.id == currentId));
  let currentMovie = parsedCurrentArrayFilms.find(obj => obj.id == currentId);

  const render = makingModalCardMarkup(currentMovie);
  insertModalMarkupHome(render);
  ///////////////////////////////////////////////////////////////////////////
  //** Код для запису об'єктів в LOCAL STORAGE */
  document.querySelector('#watched-btn').addEventListener('click', () => {
    addWatchedLocalStorage(currentMovie);
    textModalBtn(currentId);
  });

  document.querySelector('#queue-btn').addEventListener('click', () => {
    addQueueLocalStorage(currentMovie);
    textModalBtn(currentId);
  });
  /////////////////////////////////////////////////////////////////////////////
  //* слухач на відкриття трейлеру
  const btnTrailer = document.querySelector('.movie__btn-trailer');
  btnTrailer.addEventListener('click', onTrailerClickBtn(currentId));
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
  const markup = `<div class="movie__container--left-side">              
                  <img class="movie__image" src="https://www.themoviedb.org/t/p/w500${
                    obj.poster_path ||
                    `https://raw.githubusercontent.com/marvall/filmoteka/main/src/images/no-poster.png`
                  }"
                    alt="${obj.title || obj.name}" />

                    <button type="button" class="movie__btn-trailer">        
                    </button>                
            </div>
            <div class="movie__container--rigth-side">
                <h2 class="movie__title">${obj.title || obj.name}</h2>
                <table class="movie__info">
                    <tbody>
                        <tr class="movie__info-rows">
                            <td class="movie__info-name">Vote / Votes</td>
                            <td class="movie__info-rating">
                                <span class="movie__info-rating-value movie__info-rating--accent">${
                                  obj.vote_average
                                }</span>
                                <span class="movie__info-rating-slash">/</span>
                                <span class="movie__info-rating-value">${
                                  obj.vote_count
                                }</span>
                            </td>
                        </tr>
                        <tr class="movie__info-rows">
                            <td class="movie__info-name">Popularity</td>
                            <td class="movie__info-numbers">${
                              obj.popularity
                            }</td>
                        </tr>
                        <tr class="movie__info-rows">
                            <td class="movie__info-name">Original Title</td>
                            <td class="movie__info-value">${
                              obj.original_title || obj.original_name
                            }</td>
                        </tr>
                        <tr class="movie__info-rows movie__info-rows--last">
                            <td class="movie__info-name">Genre</td>
                            <td class="movie__info-value">${
                              gettingGenresListForModal(obj.genre_ids) ||
                              'Genre not defined'
                            }</td>
                        </tr>
                    </tbody>
                </table>
                <h2 class="movie__about-title">About</h2>
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