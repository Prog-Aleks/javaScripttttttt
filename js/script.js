"use strict ";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
      count: numberOfFilms,
      movies: {},
      actor: {},
      genres: [],
      privat: false
};

const a = prompt('Один из просмотренных фильмов?', ''),
      b = prompt('На сколько оценити его?', ''),
      c = prompt('Один из просмотренных фильмов?', ''),
      d = prompt('На сколько оценити его?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);