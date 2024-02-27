// https://zhuanlan.zhihu.com/p/69106037
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

let obj = {
    _age: 18,
    get age() {
        return `I'm ${this._age} years old`
    },
    set age(val) {
        this._age = Number(val)
    }
}
console.log(obj.age) // I'm 18 years old
obj.age = 19
console.log(obj.age) // I'm 19 years old


let target = { age: 18, name: 'Niko Belli' }
let handlers={
    get(target, property){
        return `${property}: ${target[property]}`
    },

    set (target, property, value){
        target[property] =value
    }
}

let proxy = new Proxy(target,handlers)
proxy.age=19
console.log(target.age, proxy.age)
