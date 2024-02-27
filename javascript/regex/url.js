const REGEX_URL = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?$/i;

const t = 'https://www.google.com'
console.log(REGEX_URL.test(t))
