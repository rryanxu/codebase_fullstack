let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('OK');
        reject('Error');
    }, 100);
});

p.then(value => {
    console.log(111);
    // throw 'error!';
}).then(value => {
    console.log(222);
}).then(value => {
    console.log(333);
}).catch(reason => {
    console.warn(reason);
});
