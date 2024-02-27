const PHONE_REGEX = /^(\d{3})[.-]?(\d{3})[.-]?(\d{4})$/

let num = '12345678900'
console.log(PHONE_REGEX.test(num))
console.log(num.match(PHONE_REGEX))



