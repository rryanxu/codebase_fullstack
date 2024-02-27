// Demonstrate the use of Object.prototype


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods

// a typical object inherits properties (including methods) from Object.prototype, although these properties may be shadowed (a.k.a. overridden).

// Changes to the Object.prototype object are seen by all objects through prototype chaining, unless the properties and methods subject to those changes are overridden further along the prototype chain. This provides a very powerful although potentially dangerous mechanism to override or extend object behavior. To make it more secure, Object.prototype is the only object in the core JavaScript language that has immutable prototype — the prototype of Object.prototype is always null and not changeable.

// You should avoid calling any Object.prototype method directly from the instance, especially those that are not intended to be polymorphic

Object.prototype.print = function() {
  console.log(this);
};

function Person(first, last, age, gender, interests) {

  // property and method definitions
  this.name = {
    'first': first, 'last': last,
  };
  this.age = age;
  this.gender = gender;
  //...see link in summary above for full definition
}

let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

console.log(person1)
person1.print();
