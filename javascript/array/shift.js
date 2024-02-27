let fruits = ["Strawberry", "Banana", "Mango"]


// remove the last one
console.log(fruits.pop())
// remove the first one
console.log(fruits.shift())


let fruits_2 = ['Avocado', 'Banana', 'Blackberries', 'Blackcurrant', 'Blueberries', 'Breadfruit']


let pos = fruits_2.indexOf('Banana')
fruits_2.splice(pos,4)
console.log(fruits_2)


