// let watched = JSON.parse(localStorage.getItem('watched'));
import { refs } from './refs';
import makingMarkup from './api/render-card-markup';
import { insertFilmsMarkupToLibrary } from './api/insertingIntoDifferentContainers';

const list_element = document.querySelector('.cards__list--library');
const pagination_element = document.getElementById('pagination-library-custom');

const list_items = JSON.parse(localStorage.getItem('watched'));

let current_page = 1;
let rows = 6;

displayList(list_items, list_element, rows, current_page);
setupPagination(list_items, pagination_element, rows);

function displayList(items, wrapper, rows_per_page, page) {
  wrapper.innerHTML = '';
  page -= 1;

  let start = rows_per_page * page;
  let end = start + rows_per_page;

  if (!items) {
    return;
  }
  let paginatedItems = items.slice(start, end);

  const markup = paginatedItems;
  console.log(markup);

  const renderWatched = makingMarkup(markup);
  insertFilmsMarkupToLibrary(renderWatched);
}

function setupPagination(items, wrapper, rows_per_page) {
  wrapper.innerHTML = '';
  if (!items) {
    return;
  }
  let page_count = Math.ceil(items.length / rows_per_page);
  for (let i = 1; i < page_count + 1; i++) {
    let btn = paginationButton(i, items);
    wrapper.appendChild(btn);
  }
}

function paginationButton(page, items) {
  let button = document.createElement('button');
  button.innerText = page;

  if (current_page == page) button.classList.add('active');

  button.addEventListener('click', function () {
    current_page = page;
    displayList(items, list_element, rows, current_page);

    let current_btn = document.querySelector('.pagenumbers button.active');
    current_btn.classList.remove('active');

    button.classList.add('active');
  });

  return button;
}
