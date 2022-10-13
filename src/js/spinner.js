import { refs } from './refs';

export default class Spinner {
    constructor() {
        this.refs = refs;
    }
  
  //показать спиннер
    show() {
      this.refs.spinner.classList.remove('is-hidden');
  };  
  
  //скрыть спиннер
    hide() {
      this.refs.spinner.classList.add('is-hidden'); 
  };
}