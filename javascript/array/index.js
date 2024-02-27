var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(myFunction);

// findIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number;

function myFunction(value, index, array) {
  return value > 18;
}

console.log(numbers[first]);

const firstItemGreaterThan18 = numbers.find(
    (value, index, array) => value > 18);
console.log(firstItemGreaterThan18);


