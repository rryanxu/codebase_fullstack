const fs = require('fs');


// callbacks
fs.readFile('quotes.txt',
    (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data.toString());
        }
    });
