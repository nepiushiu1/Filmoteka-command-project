// * функція виконує fetch введеного значення, та повертає розпарсерні дані
export default async function fetchFilms(filmName) {
  // const API_KEY = 'b36f6ce5e4cba76038e6a3b1e091122a';
  // const linkForSearchByKeyword = `
  // https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;
  // const params = `&query=`;
  // const totalKeyword = `${linkForSearchByKeyword}${params}${filmName}`;
  const response = await fetch(totalKeyword);

  if (!response.ok) {
    throw new Error(response.status);
  }

  const films = await response.json();
  return films;
}
