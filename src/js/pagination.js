import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';

// Функция getFilms() создана только для проверки пагинации. ///////////////////////////////////////////////////////////////////////////////////
async function getFilms() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=e09f06c48afcb3ebfd8a25b0b6965d1e`
  );
  const data = await response.json();
  console.log(data);

  createPagination(data.total_results);
}

getFilms();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function createPagination(total_results) {
  const container = document.getElementById('pagination');
  const options = {
    totalItems: total_results,
    itemsPerPage: 20,
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
  const pagination = new Pagination(container, options);

  pagination.on('afterMove', event => {
    page = event.page;
    console.log(page);
    console.log('вызов функции загрузки следующих фильмов');
  });
}
