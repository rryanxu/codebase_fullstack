let a = 0;

function print(num) {
    console.log(num)
}

function Fibonacci(num) {
    if (num < 1) {
        return 0
    }
    if (num === 1) {
        return 0
    } else if (num === 2) {
        return 1
    }
    return Fibonacci(num - 2) + Fibonacci(num - 1)
}

function sum(callback) {

    // skip io
    let b = Fibonacci(20)
    // 0 + 1
    a = 10
    callback(b)
}

sum(print)

