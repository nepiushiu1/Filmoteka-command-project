export function gettingGenresListForModal(array) {
  let genre_names = '';

  if (!array) {
    return `Genre not found`;
  }

  for (const id of array) {
    const genre_name = localStorage.getItem(`genre_${id}`);
    if (!genre_name) {
      continue;
    }
    if (genre_names) {
      genre_names += ', ';
    }
    genre_names += genre_name;
  }
  return genre_names;
}

export function gettingGenresListForCard(array) {
  let genre_names = '';

  if (!array) {
    return `Genre not found`;
  }

  if (array.length <= 2) {
    for (const id of array) {
      let genre_name = localStorage.getItem(`genre_${id}`);

      if (!genre_name) {
        continue;
      }

      if (genre_names) {
        genre_names += ', ';
      }

      genre_names += genre_name;
    }
    return genre_names;
  }

  if (array.length >= 3) {
    let counter = 0;

    for (const id of array) {
      let genre_name = localStorage.getItem(`genre_${id}`);

      if (!genre_name) {
        continue;
      }
      counter += 1;
      if (counter === 3) {
        genre_names += ', ' + otherGenres();
        break;
      }
      if (genre_names) {
        genre_names += ', ';
      }

      genre_names += genre_name;
    }
    return genre_names;
  }
}

function otherGenres() {
  const lang = localStorage.getItem('lang');
  if (!lang || lang === 'en-US') {
    return 'Other';
  }
  if (lang === 'uk-UA') {
    return 'Інші';
  }
}
