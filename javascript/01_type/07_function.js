//1)
function add(x, y) {
  var total = x + y;
  return total;
}

console.log(add(10, 20));

function avg() {
  var sum = 0;
  for (var i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i];
  }
  return sum / arguments.length;
}

console.log(avg(2, 3, 4, 5));

// avg() seems a little verbose. To reduce this code a bit more we can look at substituting the use of the arguments array through "Rest parameter syntax".

//args is a variable name, it coule be args2, args3
//... is rest parameter operator
function avg_minimal_code(...args) {
  var sum = 0;
  for (let value of args) {
    sum += value;
  }
  return sum / args.length;
}

avg_minimal_code(2, 3, 4, 5); // 3.5

//if you want pass a array to above function, you need to rewrite it
function avgArray(arr) {
  var sum = 0;
  for (var i = 0, j = arr.length; i < j; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(avgArray([2, 3, 4, 5]));

//But it would be nice to be able to reuse the function that we've already created. Luckily, JavaScript lets you call a function with an arbitrary array of arguments, using the apply()
// method of any function object.
// This emphasizes the fact that functions are objects too.
console.log(avg_minimal_code.apply(null, [2, 3, 4, 5]));

//JavaScript lets you create anonymous functions.
var avg_anonymous = function() {
  var sum = 0;
  for (var i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i];
  }
  return sum / arguments.length;
};

console.log(avg_anonymous(10, 123, 12142));

// another anonymous function
var a = 1, b = 2;
(function() {
  ++a;
  ++b;
})();

console.log(a + '  ' + b);

// arrow function
const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium',
];

console.log(materials.map(material => material.length));

