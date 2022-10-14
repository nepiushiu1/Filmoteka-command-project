import fetchFilms from "./searchFilmByKeyword/fetch-trailer";
import renderTrailer from './searchFilmByKeyword/render-trailer';

function onTrailerClickBtn(currentId) {
  try {
      fetchFilms(currentId).then(films => {
        renderTrailer(films.results[0].key);
    });
  } catch (err) {
    err => console.log(err);
  }
};

export { onTrailerClickBtn };