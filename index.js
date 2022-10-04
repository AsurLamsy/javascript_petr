"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalDataBase = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// for (let i = 0; i < 2; i++) {
//   const a = prompt("Какой фильм был последний?", ""),
//     b = prompt("На сколько его оцените?", "");

//   if (a != null && b != null && a != "" && (b != "") & (a.length < 50)) {
//     personalDataBase.movies[a] = b;
//     console.log("done");
//   } else {
//     console.log("error");
//     i--;
//   }
// }

// while (i < 3) {
//   const a = prompt("Какой фильм был последний?", ""),
//     b = prompt("На сколько его оцените?", "");
//   if (a != null && b != null && a != "" && (b != "") & (a.length < 50)) {
//     personalDataBase.movies[a] = b;
//     console.log("done");
//     i++;
//   } else {
//     console.log("error");
//     i--;
//   }
// }

let i = 0;
do {
  const a = prompt("Какой фильм был последний?", ""),
    b = prompt("На сколько его оцените?", "");
  if (a != null && b != null && a != "" && (b != "") & (a.length < 50)) {
    personalDataBase.movies[a] = b;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }
  i++;
} while (i < 2);

if (personalDataBase.count < 10) {
  console.log("Просмотрено мало фильмов");
} else if (personalDataBase.count >= 10 && personalDataBase.count < 30) {
  console.log("Средне");
} else if (personalDataBase.count >= 30) {
  console.log("Много");
} else {
  console.log("error");
}

// console.log(personalDataBase);
