const arr = [1, 2, 3, 4, 5, 6, 7, 8]


// 36
console.log(arr.reduce((acc, curr) => acc + curr, 0))

// 41
console.log(arr.reduce((acc, curr) => acc + curr, 5))

// 40320
console.log(arr.reduce((acc, curr) => acc * curr))
