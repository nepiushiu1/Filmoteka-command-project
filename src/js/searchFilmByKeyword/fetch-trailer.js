import renderBadRequest from './renderBadRequest';

export default async function fetchFilms(movie_id) {
  const API_KEY = 'b36f6ce5e4cba76038e6a3b1e091122a';
  const linkForSearchById = `
  https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(linkForSearchById);
  if (!response.ok) {
    renderBadRequest();
    throw new Error(response.status);
  }
  const films = await response.json();
  return films;
};
