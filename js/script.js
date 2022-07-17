const numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');
 
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

const a = prompt('Один з переглянутих фільмів', ''),
      b = prompt('Як ви його оцінете?', ''),
      c = prompt('Один з переглянутих фільмів', ''),
      d = prompt('Як ви його оцінете?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
