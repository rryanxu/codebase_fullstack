// ES5
function Point5(x, y) {
    this.x = x;
    this.y = y;
}

Point5.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')'
}

let p5 = new Point5(1, 2);
console.log(p5.toString())

console.log()




