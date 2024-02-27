class User{
    constructor(name,age) {
        this._name= name;
        this._age=age;
    }
}


function printName(user){
    console.log(`User's name is ${user._name}`)
}

function printAge(user){
    console.log(`User is ${user._age} years old`)
}


module.exports={
    User,
    printName,
    printAge
}
