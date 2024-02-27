export default class User{
    constructor(name,age) {
        this._name= name;
        this._age=age;
    }
}


export function printName(user){
    console.log(`User's name is ${user._name}`)
}

export function printAge(user){
    console.log(`User is ${user._age} years old`)
}
