const btnWatched = document.querySelector('.library-btns__item--watched');
const btnQueue = document.querySelector('.library-btns__item--queue');

btnWatched.addEventListener('click', onBtnWatchedClick);
btnQueue.addEventListener('click', onBtnQueueClick);

function onBtnWatchedClick(e) {
    btnWatched.style.backgroundColor = "var(--button-bg-cl)";
    btnWatched.style.borderColor = "var(--button-bg-cl)";
    btnQueue.style.backgroundColor = "transparent";
    btnQueue.style.borderColor = "var(--header-text-cl)";
}

function onBtnQueueClick(e) {
    btnQueue.style.backgroundColor = "var(--button-bg-cl)";
    btnQueue.style.borderColor = "var(--button-bg-cl)";
    btnWatched.style.backgroundColor = "transparent";
    btnWatched.style.borderColor = "var(--header-text-cl)";
}