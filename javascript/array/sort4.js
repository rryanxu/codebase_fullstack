let numberArray = [40, 1, -50, 10];

function compareNumbers(a, b) {
    return a*a - b*b;
    // NOTE: do not use
    // return a*a < b*b
}


numberArray.sort(compareNumbers); // [1, 5, 40, 200]

console.log(numberArray)
