import { refs } from '../refs';

export default function timeoutForBadRequest() {
  const markup = `<p class="search-form--badrequest">${translateBadRequest()}</p>`;
  refs.filmsSearchList.innerHTML = markup;
  const timer = setTimeout(() => (refs.filmsSearchList.innerHTML = ''), 2000);
  return timer;
}

function translateBadRequest() {
  const lang = localStorage.getItem('lang');
  if (!lang || lang === 'en-US') {
    return 'Search result not successful. Enter the correct movie name!';
  }
  if (lang === 'uk-UA') {
    return 'Упс, нічого не знайдено. Введіть коректну назву фільма!';
  }
}
