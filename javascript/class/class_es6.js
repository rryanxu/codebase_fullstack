// ES6
class Point6 {
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')'
    }
}

// NOTE
Point6.prototype.toValue = function () {
    return this.x + this.y;
}

console.log(typeof Point6)
console.log(Point6 === Point6.prototype.constructor)
let p6 = new Point6(3, 4)
console.log(p6)
console.log(p6.toString())
console.log(p6.toValue())


// NOTE
Object.assign(Point6.prototype,{
    minus(){
        return this.x-this.y
    }
})


console.log(p6.minus())




