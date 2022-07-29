'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Скільки фільмів ви вже подивились?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(numberOfFilms)) {
            personalMovieDB.count = +prompt('Скільки фільмів ви вже подивились?', '');
        }
    
    },
    rememberMyFilms: function() {
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
    }, 
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Not much films have been watch");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("You are greate viewer");
        } else if (personalMovieDB.count >= 30) {
            console.log("You are Filmkiller");
        } else { 
            console.log("ERROR");
        }
    }, 
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }, 
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }

    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            // let genre = prompt(`Ваш улюблений жанр під номером ${i}`);

            // if (genre === '' || genre == null) {
            //     console.log('Ви ввели некоректні данні або не ввели іх зовсім');
            //     i--; 
            // } else {
            //     personalMovieDB.genres[i - 1] =  genre; 
            // }
            let genres = prompt(`Введіть улюблені жанри через кому`).toLocaleLowerCase(); //----- toLoc...- записує у нижньому регістрі!!! ----
            

            if (genres === '' || genres == null) {
                console.log('Ви ввели некоректні данні або не ввели іх зовсім');
                i--; 
            } else {
                personalMovieDB.genres =  genres.split(', '); 
                personalMovieDB.genres.sort();
            }
    
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Улюблений жанр ${i + 1} - это ${item}`);

        });
    }


};
