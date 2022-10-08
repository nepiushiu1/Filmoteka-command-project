const BASE_POSTER_URL = `https://image.tmdb.org/t/p/w500`;

export default function makingMarkup(data) {
  const res = data.results;
  return res
    .map(
      ({
        title,
        name,
        release_date,
        genre_ids,
        first_air_date,
        poster_path,
        vote_average,
      }) => {
        return `<div class="movie-card">
            <img class="movie-card__img" src="${BASE_POSTER_URL}/${poster_path}" alt="" loading="lazy"/>
            <div class="info">
                <p class="info-item">
                    <b>${title || name}</b>
                </p>
                <p class="info-item">
                    <b>${release_date || first_air_date}</b>
                </p>
                <p class="info-item">
                    <b>${vote_average}</b>
                </p>
            </div>
        </div>
    `;
      }
    )
    .join('');
}
