// computed property names
const randNum = Math.random();


const obj = {
    [randNum]: 23,
}

const {[randNum]: myKey} = obj;


console.log(myKey);
