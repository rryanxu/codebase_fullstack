// NOTE: https://www.bilibili.com/video/BV1xh411i74F?from=search&seid=11470327818310414509&spm_id_from=333.337.0.0

// https://github.com/jackChenJJJ/webinterview/blob/main/JavaScript/closure%E9%97%AD%E5%8C%85/demo4.html

// private member
let counter = (function () {
    {
        let _counter = 0
        const changeBy = val => {
            _counter += val;
        }
        return {
            increment: () => {
                changeBy(1)
            },
            decrement: () => {
                changeBy(-1)
            },
            value: () => {
                return _counter
            }
        }
    }
})()

console.log(counter.value())
counter.increment()
console.log(counter.value())


let Counter = () => {
    {
        let _counter = 0
        const changeBy = val => {
            _counter += val;
        }
        return {
            increment: () => {
                changeBy(1)
            },
            decrement: () => {
                changeBy(-1)
            },
            value: () => {
                return _counter
            }
        }
    }
}

let counter2 = Counter()
console.log(counter2.value())
counter2.increment()
console.log(counter2.value())
