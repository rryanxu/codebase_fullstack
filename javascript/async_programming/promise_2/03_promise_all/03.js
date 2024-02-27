const axios = require('axios');


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

// https://axios-http.com/docs/post_example

// Promise.all(iterable)
// The Promise.all(iterable) method returns a single Promise that resolves when all the promises in the iterable argument have resolved or when the iterable argument contains no promises. It rejects with the reason of the first promise that rejects.

const users = []

for (let i = 0; i <= 10; ++i) {
    users.push(
        axios.get(`https://jsonplaceholder.typicode.com/users/${i}`)
            .then(res => res)
            .catch(err => err))
}

Promise.all(users)
    .then(res => res.map(item => console.log(item.data))
    )
    .catch(err => {
        console.log(err)
    })

