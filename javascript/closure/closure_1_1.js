function f1(a, b) {
    let n = 999;
    let sum = a + b

    function f2(c) {
        console.log(n);
        console.log(sum);
        console.log(c+sum)
    }

    return f2;
}

let result = f1(1,2);
result(3); // 999

