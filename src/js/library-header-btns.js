import { refs } from './refs';

refs.btnWatched.addEventListener('click', onBtnWatchedClick);
refs.btnQueue.addEventListener('click', onBtnQueueClick);

function onBtnWatchedClick(e) {
  refs.btnWatched.style.backgroundColor = 'var(--button-bg-cl)';
  refs.btnWatched.style.borderColor = 'var(--button-bg-cl)';
  refs.btnQueue.style.backgroundColor = 'transparent';
  refs.btnQueue.style.borderColor = 'var(--header-text-cl)';
}

function onBtnQueueClick(e) {
  refs.btnQueue.style.backgroundColor = 'var(--button-bg-cl)';
  refs.btnQueue.style.borderColor = 'var(--button-bg-cl)';
  refs.btnWatched.style.backgroundColor = 'transparent';
  refs.btnWatched.style.borderColor = 'var(--header-text-cl)';
}
