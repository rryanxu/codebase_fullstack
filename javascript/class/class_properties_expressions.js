let methodName = 'getArea';

class Square {
    constructor(x) {
        this._x = x
    }

    [methodName]() {
        return this._x * this._x
    }
}

let s = new Square(10);
console.log(s.getArea())
