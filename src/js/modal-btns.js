import { refs } from './refs';

export async function textModalBtn(id) {
  const btnQueue = document.querySelector('#queue-btn');
  const btnWatch = document.querySelector('#watched-btn');
  if (inList(id, 'watched')) {
    console.log('есть такой в watched');
    btnWatch.textContent = 'Added to watched';
    btnWatch.disabled = true;
    function changeText() {
      console.log('Функція працює!!!!');
      btnWatch.disabled = false;
      btnWatch.textContent = 'Remove from watched';
      btnWatch.classList.add('active');
    }
    setTimeout(changeText, 1000);
  } else {
    console.log('нет такого в watched');
    btnWatch.textContent = 'Add to watched';
    btnWatch.classList.remove('active');
    console.log('удаляем класс active');
    btnWatch.disabled = false;
  }

  if (inList(id, 'queue')) {
    console.log('есть такой в queue');
    btnQueue.textContent = 'Added to queue';
    btnQueue.disabled = true;
    function changeText() {
      btnQueue.disabled = false;
      btnQueue.textContent = 'Remove from queue';
      btnQueue.classList.add('active');
    }
    setTimeout(changeText, 1000);
  } else {
    console.log('нет такого в queue');
    btnQueue.textContent = 'Add to queue';
    btnQueue.classList.remove('active');
    btnQueue.disabled = false;
  }
}

function inList(id, list) {
  let localListJson = load(list);
  // console.log(localListJson);
  const findMovie = localListJson.find(item => item.id == id);
  return findMovie ? true : false;
}

const load = key => {
  try {
    let serializedState = localStorage.getItem(key);

    return (serializedState = JSON.parse(serializedState) || undefined);
  } catch (err) {
    console.error('Get state error: ', err);
  }
};
