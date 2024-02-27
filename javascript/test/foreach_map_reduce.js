let arr1 = [1, 2, 3, 4, 5]
let arr2 = [1, 2, 3, 4, 5]

arr1.forEach((num, index) => {
    return arr1[index] = num * 2
})


let arr3 = arr2.map(num => num * 2).filter(num => num > 5)

const reducer = (accumulator, currentValue) => accumulator + currentValue


console.log("arr1: " + arr1)
console.log("arr2: " + arr2)
console.log("arr3: " + arr3)

console.log(arr2.reduce(reducer, 5))
