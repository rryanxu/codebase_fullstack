// https://stackoverflow.com/questions/31755186/es6-arrow-functions-not-working-on-the-prototype
// const Promise = (executor) => {}


// NOTE: arrow function doesn't work well with prototype
function Promise(executor) {
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    this.callbacks = [];
    const self = this;

    function resolve(data) {
        if (self.PromiseState !== 'pending') {
            return;
        }
        self.PromiseState = 'fulfilled';
        self.PromiseResult = data;

        self.callbacks.forEach(item => {
            item.onResolved(data);
        });
    }

    function reject(data) {
        if (self.PromiseState !== 'pending') {
            return;
        }
        self.PromiseState = 'rejected';
        self.PromiseResult = data;

        self.callbacks.forEach(item => {
            item.onRejected(data);
        });
    }

    try {
        executor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}


Promise.prototype.then = function (onResolved, onRejected) {
    if (this.PromiseState === 'fulfilled') {
        onResolved(this.PromiseResult);
    }
    if (this.PromiseState === 'rejected') {
        onRejected(this.PromiseResult);
    }

    if (this.PromiseState === 'pending') {
        this.callbacks.push({
            onResolved: onResolved,
            onRejected: onRejected
        });
    }
}





