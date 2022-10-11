import { gettingGenresListForCard } from './gettingGenresList';
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
        let imagePath = ``;
        poster_path === null
          ? (imagePath = `https://raw.githubusercontent.com/marvall/filmoteka/main/src/images/no-poster.png`)
          : (imagePath = `${BASE_POSTER_URL}/${BASE_POSTER_URL}/${poster_path}`);

        return `<li data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
     class="movie-card">
        <div class="movie-card__link" href="#">
        <p class="movie-card__raiting">
                        <b>${setReleaseVote(vote_average)}</b>
                    </p>
                <img data-id="${id}" width="280" height="402" class="movie-card__img" src="${imagePath}" alt="${
          title || name
        }" loading="lazy"/>
    <div data-aos="fade-right"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-once="false"
     class="movie-card__cont">
                  <h2 class="movie-card__title">${title || name}</h2>
                    <p class="movie-card__info">
                        <b>${
                          gettingGenresListForCard(genre_ids) ||
                          `Genre not defined`
                        } | </b>
                    </p>
                    <p class="movie-card__info">
                        <b>${
                          setReleaseDate(release_date, first_air_date) ||
                          'No data'
                        }</b>
                    </p>
                       
                    </div>
                    </div>
            </li>`;
      }
    )
    .join('');
  return markup;
}

function setReleaseDate(releaseDate, firstAirDate) {
  if (!releaseDate) {
    return firstAirDate.slice(0, 4);
  }
  return releaseDate.slice(0, 4);
}

function setReleaseVote(vote) {
  if (!vote) {
    return 'No vote';
  }
  return vote.toFixed(1);
}

// // FUNCTION FOR INSERTING MARKUP TO HOME-CARDS-CONTAINER
// function insertFilmsMarkupToHome(filmsMarkup) {
//   refs.homeCardsContainer.insertAdjacentHTML('beforeend', filmsMarkup);
// }

// // FUNCTION FOR INSERTING MARKUP TO LIBRARY-CARDS-CONTAINER
// function insertFilmsMarkupToLibrary(filmsMarkup) {
//   refs.libraryCardsContainer.insertAdjacentHTML('beforeend', filmsMarkup);
// }

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
