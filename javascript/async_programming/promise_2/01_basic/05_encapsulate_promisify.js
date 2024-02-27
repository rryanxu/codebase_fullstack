const util = require('util');
const fs = require('fs');

// promisify() encapsulate callback function
const stat = util.promisify(fs.stat);

stat('quotes1.txt')
    .then(stats => {
        console.log(stats)
    })
    .catch(err => {
        console.log(err)
    })


