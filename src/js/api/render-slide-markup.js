import { refs } from '../refs';
import { BASE_POSTER_URL } from './render-card-markup';

export function makingSwiper(results) {
  const markup = results
    .map(({ title, name, poster_path, id }) => {
      let imagePath = ``;
      poster_path === null
        ? (imagePath = `https://raw.githubusercontent.com/marvall/filmoteka/main/src/images/no-poster.png`)
        : (imagePath = `${BASE_POSTER_URL}/${BASE_POSTER_URL}/${poster_path}`);
      return `
    <div class="swiper-slide">
      <a href="#${id}" class="link">
        <img class="slider-img" src="${imagePath}" alt="${
        title || name
      }" loading="lazy" width="233" height="335" />
      </a>
    </div>`;
    })
    .join('');

  refs.swiperContainer.insertAdjacentHTML('afterbegin', markup);
}
