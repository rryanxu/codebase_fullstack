// swap
let a = 10;
let b = 20;

[a,b] = [b,a];

console.log(a) // 20
console.log(b) // 10



// work with regex
const re =/\w+\s/g;
const str ="fee fi fo fum";
const [fee,fi,fo] = str.match(re);
console.log(fee,fi,fo)
