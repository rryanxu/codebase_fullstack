// http://www.gwtproject.org/doc/latest/DevGuideHtml5Storage.html
// https://www.youtube.com/watch?v=GihQAC1I39Q
// NOTE: key is unique
localStorage.setItem('name','Bob')
console.log(localStorage.getItem('name'))
// localStorage.removeItem('name')


sessionStorage.setItem('name','Ryan')
console.log(sessionStorage.getItem('name'))
// sessionStorage.removeItem('name')


const now=new Date()

// getTime return milliseconds
now.setTime(now.getTime()+1000 * 5)
const time =now.toUTCString()
console.log(time)

console.log(new Date(2022,3,9,12,50,0).toUTCString())
// cookie will expire in 10 sec
document.cookie = "name=ryan; expires="+new Date(2022,3,9,12,58,0).toUTCString()+"; path=/"
document.cookie = "name3=hao; expires="+time+"; path=/"
