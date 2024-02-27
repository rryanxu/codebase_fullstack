const fs = require('fs')


fs.readFile('02.txt','utf-8',function (err,data){
    fs.appendFile('03.txt',data,'utf-8',(err1 => {
        if(err1){
            console.log("err")
        }
    }))
})
