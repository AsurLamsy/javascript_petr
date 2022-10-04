const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalDataBase = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Какой фильм был последний?", ""),
  b = prompt("На сколько его оцените?", ""),
  c = prompt("Какой фильм был последний?", ""),
  d = prompt("На сколько его оцените?", "");

personalDataBase.movies[a] = b;
personalDataBase.movies[c] = d;

console.log(personalDataBase);
