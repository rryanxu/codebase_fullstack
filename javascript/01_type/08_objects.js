// Person.prototype is an object shared by all instances of Person. It forms part of a lookup chain (that has a special name, "prototype chain"): any time you attempt to access a property of Person that isn't set, JavaScript will check Person.prototype to see if that property exists there instead. As a result, anything assigned to Person.prototype becomes available to all instances of that constructor via the this object.
//
// This is an incredibly powerful tool. JavaScript lets you modify something's prototype at any time in your program, which means you can add extra methods to existing objects at runtime:


//you need read the object chapter

function Person(first, last) {
    this.first = first;
    this.last = last;
}
Person.prototype.fullName = function() {
    return this.first + ' ' + this.last;
};
Person.prototype.fullNameReversed = function() {
    return this.last + ', ' + this.first;
};

Person.prototype.toString = function (){
    return '<Person: '+this.fullName()+'>'
}


var s=new Person('Ryan', 'Lee')
console.log(s.fullName())
console.log(s.fullNameReversed())
console.log(s.toString())



String.prototype.reversed = function (){
    let r = '';
    for(let i=this.length-1; i>=0; --i){
        r +=this[i]
    }
    return r;
}
// our new method even works on string literals
console.log("This is now be reversed".reversed())



// the following code is so confused
function trivialNew(constructor, ...args) {
    var o = {}; // Create an object
    constructor.apply(o, args);
    return o;
}

var s2 = trivialNew(Person,"Ryan","Lee")
console.log(s2)

