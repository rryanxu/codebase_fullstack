import User, {printName as printUserName, printAge} from './utils.js'

const user = new User('Bob', 21)
printAge(user)
printUserName(user)
console.log(user)
