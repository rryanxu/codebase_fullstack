const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'foo');
});

// promise3 equals to:
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('bar');
    }, 1000);
}).then(res => {
    console.log(res);
})
// bar

// This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.
Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log(values);
    });
// expected output: Array [3, 42, "foo"]
