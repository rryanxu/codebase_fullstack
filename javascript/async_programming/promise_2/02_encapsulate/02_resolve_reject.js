// https://stackoverflow.com/questions/31755186/es6-arrow-functions-not-working-on-the-prototype
// const Promise = (executor) => {}


// NOTE: arrow function doesn't work well with prototype
function Promise(executor) {
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    const self = this;
    function resolve(data) {
        self.PromiseState = 'fulfilled';
        self.PromiseResult = data;
    }

    function reject(data) {
        self.PromiseState = 'rejected';
        self.PromiseResult = data;
    }

    executor(resolve, reject);
}


// the following two code snippets are equivalent
// Promise.prototype.then = function(onResolved, onRejected) {
//     console.log('hello');
//     console.log('hello');
// }

Promise.prototype.then = (onResolved, onRejected) => {
    console.log('hello');
    console.log('hello');
}

const p = new Promise((resolve, reject) => {
    resolve('OK');
});

p.then(value => {
    console.log(value);
}, reject => {
    console.log(reject);
})
