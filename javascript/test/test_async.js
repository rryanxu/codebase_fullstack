




// Promise.resolve()
//     .then(function (){
//         console.log(x)
//     })



// const myPromise = new Promise((resolve, reject ) =>{
//     let x = runtime.objects.Mouse.x
//     let y = runtime.objects.Mouse.y
// })
//
// myPromise.then(alert(x+" "+y))




const getPosition = new Promise((resolve, reject) => {
    resolve(function (){
        let x = runtime.objects.Mouse.x
        let y = runtime.objects.Mouse.y
    })
})

Promise.all(

).then((message) =>{
    alert(x+" "+y)
})
