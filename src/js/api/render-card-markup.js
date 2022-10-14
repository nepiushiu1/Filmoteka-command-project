import { gettingGenresListForCard } from './gettingGenresList';
import { setReleaseDate } from './setReleaseDate';
import { setReleaseVote } from './setReleaseDate';

import { refs } from '../refs';

export const BASE_POSTER_URL = `https://image.tmdb.org/t/p/w500`;

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

        return `<li id="${id}" data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
     class="movie-card">
        <div data-id="${id}" class="movie-card__link" href="#">
        <p data-id="${id}" class="movie-card__raiting">
                        <b data-id="${id}">${setReleaseVote(vote_average)}</b>
                    </p>
                <img data-id="${id}" width="280" height="402" class="movie-card__img" src="${imagePath}" alt="${
          title || name
        }" loading="lazy"/>
    <div data-id="${id}" data-aos="fade-right"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-once="false"
     class="movie-card__cont">
                  <h2 data-id="${id}" class="movie-card__title">${
          title || name
        }</h2>
                    <p data-id="${id}" class="movie-card__info">
                        <b data-id="${id}">${
          gettingGenresListForCard(genre_ids) || genresNotFound()
        } | </b>
                    </p>
                    <p data-id="${id}" class="movie-card__info">
                      <b data-id="${id}">${
          setReleaseDate(release_date, first_air_date) || noYearData()
        } 
                        </b>
                    </p>   
                    </div>
                    </div>
            </li>`;
      }
    )
    .join('');
  return markup;
}

function genresNotFound() {
  const lang = localStorage.getItem('lang');
  if (!lang || lang === 'en-US') {
    return 'Genres not found';
  }
  if (lang === 'uk-UA') {
    return 'Жанри не знайдено';
  }
}

function noYearData() {
  const lang = localStorage.getItem('lang');
  if (!lang || lang === 'en-US') {
    return 'No data';
  }
  if (lang === 'uk-UA') {
    return 'Немає даних';
  }
}
