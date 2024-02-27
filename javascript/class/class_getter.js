class MyClass{
    #privateField;
    constructor(_x) {
        this.x=_x;
    }
    get prop() {
        return this.x;
    }
    set prop(value) {
        this.prop=value
    }
}

let ins = new MyClass(10)
console.log(ins.prop)
console.log(ins.x)
