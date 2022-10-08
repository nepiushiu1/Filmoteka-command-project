import gettingGenresList from './gettingGenresList';
import { refs } from '../refs';

const BASE_POSTER_URL = `https://image.tmdb.org/t/p/w500`;

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

export default function makingMarkup(results) {
  const markup = results.map(({ title, name, poster_path, genre_ids }) => {
    return `<div class="movie-card">
                <img class="movie-card__img" src="${BASE_POSTER_URL}/${poster_path}" alt="" loading="lazy"/>
                <div class="info">
                    <p class="info-item">
                        <b>${title || name}</b>
                    </p>
                    <p class="info-item">
                        <b>Views ${gettingGenresList(genre_ids)}</b>
                    </p>
                    <p class="info-item">
                        <b>Comments</b>
                    </p>
                    <p class="info-item">
                        <b>Downloads</b>
                    </p>
                </div>
            </div>`;
  });
  return insertFilmsMarkup(markup);
}

// // FUNCTION FOR INSERTING MARKUP TO HOME-CARDS-CONTAINER
function insertFilmsMarkup(filmsMarkup) {
  refs.homeCardsContainer.insertAdjacentHTML('beforeend', filmsMarkup);
}
