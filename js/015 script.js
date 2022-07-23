'use strict';

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');
    }

}
start(); 

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один з переглянутих фільмів', ''),
              b = prompt('Як ви його оцінете?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('ERROR');
            i--;
        }
    
        
    }
}

// rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Not much films have been watch");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("You are greate viewer");
    } else if (personalMovieDB.count >= 30) {
        console.log("You are Filmkiller");
    } else { 
        console.log("ERROR");
    }
}

// detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat); 

function writeYourGenres() {
    for (let i = 1; i <=3; i++) {
        personalMovieDB.genres[i - 1] =  prompt(`Ваш улюблений жанр під номером ${i}`);

    }
}writeYourGenres();