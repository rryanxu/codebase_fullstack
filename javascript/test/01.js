function log(x, y) {
    if (typeof y === 'undefined') {
        y = 'World'
    }
    console.log(x, y)
}


log('Hello')



function log(x, y) {
    y = y || 'World';
    console.log(x, y);
}


function Point(x=0,y=0){
    this.x=x;
    this.y=y;
}

console.log(Point)


