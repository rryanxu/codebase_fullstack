// https://gomakethings.com/getting-html-with-fetch-in-vanilla-js/
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

const appendElement = (data) => {
  document.getElementById('root').innerText = data;
};

fetch('https://jsonplaceholder.typicode.com/posts/3')
    .then(res => res.text())
    .then(data => appendElement(data));



