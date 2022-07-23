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


// let num = 50; 

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }

//     console.log(i);
// }

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage("Hello World!");
// console.log(num);

// function calc(a, b) {
//     return(a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
//     let num = 50; 
//     return num;
// }

// const anotherNum = ret ();
// console.log(anotherNum);

// const logger = function() {
//     console.log('Hello');

// };

// logger();

// const calc = (a, b) => {
//     console.log('1');
//     return a + b;
// };

const str = "test";

// console.log(str[2] = 'd');

// console.log(str.toUpperCase ());
console.log(str.toLocaleLowerCase ());
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("q"));

const logg = "Hello World, My Name Is Serhii";

// console.log(logg.slice(0, 6));

// console.log(logg.substring(0, 6));

console.log(logg.substr(0, 6));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
// console.log(parseInt(test));
console.log(parseFloat(test));

// ---- CLASS 19 CALLBACK FUNCTIONS ----
function first() {
        //Do something
        setTimeout(function() {
                console.log(1);
        }, 500);
}

function second() {
        console.log(2);
}

first();
second();

function learnJS(lang, callback) {
        console.log(`Я вивчаю: ${lang}`);
        callback();
}

function done() {
        console.log('Я пройшов цей урок');
}

learnJS('JavaScript', done);