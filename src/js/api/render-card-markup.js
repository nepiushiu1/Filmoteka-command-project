import gettingGenresList from './gettingGenresList';
import { refs } from '../refs';

const BASE_POSTER_URL = `https://image.tmdb.org/t/p/w500`;

export default function makingMarkup(results) {
  const markup = results
    .map(
      ({
        title,
        name,
        poster_path,
        genre_ids,
        release_date,
        first_air_date,
        vote_average,
        id,
      }) => {
        const imagePath =
          poster_path === null
            ? `https://raw.githubusercontent.com/marvall/filmoteka/main/src/images/no-poster.png`
            : `${BASE_POSTER_URL}/${poster_path}`;

        return `<li class="movie-card">
        <a class="movie-card__link" href="#">
                <img class="movie-card__img" src="${imagePath}" alt="${
          title || name
        }" loading="lazy"/>
                <div class="movie-card__cont">
                  <h2 class="movie-card__title">${title || name}</h2>
                    <p class="movie-card__info">
                        <b>${gettingGenresList(genre_ids)} | </b>
                    </p>
                    <p class="movie-card__info">
                        <b>${
                          setReleaseDate(release_date) ||
                          setReleaseDate(first_air_date)
                        }</b>
                    </p>
                       <p class="movie-card__raiting">
                        <b>${setReleaseVote(vote_average)}</b>
                    </p>
                    </div>
                    </a>
            </li>`;
      }
    )
    .join('');
  return insertFilmsMarkup(markup);
}

function setReleaseDate(year) {
  if (!year) {
    return 'No data';
  }
  return year.slice(0, 4);
}

function setReleaseVote(vote) {
  if (!vote) {
    return 'No vote';
  }
  return vote.toFixed(1);
}

// FUNCTION FOR INSERTING MARKUP TO HOME-CARDS-CONTAINER
function insertFilmsMarkup(filmsMarkup) {
  refs.homeCardsContainer.insertAdjacentHTML('beforeend', filmsMarkup);
}

// export default function makingMarkup(data) {
//   const res = data.results;
//   return res
//     .map(
//       ({
//         title,
//         name,
//         release_date,
//         genre_ids,
//         first_air_date,
//         poster_path,
//         vote_average,
//       }) => {
//         return `<div class="movie-card">
//             <img class="movie-card__img" src="${BASE_POSTER_URL}/${poster_path}" alt="" loading="lazy"/>
//             <div class="info">
//                 <p class="info-item">
//                     <b>${title || name}</b>
//                 </p>
//                 <p class="info-item">
//                     <b>${release_date || first_air_date}</b>
//                 </p>
//                 <p class="info-item">
//                     <b>${vote_average}</b>
//                 </p>
//             </div>
//         </div>
//     `;
//       }
//     )
//     .join('');
// }
