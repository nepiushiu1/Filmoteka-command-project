export default function renderTrailer(key) {
  const btnTrailer = document.querySelector('.movie__btn-trailer');
  if(!key) {
    const markup = `<h2>Немає трейлера до цього фільму</h2>`;
    btnTrailer.insertAdjacentHTML("beforeend", markup);
    return;
  };

  const markup = `<iframe id="player" type="text/html" width="250" height="370"
  src="http://www.youtube.com/embed/${key}?enablejsapi=1&origin=http://example.com"
  frameborder="0"></iframe>`;

  
  btnTrailer.insertAdjacentHTML("beforeend", markup);
};