const date = new Date();
const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];

console.log([month,day,year])
console.log([hour,minutes,seconds])


const d = new Date()
console.log(d.toLocaleDateString())
console.log(d.toLocaleTimeString())
console.log(d.toLocaleString())
