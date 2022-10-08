import API_KEY from './api/apiKeys';

import { BASE_TRENDING_MOVIES_URL } from './api/baseUrls';

import { BASE_GENRE_URL } from './api/baseUrls';

export default class MoviesApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    // this.url = `${BASE_TRENDING_MOVIES_URL}trending/all/day?&api_key=${API_KEY}`;
  }

  fetchTrendingMovies() {
    const url = `${BASE_TRENDING_MOVIES_URL}trending/all/day?&api_key=${API_KEY}`;
    return fetch(url).then(response => {
      return response.json();
    });
  }

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

  incrementPage() {
    this.page += 1;
  }

  decrementPage() {
    this.page -= 1;
  }

  resetPage() {
    this.page = 1;
  }
}
