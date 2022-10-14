import i18next from 'i18next';

i18next.init(
  {
    lng: localStorage.getItem('lang'),
    debug: true,
    returnObjects: true,
    resources: {
      'en-US': {
        translation: {
          home: 'Home',
          library: 'My library',
          search: 'Movie search',
          watched: 'Watched',
          queue: 'Queue',
          rights: '| All Rights Reserved |',
          developed: 'Developed with',
          students: 'by GoIT Students',
          support: 'Support',
        },
      },
      'uk-UA': {
        translation: {
          home: 'Додому',
          library: 'Моя бібліотека',
          search: 'Пошук фільму',
          watched: 'Переглянуто',
          queue: 'В черзі',
          rights: '| Всі права захищено |',
          developed: 'Розроблено з',
          students: 'студентами GoIT',
          support: 'Підтримати',
        },
      },
    },
  },
  function (err, t) {
    if (!localStorage.getItem('lang')) {
      i18next.changeLanguage('en-US');
    }
    updateContent();
    bindLocaleSwitcher();
  }
);

function updateContent() {
  document.querySelectorAll('[data-key]').forEach(translateElement);
}
function translateElement(element) {
  const key = element.getAttribute('data-key');

  if (element.tagName === 'INPUT') {
    element.placeholder = i18next.t(key);
  }
  element.innerText = i18next.t(key);
}
function bindLocaleSwitcher() {
  const switcher = document.querySelector('[data-switcher]');
  switcher.value = i18next.language;
  switcher.onchange = event => {
    updateContent();
    changeLanguage(event.target.value);
  };
}
function changeLanguage(lng) {
  localStorage.setItem('lang', lng);
  i18next.changeLanguage(lng);
}

i18next.on('languageChanged', () => {
  updateContent();
});

export function translateItems(string) {
  document.querySelectorAll('string').forEach(translateElement);
}
