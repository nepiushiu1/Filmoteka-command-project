import { refs } from './refs';

// Добавление кнопки в HTML
function changeBgColorBtn() {
  const bgColorBtn = `
  <input id="on" type="radio" name="status" value="on" checked="checked"/>
  <label for="on">on</label>
  <input id="off" type="radio" name="status" value="off"/>
  <label for="off">off</label>`;

  const changeBgColorBtn = document.createElement('div');
  changeBgColorBtn.classList.add('switch');
  
  refs.bgColorBtn.append(changeBgColorBtn);
  changeBgColorBtn.insertAdjacentHTML('beforeend', bgColorBtn);
}
changeBgColorBtn();

// Доп функции
const refsChangeBgColorBtn = document.querySelectorAll('.switch input');

class BgColorExportData {
  constructor() {
    this.formData = {};
    this.STORAGE_KEY = 'bg-color-data';
  }
  populateData() {
    const savedData = localStorage.getItem(this.STORAGE_KEY);
    if (savedData) {
      this.formData = JSON.parse(savedData);
      document.body.dataset.switch = this.formData.status;

      if (this.formData.status === 'off') {
        refsChangeBgColorBtn[1].checked = 'checked';
      } else refsChangeBgColorBtn[0].checked = 'checked';
    }
  }

  onBgColorBtnClick(onClickData) {
    document.body.dataset.switch = onClickData.value;
    this.formData[onClickData.name] = onClickData.value;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.formData));
  }
}

// Вызов функции переключения цвета фона
const bgColorExportData = new BgColorExportData();

bgColorExportData.populateData();

refsChangeBgColorBtn.forEach(radio => {
  radio.addEventListener('change', () => {
    // console.log(radio);
    bgColorExportData.onBgColorBtnClick(radio);
  });
});
