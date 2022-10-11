import { refs } from '../refs';

export default function timeoutForBadRequest() {
  const markup =
    '<p class="search-form--badrequest">Search result not successful. Enter the correct movie name!</p>';
    refs.filmsSearchList.innerHTML = markup;
    const timer = setTimeout(() => refs.filmsSearchList.innerHTML = '', 2000)
    return timer;
};