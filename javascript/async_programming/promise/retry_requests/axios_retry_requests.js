// this is demo for retry requests 4 times if fails

// https://javascript.plainenglish.io/how-to-retry-requests-using-axios-64c2da8340a7
// axios interceptor


const axios = require('axios');
const c = require('ansi-colors');

// const URL='https://jsonplaceholder.typicode.com/todos/1'
const URL = 'https://jsonplaceholder.typicode.com/todos/error/1';

axios.interceptors.response.use(undefined, (err) => {
  const {config, message} = err;
  if (!config || !config.retry) {
    return Promise.reject(err);
  }

  // reject condition
  // retry while Network timeout or Network Error
  // if (!(message.includes('timeout') || message.includes('Network Error'))) {
  //   return Promise.reject(err);
  // }

  // retry while didn't get work as expected
  if (message.includes('ERR')) {
    return Promise.reject(err);
  }

  config.retry -= 1;
  const delayRetryRequest = new Promise((resolve) => {
    setTimeout(() => {
      console.log('retry the request', config.url);
      resolve();
    }, config.retryDelay || 1000);
  });
  return delayRetryRequest.then(() => axios(config));
});

// when request, can set retry times and retry delay time
// axios.get(url, {retry: 3, retryDelay: 3000});

axios.get(URL, {retry: 4, retryDelay: 10})
     .then(res => res.data)
     .then(data => console.log(data))
     .catch(reason => {
       console.log(c.red(reason.message));
       // console.log(reason.message);
     });



