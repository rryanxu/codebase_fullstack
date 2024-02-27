const fs = require('fs');

// Promises
const p = new Promise((resolve, reject) => {
  fs.readFile('quotes.txt',
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data.toString());
        }
      });
});

p.then(data => {
  console.log(data);
})
 .catch(err => {
   console.log(err);
 });
