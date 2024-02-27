// promise
// https://www.youtube.com/watch?v=DHvZLI7Db8E
let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a === 3) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})


p.then((message) => {
    console.log('This is in the then ' + message)
}).catch((message) => {
    console.log('This is in the catch ' + message)
})
