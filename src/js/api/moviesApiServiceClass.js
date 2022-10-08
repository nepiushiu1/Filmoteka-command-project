import API_KEY from './constants/apiKeys';

import { BASE_TRENDING_MOVIES_URL } from './constants/baseUrls';

import { BASE_GENRE_URL } from './constants/baseUrls';

export default class MoviesApiService {
  constructor() {
    this.searchQuery = '';
    this._page = 1;
    // this.url = `${BASE_TRENDING_MOVIES_URL}trending/all/day?&api_key=${API_KEY}`;
  }

  // FETCHING FILMS FOR THE FIRST TIME
  fetchTrendingMovies() {
    const url = `${BASE_TRENDING_MOVIES_URL}trending/all/day?&api_key=${API_KEY}&page=${this._page}`;

    return fetch(url).then(response => {
      return response.json();
    });
  }

  // FETCHING GENRES FOR THE FIRST TIME
  fetchGenres() {
    const url = `${BASE_GENRE_URL}&language=en-US&api_key=${API_KEY}`;
    return fetch(url).then(response => {
      return response.json();
    });
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  // incrementPage() {
  //   this.page += 1;
  // }

  // decrementPage() {
  //   this.page -= 1;
  // }

  resetPage() {
    this.page = 1;
  }

  get page() {
    return this._page;
  }

  set page(newPage) {
    this._page = newPage;
  }
}
