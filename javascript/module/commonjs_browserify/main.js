const {User, printAge, printName} = require('./utils');

const user = new User('Bob', 21);
printAge(user);
printName(user);
console.log(user);
