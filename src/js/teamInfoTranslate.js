function translateMsg(data) {
  const lang = localStorage.getItem('lang');
  if (!lang || lang === 'en-US') {
    return data.en;
  }
  if (lang === 'uk-UA') {
    return data.ua;
  }
}

export { translateMsg };
