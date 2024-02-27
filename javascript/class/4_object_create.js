let person1 = {
    name: 'ryan',
    age: 22,
    greeting: function () {
        return  'Hi! ' + this.name + '.'
    }
}

console.log('person1')
console.log(person1.name)
console.log(person1.age)
console.log(person1.greeting()+'\n')



let person2= Object.create(person1)

console.log('person2')
console.log(person2.name)
console.log(person2.greeting())
