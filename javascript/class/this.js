// NOTE
class Logger {
    constructor() {
        // 1)
        this.printName = this.printName.bind(this)

        // 2)
        // this.printName = () => this
    }
    printName(name = 'there') {
        this.print(`Hello ${name}`);
    }

    print(text) {
        console.log(text);
    }
}

const logger = new Logger();
const { printName } = logger;
printName(); // TypeError: Cannot read property 'print' of undefined
