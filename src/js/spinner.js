// window.onload = function () {
//   document.body.classList.add('loaded_hiding');
//   window.setTimeout(function () {
//     document.body.classList.add('loaded');
//     document.body.classList.remove('loaded_hiding');
//   }, 500);
// };
// document.querySelector('body').insertAdjacentHTML('afterbegin', spinnerTpl());

const spinner = document.querySelector('.lds-spinner');

export function createSpinner() {
  spinner.classList.remove('is-hidden');

  setTimeout(() => {
    spinner.classList.add('is-hidden');
  }, 700);
}