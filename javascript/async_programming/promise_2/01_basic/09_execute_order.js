let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK');
    }, 2000);
});

p.then(value => {
    console.log(value);
},reject=>{

})

