"use strict";

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Are you 18?", "18");
// console.log(answer + 5);

// const category ='toys';
// console.log(`https://someurl.com/${category}/5`);

// const user = "Serhii";
// alert(`Hi, ${user}`);

// const answers = [];
// answers[0] = prompt('What is your name', '');
// answers[1] = prompt('What is your surename', '');
// answers[2] = prompt('How old are you', '');

// document.write(answers);


// if (4) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// } 



// // if (num < 49) {
// //     console.log('Error');
// // } else if (num > 100) {
// //     console.log('A LOT');
// // } else {
// //     console.log('Ok!');
// // }

// // (num === 50) ? console.log('Ok!') : console.log('Error');

// const num = '50'; 

// switch (num) {
//     case '49':
        // console.log('Not true');
//         break;
//     case '100':
//         console.log('Untrue');
//         break;
//     case '50':
//         console.log('True');
//         break;
//     default:
//         console.log('Next time');
//         break;

// }

// const numberOfFilms = prompt('Скільки фільмів ви вже подивились?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false

// };

// const a = prompt('Один з переглянутих фільмів', ''),
//       b = prompt('Як ви його оцінете?', ''),
//       c = prompt('Один з переглянутих фільмів', ''),
//       d = prompt('Як ви його оцінете?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


let num = 50; 

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        // break;
        continue;
    }

    console.log(i);
}