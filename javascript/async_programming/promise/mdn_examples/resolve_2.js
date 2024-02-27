let p1 = Promise.resolve(521);
// if we pass a non-promise object, the result is a successful promise
// if we pass a promise object, the parameter determines the resolve result
let p2 = Promise.resolve(new Promise((resolve, reject) => {
    // resolve('OK');
    reject('Error');
}));
// console.log(p2);
p2.then(data=>{
    console.log(data);
}).catch(reason => {
    console.log(reason);
});
