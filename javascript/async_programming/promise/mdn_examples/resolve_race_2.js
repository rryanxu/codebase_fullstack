// The race function returns a Promise that is settled the same way (and takes the same value) as the first promise that settles amongst the promises of the iterable passed as an argument.
//
//     If the iterable passed is empty, the promise returned will be forever pending.
//
//     If the iterable contains one or more non-promise value and/or an already settled promise, then Promise.race will resolve to the first of these values found in the iterable.



// we are passing as argument an array of promises that are already resolved,
// to trigger Promise.race as soon as possible
const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

const p = Promise.race(resolvedPromisesArray);
// immediately logging the value of p
console.log(p);

// using setTimeout we can execute code after the stack is empty
setTimeout(function(){
    console.log('the stack is now empty');
    console.log(p);
});

// logs, in order:
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "fulfilled", <value>: 33 }
