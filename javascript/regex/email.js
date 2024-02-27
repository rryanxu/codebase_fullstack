

const EMAIL_REGEX_SIMPLE= /^([a-zA-z0-9]{3,})(@gmail.com)$/

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

let email="as1123124212sadf@gmail.com"


console.log(
    email.match(EMAIL_REGEX_SIMPLE)
)
console.log(
    EMAIL_REGEX_SIMPLE.test(email)

)
