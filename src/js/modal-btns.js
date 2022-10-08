import { refs } from './refs';

// const modalWatched = document.querySelector('.modal_watched');
// const modalQueue = document.querySelector('.modal_queue');

btnWatched.addEventListener('click', changeText);
btnQueue.addEventListener('click', changeText);
modalWatched.addEventListener('click', changeText);
modalQueue.addEventListener('click', changeText);

function changeText() {
  console.log('Click!!!!!!!!!!');
}

// const textWatched = [watched.textContent, 'REMOVE'];
// const textQueue = [queue.textContent, 'REMOVE'];

// function changeTextWatched({ target }) {
//   target.state = +!target.state;
//   target.textContent = textWatched[target.state];
// }

// function changeTextQueue({ target }) {
//   target.state = +!target.state;
//   target.textContent = textQueue[target.state];
// }
