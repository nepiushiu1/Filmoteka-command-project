import gettingGenresList from './gettingGenresList';
// import MoviesApiService from './moviesApiServiceClass';
import { refs } from '../refs';

refs.homeCardsContainer.addEventListener('click', clickOnMovie);
refs.closeModalBtn.addEventListener('click', onCloseModalBtnClick);

// const moviesApiService = new MoviesApiService();

function clickOnMovie(e) {
  if (e.target.nodeName !== 'IMG' && e.target.nodeName !== 'B') {
    return;
  }
  const currentId = e.target.dataset.id;
  const unParsedCurrentArrayFilms = localStorage.getItem('currentFilm');
  const parsedCurrentArrayFilms = JSON.parse(unParsedCurrentArrayFilms);
  // console.log(parsedCurrentArrayFilms.find(obj => obj.id == currentId));
  makingModalCardMarkup(
    parsedCurrentArrayFilms.find(obj => obj.id == currentId)
  );

  document.body.classList.add('show-modal');
  window.addEventListener('keydown', modalCloseByEsc);
}

function onCloseModalBtnClick(e) {
  window.removeEventListener('keydown', modalCloseByEsc);
  document.body.classList.remove('show-modal');
  refs.modalCardContainer.innerHTML = '';
}

function modalCloseByEsc(e) {
  if (e.code === 'Escape') {
    onCloseModalBtnClick();
  }
}

function makingModalCardMarkup(obj) {
  const markup = `<div class="movie__container--left-side">
                <img width="240" height="357" class="movie__image" src="https://www.themoviedb.org/t/p/w500${
                  obj.poster_path
                }"
                    alt="${obj.title || obj.name}" />
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
                              gettingGenresList(obj.genre_ids) || 'Thriller'
                            }</td>
                        </tr>
                    </tbody>
                </table>
                <h2 class="movie__about-title">About</h2>
                <p class="movie__about-text">
                    ${obj.overview}
                </p>
                <div class="movie__btn-container">
                    <button type="button" class="movie__btn btn btn-trailer">
                        <svg width='40' height='40' class='youtube-icon' viewBox='0 -77 512.00213 512'>
                            <path
                                d='m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0'
                                fill='#f00'></path>
                            <path d='m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0' fill='#fff'></path>
                        </svg>
                        Watch trailer
                    </button>
                    <button type="submit" id="watched-btn" data-id="${
                      obj.id
                    }" class="movie__btn btn btn--accent">add
                        to Watched</button>
                    <button type="submit" id="queue-btn" data-id="${
                      obj.id
                    }" class="movie__btn btn btn-queue">add to
                        queue</button>
                </div>
            </div>
        </div>`;
  refs.modalCardContainer.insertAdjacentHTML('beforeend', markup);
}
