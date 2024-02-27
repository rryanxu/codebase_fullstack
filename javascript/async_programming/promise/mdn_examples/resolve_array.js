const p = Promise.resolve([1, 2, 3])
p.then(data => {
  data.forEach(item => {
    console.log(item)
  })
})
