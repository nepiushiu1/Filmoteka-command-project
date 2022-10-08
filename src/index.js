import './js/api/main-home-file';
// PAGINATION FOR A MAIN PAGE

import * as fetchingApi from './js/pagination';

// import MoviesApiService from './js/api/fetch-trending-movies.js';
// import makingMarkup from './js/render-card-markup.js';

// const moviesApiService = new MoviesApiService();
// const container = document.querySelector('.container');

// const homeCardsContainer = document.querySelector('.cards__list--home');
// console.log(homeCardsContainer);
// // GETTING GENRES TO LOCALSTORAGE
// moviesApiService
//   .fetchGenres()
//   .then(({ genres }) => {
//     for (const { id, name } of genres) {
//       //   console.log(id);
//       //   console.log(name);
//       localStorage.setItem(`genre_${id}`, name);
//     }
//   })
//   .catch(error => console.log(error));

// moviesApiService
//   .fetchTrendingMovies()
//   .then(({ results }) => {
//     // console.log(results);
//     return makingMarkup(results);
//   })
//   .then(array => {
//     homeCardsContainer.insertAdjacentHTML('beforeend', array);
//   })
//   .catch(error => console.log(error));

// // function insertImgMarkup(films) {
// //   container.insertAdjacentHTML('beforeend', makingMarkup(films));
// // }
