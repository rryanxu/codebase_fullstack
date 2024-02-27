// https://gomakethings.com/getting-html-with-fetch-in-vanilla-js/
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

const url = 'https://jsonplaceholder.typicode.com/posts'
const data = {
    a: 10,
    b: 20,
};

axios
    .post(url, data, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        },
    })
    // .then(res => {
    //     console.log(res.data)
    //     console.log(res['data'])
    // })
    // destructuring res here
    .then(({data}) => {
        console.log(data);
    });

