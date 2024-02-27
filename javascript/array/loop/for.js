// - `for` - loops through a block of code a number of times
// - `for/in` - loops through the properties of an object
// - `for/of` - loops through the values of an iterable object
// - `while` - loops through a block of code while a specified condition is true
// - `do/while` - also loops through a block of code while a specified condition is true

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for


// for
let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}
console.log(str);
console.log('---------------------------------------------');



// for/in
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
console.log('---------------------------------------------');

// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"
for (const [key, value] of Object.entries(object)) {
  console.log(`${key}: ${value}`);
}
console.log('---------------------------------------------');


// for/of
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}
console.log('---------------------------------------------');

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
