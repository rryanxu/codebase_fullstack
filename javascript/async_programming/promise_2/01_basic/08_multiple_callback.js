let p = new Promise((resolve, reject) => {
    resolve('OK');
});

p.then(value => {
    console.log(value);
});

p.then(value => {
    console.log(value);
});

p.then(value => {
    console.log(value);
});

p.then(value => {
    console.log(value);
});


// Ok
// Ok
// Ok
// Ok

