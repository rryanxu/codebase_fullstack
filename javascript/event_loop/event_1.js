// https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
// single thread + event loop => async

console.log('script start');
setTimeout(() => console.log('set time out start'),0)

new Promise((resolve,reject) => {
    console.log('start for loop');
    for(let i=0;i<10000;i++){
        i === 99 && resolve()
    }
}).then(() => console.log('execute then function'))

console.log('end');


// script start
// start for loop
// end
// execute then function
// set time out start
