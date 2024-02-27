
const p2 = Promise.reject([1, 2, 3])

p2.then(data => {
  data.forEach(item => {
    console.log(`resolve ${item}`)
  })
}).catch(data => {
      data.forEach(item => {
        console.log(`reject ${item}`)
      })
    }
)
