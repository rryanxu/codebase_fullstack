const c = require('ansi-colors');

const rand = (min, max) => {
  return Math.ceil(Math.random() * (max - min + 1)) + min - 1;
};

new Promise(
    (resolve, reject) => {
      console.log('start');
      setTimeout(() => {
        let n = rand(1, 100);

        if (n <= 50) {
          resolve(n);
        } else {
          reject(n);
        }
      }, 10);
      console.log('end');

    })
    // It allows you to associate handlers with an asynchronous action's eventual success value or failure reason
    .then(value => {
      console.log(c.green(`resolved: ${value}`));
    })
    .catch(reason => {
      console.log(c.red(`rejected: ${reason}`));
    });
