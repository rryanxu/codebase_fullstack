outerFunc = (outerVar) => {
    const outerVar2 = 'Hi'
    return (innerVar) => {
        console.log(outerVar)
        console.log(innerVar)
        console.log(outerVar2)
    }
}

const newFunc = outerFunc('outside')
newFunc('inner')
