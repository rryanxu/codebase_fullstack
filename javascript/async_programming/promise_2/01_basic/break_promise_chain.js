let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK');
    }, 100);
});

p.then(value => {
    console.log(111);
    // NOTE:
    return new Promise(() => {});
}).then(value => {
    console.log(222);
}).then(value => {
    console.log(333);
}).catch(reason => {
    console.warn(reason);
});
