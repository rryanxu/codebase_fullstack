// 1)
// Numbers in JavaScript are "double-precision 64-bit format IEEE 754 values", according to the spec —  There's no such thing as an integer in JavaScript (except BigInt), so you have to be a little careful. See this example:

console.log(3 / 2);             // 1.5, not 1
console.log(Math.floor(3 / 2));// 1

// 2)
// So an apparent integer is in fact implicitly a float.
// Also, watch out for stuff like:

if (0.1 + 0.2 === 0.30000000000000004)
  console.log('Hello');

// 3)
console.log(Math.sin(90 * Math.PI / 180)); //return 1
console.log(Math.cos(0 * Math.PI / 180)); //return 1
console.log();

//4) convert string to number
console.log(parseInt('0123.123', 10));
console.log(parseFloat('123.123', 10));
console.log(parseInt('0x10'));
console.log(10 + +'0x43'); // convert '0x43' to Number 0x43,
console.log(10 + '0x43'); // convert '0x43' to Number 0x43, 67
console.log();

// 5) NAN & infinity
console.log(isFinite(1000 / 0));
// false if the argument is positive or negative Infinity or NaN or undefined; otherwise, true.

//6) BigInt()

const int_1 = 123123123123123n;
const int_2 = 123123123123123;

if (int_1 !== int_2) console.log('int_1 !== int_2');

const big_int_1 = 123123123123123n;
const big_int_2 = BigInt(123123123123123);
if (big_int_1 === big_int_2)
  console.log('big_int_1 === big_int_2');

console.log();
console.log(parseInt('11', 2));

console.log(isNaN(NaN));



