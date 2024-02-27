// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// promise vs setTimeout
// https://stackoverflow.com/questions/38752620/promise-vs-settimeout#:~:text=The%20reason%20the%20promise%20is,so%20it%20resolved%20right%20away.
// The reason the promise is executing before your timeout is that the promise isn't actually waiting for anything so it resolved right away.

// https://www.loginradius.com/blog/async/callback-vs-promises-vs-async-await/#:~:text=The%20await%20keyword%20is%20used,the%20use%20of%20callbacks%20in%20.&text=In%20using%20async%20and%20await,prepended%20when%20calling%20a%20promise.

// https://javascript.info/event-loop

console.log('script start');

setTimeout(function () {
    console.log('setTimeout');
}, 0);

Promise.resolve()
    .then(function () {
        console.log('promise1');
    })
    .then(function () {
        console.log('promise2');
    });


console.log('script end');

