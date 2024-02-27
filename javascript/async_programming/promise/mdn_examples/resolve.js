

// then
// Promise<string>.then<string,never>(
// on fulfilled?: ((value: string) => (PromiseLike<string> | string)) | undefined | null,
// on rejected?: ((reason: any) => PromiseLike<never>) | undefined | null):
Promise.resolve('Success')
    .then((value) => {
        console.log('👋 '+value); // Success
    }, (value) => {
        console.log(value); // not called
    })



// NOTE: reject
Promise.reject('Failed')
    .then((value) => {
        console.log(value); // not called
    }, (value) => {
        console.log('🐞 ' + value); // Failed
    })
