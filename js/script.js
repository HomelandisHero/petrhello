 "use script";

 let number = 4.6; 

console.log(-4/0);
console.log('string' * 9);

const obj = {
    name: "Serhii", 
    age: 25,
    isMarried: false

}; 

console.log(obj["name"]);

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
console.log(arr[1]);

let incr = 10,
    decr = 10;

// ++incr;
// --decr;

console.log(incr);
console.log(decr);

console.log(5%2);

console.log(2 + 2 * 2 !== '6');

const isChecked = true, 
        isClose = true; 

console.log(isChecked || !isClose); 