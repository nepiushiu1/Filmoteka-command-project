import { refs } from './refs';

export function textModalBtn(id) {
  const btnQueue = document.querySelector('#queue-btn');
  const btnWatch = document.querySelector('#watched-btn');
  if (inList(id, 'watched')) {
    // console.log('есть такой в watched');
    btnWatch.textContent = 'Adding to watched';
    btnWatch.disabled = true;
    function changeText() {
      // console.log('Функція працює!!!!');
      btnWatch.disabled = false;
      btnWatch.textContent = 'REMOVE FROM WATCHED';
      btnWatch.classList.add('active');
    }
    setTimeout(changeText, 300);
  } else {
    // console.log('нет такого в watched');
    btnWatch.textContent = 'ADD TO WATCHED';
    btnWatch.classList.remove('active');
    // console.log('удаляем класс active');
    btnWatch.disabled = false;
  }

  if (inList(id, 'queue')) {
    // console.log('есть такой в queue');
    btnQueue.textContent = 'Adding to queue';
    btnQueue.disabled = true;
    function changeText() {
      btnQueue.disabled = false;
      btnQueue.textContent = 'REMOVE FROM QUEUE';
      btnQueue.classList.add('active');
    }
    setTimeout(changeText, 300);
  } else {
    // console.log('нет такого в queue');
    btnQueue.textContent = 'ADD TO QUEUE';
    btnQueue.classList.remove('active');
    btnQueue.disabled = false;
  }
}

function inList(id, list) {
  // console.log(id, list);
  let localListJson = load(list);

  if (localListJson === undefined) {
    // console.log(localListJson);
    return;
  } else {
    const findMovie = localListJson.find(item => item.id == id);
    return findMovie ? true : false;
  }
}

const load = key => {
  try {
    let serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      // console.log('serializedState', serializedState);
      return;
    } else {
      // console.log('serializedState', serializedState);
      return (serializedState = JSON.parse(serializedState) || undefined);
    }
  } catch (err) {
    console.error('Get state error: ', err);
  }
};
