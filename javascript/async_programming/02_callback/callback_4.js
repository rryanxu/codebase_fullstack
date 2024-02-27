var fs = require("fs");
var c

function f(x) {
    console.log(x)
}

function writeFile(callback) {
    fs.writeFile('input.txt', 'written by fs.writeFile', function (err) {
        if (!err) {
            console.log("All Done!")
            c = 1
            // callback way
            callback(c)
        }
    });
}

c = 0
writeFile(f)

