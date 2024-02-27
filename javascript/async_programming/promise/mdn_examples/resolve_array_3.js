const testPromise = (flag) => {
  return new Promise((resolve, reject) => {
    if (flag) resolve('Success')
    else reject('Failed')
  })
}

const app = async () => {
  const result = await testPromise(true)
  console.log(typeof result)
  console.log(result)
}

app()
