import { refs } from './refs';
import { getWatchedFilms, getQueueFilms } from './local_storage';
import { createLibraryPagination } from './pagination-library';

refs.btnWatched.addEventListener('click', onBtnWatchedClick);
refs.btnQueue.addEventListener('click', onBtnQueueClick);

// getWatchedFilms();

function onBtnWatchedClick(e) {
  // getWatchedFilms();
  createLibraryPagination('watched');


  refs.btnWatched.style.backgroundColor = 'var(--button-bg-cl)';
  refs.btnWatched.style.borderColor = 'var(--button-bg-cl)';
  refs.btnQueue.style.backgroundColor = 'transparent';
  refs.btnQueue.style.borderColor = 'var(--header-text-cl)';
}

function onBtnQueueClick(e) {
  // getQueueFilms();
  createLibraryPagination('queue');

  refs.btnQueue.style.backgroundColor = 'var(--button-bg-cl)';
  refs.btnQueue.style.borderColor = 'var(--button-bg-cl)';
  refs.btnWatched.style.backgroundColor = 'transparent';
  refs.btnWatched.style.borderColor = 'var(--header-text-cl)';
}
