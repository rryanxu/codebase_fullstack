
// there are two ways to create an array
var a_2 = new Array();
var a = [];

a[0] = 'dog';
a[1] = 'cat';
a[2] = 'hen';
console.log(a.length)


for (var i =0; i!==a.length; ++i){
    console.log(a[i])
}
console.log()

// ES2015 introduced the more concise for...of loop for iterable objects such as arrays:
for(const current_value of a){
    console.log(current_value)
}


// Not recommend for in loop for array type
console.log('---------------------------------------------');
['dog', 'cat', 'hen'].forEach(function(value, index, array) {
    // Do something with currentValue or array[index]
    array[index] = value + 's';
    console.log(array[index]);
    // console.log(value);
});

// If you want to append an item to an array simply do it like this:
a.push('husky');

console.log(a.concat('tiger'))
console.log(a.join('  '))
