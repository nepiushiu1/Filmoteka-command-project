import Pagination from 'tui-pagination';
import makingMarkup from './api/render-card-markup';
import { insertFilmsMarkupToLibrary } from './api/insertingIntoDifferentContainers';
import { refs } from './refs';
import { createSpinner } from './spinner';


 // getWatchedFilms()

let fullLibrary = JSON.parse(localStorage.getItem('watched'));
createLibraryPagination('watched');

export function createLibraryPagination(name) {
  fullLibrary = JSON.parse(localStorage.getItem(`${name}`));
  const container = document.getElementById('pagination-library');

  if (!fullLibrary) {
    container.innerHTML = '';
    refs.libraryCardsContainer.innerHTML =
      '<div style="font-size: 20px">Your list is still empty</div>';
    return;
  }

  const options = {
    totalItems: fullLibrary.length,
    itemsPerPage: 10,
    visiblePages: 5,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  mediaQuery.addEventListener('change', handleMobileChange);
  function handleMobileChange(event) {
    // console.log('EVENT: ', event);
    if (event.matches) {
      // console.log('OPTIONS: ', options);
      options.visiblePages = 3;
    }
  }
  handleMobileChange(mediaQuery);

  const pagination = new Pagination(container, options);
  displayList(fullLibrary, options.itemsPerPage, options.page);

  pagination.on('afterMove', event => {
    refs.libraryCardsContainer.innerHTML = '';

    // спиннер не работает
    // createSpinner();

    const currentPage = event.page;
    displayList(fullLibrary, options.itemsPerPage, currentPage);
  });

  function displayList(items, rows_per_page, page) {
    refs.libraryCardsContainer.innerHTML = '';
    page -= 1;

    let start = rows_per_page * page;
    let end = start + rows_per_page;

    if (!items) {
      return;
    }

    const markup = items.slice(start, end);
    const renderWatched = makingMarkup(markup);
    insertFilmsMarkupToLibrary(renderWatched);
  }
}
