const fs = require('fs');

const readFile = path =>{
    return new Promise((resolve, reject) => {
      fs.readFile(path, (err, data) => {
         if(err){
            reject(err);
         }
         resolve(data.toString());
      });
    })
}

readFile('quotes.txt').then(data => {
    console.log(data)
}, err => {
    console.log(err)
})
