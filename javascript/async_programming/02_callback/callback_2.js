let fs = require("fs");
let c

function f(x) {
    console.log(x)
}

// heavy job
// please compare callback_2.js and 3, 4 file
function writeFile() {
    fs.writeFile('input.txt', 'written by fs.writeFile', function (err) {
        if (!err) {
            console.log("All Done!")
            c = 1
        }
    });
}


c = 0
writeFile()
f(c)

