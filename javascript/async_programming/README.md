





# XMLHttpRequest
# jQuery(based on XMLHttpRequest)
> All jQuery functions use XMLHttpRequest object in the background, but provide additional functionality that you don't have to do yourself.
> 
> 
https://stackoverflow.com/questions/4657287/what-is-the-difference-between-xmlhttprequest-jquery-ajax-jquery-post-jquery



# Fetch API
> finally stable in node.js v21+

https://blog.logrocket.com/fetch-api-node-js/


## handle error
https://developer.mozilla.org/en-US/docs/Web/API/fetch

must handle error by yourself


## Response.body

https://byby.dev/js-fetch-get-response-body


Response.body is not directly accessible as a string or an object, but rather as a stream of data that can only be read once. This is a key difference between the Fetch API and the XMLHttpRequest API, which can be used to read the response multiple times.

To handle the response body, you need to use one of the methods of the Response object that returns another promise that resolves to the parsed data. These methods are:

- [`.json()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/json): Returns a Promise that resolves with the parsed [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON).
- [`.text()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/text): Returns a promise that resolves with a [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String).
- [`.blob()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/blob): Returns a promise that resolves with a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob), which represents a file-like object of immutable, raw data.
- [`.arrayBuffer()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/arrayBuffer): Returns a promise that resolves with an [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), which represents a generic, fixed-length binary data buffer.
- [`.formData()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/formData): Returns a promise that resolves with a [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData), which is a key-value pair data structure used to submit form data.






## response object
https://developer.mozilla.org/en-US/docs/Web/API/Response



# Axios

how does axios work?

https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/



Once an HTTP POST request is made, Axios returns a promise that is either fulfilled or rejected, depending on the response from the backend service.

To handle the result, you can use the then() method, like this:

```javascript
axios.post('/login', {
  firstName: 'Finn',
  lastName: 'Williams'
})
.then((response) => {
  console.log(response);
}, (error) => {
  console.log(error);
});
```




If the promise is fulfilled, the first argument of `then()` will be called; if the promise is rejected, the second argument will be called. According to the [Axios documentation](https://www.npmjs.com/package/axios#response-schema), the fulfillment value is an object containing the following properties:

```javascript
{
  // `data` is the response that was provided by the server
  data: {},

  // `status` is the HTTP status code from the server response
  status: 200,

  // `statusText` is the HTTP status message from the server response
  statusText: 'OK',

  // `headers` the headers that the server responded with
  // All header names are lower cased
  headers: {},

  // `config` is the config that was provided to `axios` for the request
  config: {},

  // `request` is the request that generated this response
  // It is the last ClientRequest instance in node.js (in redirects)
  // and an XMLHttpRequest instance the browser
  request: {}
}
```




Axios vs New Fetch API
https://blog.logrocket.com/axios-vs-fetch-best-http-requests/




# js function

`text()` will give you the result in string format, and `json()` will parse it from JSON and convert it into an object.
