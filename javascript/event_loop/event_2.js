function foo(b) {
    let a = 10
    return a + b + 11
}

function bar(x) {
    let y = 3
    return foo(x * y)
}

const baz = bar(7) // assigns 42 to baz

console.log(baz) // 42
