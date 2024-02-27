
// https://blog.postman.com/understanding-async-await-in-node-js/#:~:text=Async%20%2F%20await%20is%20a%20native,code%20organized%20and%20more%20readable.


async function bakeCookies() {
  // Simulating baking time
  await new Promise((resolve) => setTimeout(resolve, 2000));
}

async function serveCookies() {
  const cookies = await bakeCookies();
  console.log('The cookies are now ready to serve!');
}

serveCookies();
