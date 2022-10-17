import API_KEY from './constants/apiKeys';
import { BASE_TRENDING_MOVIES_URL } from './constants/baseUrls';
import { BASE_GENRE_URL } from './constants/baseUrls';

export default class MoviesApiService {
  constructor() {
    this.searchQuery = '';
    this._page = 1;
    this.language = 'en-US';
    // this.url = `${BASE_TRENDING_MOVIES_URL}trending/all/day?&api_key=${API_KEY}`;
  }

  // FETCHING FILMS FOR THE FIRST TIME
  fetchTrendingMovies() {
    const url = `${BASE_TRENDING_MOVIES_URL}trending/movie/day?&api_key=${API_KEY}&page=${
      this._page
    }&language=${this.setLanguage()}`;

    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }

  // FETCHING GENRES FOR THE FIRST TIME
  fetchGenres() {
    const url = `${BASE_GENRE_URL}&language=en-US&api_key=${API_KEY}&language=${this.setLanguage()}`;
    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }

  // FETCHING FILMS USING FORM
  fetchSearchingMovies() {
    const url = `${BASE_TRENDING_MOVIES_URL}search/movie?api_key=${API_KEY}&page=${
      this._page
    }&query=${this.searchQuery}&language=${this.setLanguage()}`;

    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }

  setLanguage() {
    if (!localStorage.getItem('lang')) {
      return (this.language = 'en-US');
    }
    return (this.language = localStorage.getItem('lang'));
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get page() {
    return this._page;
  }

  set page(newPage) {
    this._page = newPage;
  }
}
