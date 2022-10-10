// import { dataStudents } from './data-students';

// функция открытия и закрытия модального окна ,описывающего студентов
const refs = {
  open: document.querySelector('[modal-open]'),
  close: document.querySelector('.modal-btn_students'),
  backdrop: document.querySelector('.backdrop_students'),
};

refs.close.addEventListener('click', closeModal);
refs.open.addEventListener('click', openModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function openModal(e) {
  e.preventDefault();
  window.addEventListener('keydown', closeKeyboard);
  refs.backdrop.classList.remove('is-hidden');
}

function closeModal() {
  refs.backdrop.classList.add('is-hidden');
  window.addEventListener('keydown', closeKeyboard);
}
function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    console.log('Кликнули именно в бекдроп!!!!');
    closeModal();
  }
  window.removeEventListener('keydown', closeKeyboard);
}

function closeKeyboard(e) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = e.key === ESC_KEY_CODE;
  if (isEscKey) {
    closeModal();
  }
}

// ---------------------------------------------
// функция вывода изображений участников
const theta = [];

let setup = function (n, r, id) {
  let main = document.getElementById(id);
  let mainHeight = parseInt(window.getComputedStyle(main).height.slice(0, -2));
  let circleArray = [];
  const foto = [
    'url("http://dummyimage.com/80")',
    'url("http://dummyimage.com/80")',
    'url("http://dummyimage.com/80")',
    'url("http://dummyimage.com/80")',
    'url("http://dummyimage.com/80")',
    'url("http://dummyimage.com/80")',
    'url("http://dummyimage.com/80")',
    'url("http://dummyimage.com/80")',
    'url("http://dummyimage.com/80")',
    'url("http://dummyimage.com/80")',
    'url("http://dummyimage.com/80")',
  ];
  for (let i = 0; i < n; i++) {
    const circle = document.createElement('li');
    circle.className = 'circle number' + i;
    circleArray.push(circle);
    circleArray[i].posx = Math.round(r * Math.cos(theta[i])) + 'px';
    circleArray[i].posy = Math.round(r * Math.sin(theta[i])) + 'px';
    circleArray[i].style.position = 'absolute';
    circleArray[i].style.backgroundImage = foto[i];
    circleArray[i].style.top =
      mainHeight / 2 - parseInt(circleArray[i].posy.slice(0, -2)) + 'px';
    circleArray[i].style.left =
      mainHeight / 2 + parseInt(circleArray[i].posx.slice(0, -2)) + 'px';
    main.appendChild(circleArray[i]);
  }
};

const generate = function (n, r, id) {
  const frags = 360 / n;
  for (let i = 0; i <= n; i++) {
    theta.push((frags / 180) * i * Math.PI);
  }
  setup(n, r, id);
};
generate(11, 400, 'main');
