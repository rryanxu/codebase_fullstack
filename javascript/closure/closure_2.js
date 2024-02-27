// private member
function Person(name) {
    let _age

    function setAge(n) {
        _age = n
    }

    function getAge() {
        return _age
    }

    return {
        name: name,
        getAge: getAge,
        setAge: setAge
    }
}

let p1 = Person('ryan')
p1.setAge(10)
console.log(p1.getAge())
