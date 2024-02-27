let p = new Promise((resolve, reject) => {
    //1. resolve function
    // resolve('ok'); // pending   => fulfilled (resolved)
    //2. reject function
    // reject("error");// pending  =>  rejected
    //3. throw error
    // throw 'error'; // pending => rejected
});

console.log(p);
