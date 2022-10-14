import { refs } from './refs';

const ADVERTISING_BEGIN_DELAY = 5000;
const ADVERTISING_END_DELAY = 10000;

showAdvertising();

function showAdvertising() {
  setTimeout(() => {
    addAdvertising();
  }, ADVERTISING_BEGIN_DELAY);

  setTimeout(() => {
    removeAdvertising();
    semiVisibleAdvertising();
  }, ADVERTISING_END_DELAY);
}

function addAdvertising() {
  refs.advertising.classList.add('is-visible');
}

function removeAdvertising() {
  refs.advertising.classList.remove('is-visible');
}

function semiVisibleAdvertising() {
  refs.advertising.classList.add('semi-visible');
}
