// https://stackoverflow.com/questions/45911648/how-to-replace-all-chinese-character-from-a-string

const str = "Arc's 弧"
console.log(str)
// by your regex
console.log(str.replace(/[^a-z\d\s]+/gi, ''));
// by new regex which removes non-ascii characters
console.log(str.replace(/[^\x00-\x7F]/g, ""));
