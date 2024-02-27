// https://stackoverflow.com/questions/22156326/private-properties-in-javascript-es6-classes

// implementation
class Person {
    constructor(name) {
        let _name = name
        this.setName = function(name) { _name = name; }
        this.getName = function() { return _name; }
    }
}


let p = new Person('Ryan')
p.setName('bryan')
console.log(p.getName())



class Foo {
    #bar;// declare private variable called bar

    constructor() {
        this.#bar = "foobar";//define private variable called"bar"
    }

    get props(){
        return this.#bar
    }
}

let f = new Foo();
console.log(f.bar)
console.log( )
