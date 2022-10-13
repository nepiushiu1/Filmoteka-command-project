export default function renderBadRequest(){
  const btnTrailer = document.querySelector('.movie__btn-trailer');
  const markup = `<h2 class="movie__btn-trailer--bad">Немає трейлера до цього фільму</h2>`;
    btnTrailer.insertAdjacentHTML("beforeend", markup);
};