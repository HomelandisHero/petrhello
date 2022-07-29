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

// const str = "test";

// console.log(str[2] = 'd');

// console.log(str.toUpperCase ());
// console.log(str.toLocaleLowerCase ());
// console.log(str);

// const fruit = "Some fruit";

// console.log(fruit.indexOf("q"));

// const logg = "Hello World, My Name Is Serhii";

// // console.log(logg.slice(0, 6));

// // console.log(logg.substring(0, 6));

// console.log(logg.substr(0, 6));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// // console.log(parseInt(test));
// console.log(parseFloat(test));


// ---- CLASS 19 CALLBACK FUNCTIONS ----

// function first() {
//         //Do something
//         setTimeout(function() {
//                 console.log(1);
//         }, 500);
// }

// function second() {
//         console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//         console.log(`Я вивчаю: ${lang}`);
//         callback();
// }

// function done() {
//         console.log('Я пройшов цей урок');
// }

// learnJS('JavaScript', done);


// // ---- CLASS 20 "OBJECT" ----

// const options = {
//         name: 'test',
//         width: 1024,
//         height: 1024,
//         colors: {
//                 border: 'black',
//                 bg: 'red'
//         }, 
//         makeTest: function() {
//                 console.log("Test");
//         }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// console.log(options["colors"]["border"]);

// delete options.name;
// console.log(options);

// let counter = 0;
// for (let key in options) {
//         if (typeof(options[key]) ==='object') {
//                 for (let i in options[key]) {
//                         console.log(`Властивість ${i} має значення ${options[key][i]}`);
                        
//                 }
//         } else {
//                 console.log(`Властивість ${key} має значення ${options[key]}`);
//                 counter++;
//         }
        
// }
// console.log(counter);


// ----- CLASS 21 "MASSIFS" -----

// const arr = [3, 12, 23, 6, 8];
// arr.sort(compareNum);
// console.log(arr);
//                                         //------- Сортування за порядком
// function compareNum(a, b) {
//         return a - b;
// }

// // ----------- Метод forEach - для перебору елементів масиву. ---

// // console.log(arr.length); 
// // arr.forEach(function(item, i, arr) {     
// //         console.log(`${i}: ${item} в середені массива ${arr}`);
// // });

// // arr.pop();
// // arr.push(10);

// // console.log(arr);

// // for (let i = 0; i < arr.length; i++) {
// //         console.log(arr[i]);
// // }

// // for (let value of arr) {
// //         console.log(value);
// // }

// // const str = prompt("", "");
// // const products = str.split(", ");
// // products.sort();
// // console.log(products.join('; '));


// // ----- CL. 22 SPREAD OP. -----

// // let a = 5, 
// //     b = a;

// // b = b + 5;

// // console.log(b);
// // console.log(a);

// // const obj = {
// //         a: 5,
// //         b: 1
// // };

// // const copy = obj;  // Передає ПОСИЛАННЯ

// // copy.a = 10; 

// // console.log(copy);
// // console.log(obj);

// function copy(mainObj) {          //------------- КОПІІ ОБʼЄКТУ
//         let objCopy = {};

//         let key;
//         for(key in mainObj) {
//                 objCopy[key] = mainObj[key];
//         }

//         return objCopy;
// }

// const numbers = {
//         a: 2, 
//         b: 5, 
//         c: {
//             x: 7, 
//             y:4
//         }
// };

// const newNumbers = copy(numbers);

// newNumbers.a =10;
// newNumbers.c.x = 10;

// // console.log(newNumbers);
// // console.log(numbers);

// const add = {
//         d: 17,
//         e: 20
// };

// const clone = Object.assign({}, add); //------- ЗʼЄДНАННЯ ДВУХ ОБʼЄКТІВ ----

// clone.d = 20;

// // console.log(add);
// // console.log(clone);

//  const oldArray = ['a', 'b', 'c'];
//  const newArray = oldArray.slice();   //-------- КОПІЯ МАССИВУ ----

//  newArray[1] = 'Hello World';
//  console.log(newArray);
//  console.log(oldArray);

// const video = ['youtube', 'vimeo', 'tube'],
//       blogs = ['wordpress', 'livejornal', 'blogger'], 
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//         console.log(a);
//         console.log(b);
//         console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ["a", "b"];

// const newAarray = [...array];

// const q = {
//         one: 1, 
//         two: 2
// };

// const nweObj = {...q};


//------- CL. 23  ОСНОВИ ОПП ------

let str = "some";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1, 2, 3]);

const soldier = { 
        health: 400,
        armor: 100, 
        sayHello: function() {
                console.log("Hello");
        }
};

const jonh = Object.create(soldier); //------- ДЛЯ ВІДТВОРЕННЯ ПРОТОТИПНИХ ЗВʼЯЗКІВ -----

// const jonh = {
//         health: 100
// };

// jonh.__proto__ = soldier; // ------- Old code ---

// Object.setPrototypeOf(jonh, soldier);  //----- ВСТАНОВИЛИ ПРОТОТИП ВІД ДЖОНА ДО СОЛДАТА ----

// console.log(john.armor);
jonh.sayHello();

//------- CL. 26 ДИНАМІЧНА ТИПІЗАЦІЯ ------

// To String

// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2)
console.log(typeof(5 + ''));

const num = 5; 

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// To Number

// 1)
console.log(typeof(Number('4')));

// 2)
console.log(typeof(Number(+'5')));

// 3)
console.log(typeof(parseInt("15px", 10)));


let answ = +prompt("Hello", "");

// To Boolean 

// 0, '', null, undefined, NaN; -------- будет FALSE
// 1)

let swicher = null;

if (swicher) {
        console.log('Working...');
}

swicher = 1;

if (swicher) {
        console.log('Working...');
}

// 2)

console.log(typeof(Boolean('4')));

// 3)

console.log(typeof(!!"4444"));