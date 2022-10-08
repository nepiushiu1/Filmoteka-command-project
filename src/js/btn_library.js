const watched = document.querySelector('.watched');
const queue = document.querySelector('.queue');
// const modalWatched = document.querySelector('.modal_watched');
// const modalQueue = document.querySelector('.modal_queue');

watched.addEventListener('click', changeText);
queue.addEventListener('click', changeText);
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
