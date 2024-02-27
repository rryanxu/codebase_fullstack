// a is const type
const a = 10
console.log(a)

// NOTE:
// a is const type
// a=12


// arr is constant reference to array
const arr = []
arr.push(1)
arr.push(2)
arr.push(3)

console.log(arr)


// https://stackoverflow.com/questions/23436437/why-can-i-change-value-of-a-constant-in-javascript
// x is also a constant reference to object
const x = {}
x.foo = 'bar'

console.log(x)

x.foo = 'bar2'
console.log(x)
