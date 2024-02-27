const axios = require('axios');

// res was automatically converted to js object
axios.get('https://jsonplaceholder.typicode.com/posts/3')
    .then(res => {
      console.log(typeof res);
      return res.data;
    })
    .then(data => console.log(data));

// .json()
// .text()
// .blob()
// .arrayBuffer()
// .formData()

// res.body is not directly accessible as a string or an object
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(data => console.log(data));
