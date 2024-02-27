const Redis = require('redis')
const axios = require('axios')
const redisClient = Redis.createClient()

const url = 'https://jsonplaceholder.typicode.com/photos/'
const DEFAULT_EXPIRATION = 3600

redisClient.connect().then(() => {
  console.log('Redis connected')
})

const testRedis = async () => {
  await redisClient.get('photos', (err, data) => {
    if(err) console.log(err)

    if(data !== null) {
      console.log('Cache hit')
      console.log(data)
    }
  })

  // if (result !== null) {
  //   console.log(JSON.parse(result)[0])
  // } else {
  //   const data = await axios.get(url)
  //   await redisClient.set('photos', JSON.stringify(data.data), {
  //     EX: 3600,
  //   })
  // }

}

// const testRedis = async () => {
//   await redisClient.get('photos', async (err, data) => {
//     if(err) throw err
//     if(data !== null) {
//       console.log(JSON.parse(data)[0])
//     } else {
//       const data = await axios.get(url)
//       await redisClient.set('photos', JSON.stringify(data.data), {
//         EX: 3600,
//       })
//       console.log(data)
//     }
//   })
// }

// const getOrSetCache = (key, cb) => {
//   return new Promise((resolve, reject) => {
//     redisClient.get(key).then((data) => {
//       console.log(data)
//     }).catch((err) => {
//       console.log(err)
//     })
//   })
// }

const getOrSetCache =  (key, cb) => {
  return new Promise((resolve, reject) => {
    // NOTE: redis might change get() definition, so it doesn't work here
    redisClient.get(key, async (err, data) => {
      if (err) return reject(err)
      if (data !== null)
        return resolve(JSON.parse(data))

      const freshData = await cb()
      await redisClient.set(key, JSON.stringify(freshData), {
        EX: DEFAULT_EXPIRATION,
      })
      resolve(freshData)
    })
  })
}

const getPhotos2 = async () => {
  getOrSetCache(`photos`, async () => {
    const {data} = await axios.get(url)
    return data
  }).then((data) => {
    console.log(data)
  })
}

// getPhotos2()
testRedis()

//
// const test = (num) => {
//   return new Promise((resolve, reject) => {
//     if (num === 1)
//       return resolve('1')
//     if (num === 2)
//       return resolve('2')
//     if (num === 3)
//       return resolve('3')
//     console.log('test')
//   })
// }
//
// const {data} = test(1)
// console.log(data)
