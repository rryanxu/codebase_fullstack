class IncreasingCounter {
    _count = 0;
    get value() {
        console.log('Getting the current value!');
        return this._count;
    }
    increment() {
        this._count++;
    }
}

let ins =  new IncreasingCounter()
ins._count=10
console.log(ins._count)


