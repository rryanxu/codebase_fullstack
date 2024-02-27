function angle(cx, cy, ex, ey) {
    let dy = ey - cy;
    let dx = ex - cx;
    let theta = Math.atan2(dy, dx); // range (-PI, PI]
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    //if (theta < 0) theta = 360 + theta; // range [0, 360)
    return theta;
}


function detectswipe(func) {
    swipe_det = new Object();
    swipe_det.sX = 0;
    swipe_det.sY = 0;
    swipe_det.eX = 0;
    swipe_det.eY = 0;
    var direc = "";
    document.addEventListener('touchstart', function (e) {
        var t = e.touches[0];
        swipe_det.sX = t.screenX;
        swipe_det.sY = t.screenY;
    }, false);
    document.addEventListener('touchmove', function (e) {
        e.preventDefault();
        var t = e.touches[0];
        swipe_det.eX = t.screenX;
        swipe_det.eY = t.screenY;
    }, false);
    document.addEventListener('touchend', function (e) {
        let ang = angle(swipe_det.sX, swipe_det.sY, swipe_det.eX, swipe_det.eY)

        // swipe right
        if (swipe_det.sX > window.innerWidth * 0.6 && swipe_det.eX - swipe_det.sX > window.innerWidth * 0.1) {
            if (ang < 20 && ang > -20) {
                direc = 'r'
            }
        }
        // swipe left
        if (swipe_det.sX < window.innerWidth * 0.4 && swipe_det.sX - swipe_det.eX > window.innerWidth * 0.1) {


            if (ang > 160 || ang < -160) {
                direc = 'l'
            }
        }

        if (direc !== "") {
            if (typeof func == 'function') func(direc);
        }
        direc = "";
    }, false);
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') {
            direc = 'r'
        } else if (e.key === 'ArrowLeft') {
            direc = 'l'

        }
        if (direc !== "") {
            if (typeof func == 'function') func(direc);
        }
        direc = "";
    })
}

const zeroPad = (num, places = 4) => String(num).padStart(places, '0')


function myFunc(d) {
    fetch('http://192.168.50.10/problems/links_new.json')
        .then(res => res.json())
        .then(data => {
            // alert(d)
            let href = window.location.href.split('/')
            let fileName = href[href.length - 1].split('.')[0]
            if (d === 'r') {
                let formatedName = zeroPad(parseInt(fileName) + 1)
                // alert(data[formatedName])
                window.location.href = 'http://192.168.50.10/problems/' + data[formatedName] + '.html'
            } else {
                let formatedName = zeroPad(parseInt(fileName) - 1)
                // alert(data[formatedName])
                window.location.href = 'http://192.168.50.10/problems/' + data[formatedName] + '.html'
            }
        })
}

detectswipe(myFunc)

document.getElementsByClassName('leetlogo')[0].addEventListener('touchstart', function () {
    fetch('http://192.168.50.10/problems/links_new.json')
        .then(res => res.json())
        .then(data => {
            let href = window.location.href.split('/')
            let fileName = href[href.length - 1].split('.')[0]
            let formatedName = zeroPad(parseInt(fileName))
            console.log(data[formatedName])
            let newName = data[formatedName].substr(5)
            URL = 'https://leetcode.com/problems/' + newName

            window.location.href = URL
        })
})

document.getElementsByClassName('leetlogo')[0].addEventListener('click', function () {
    fetch('http://192.168.50.10/problems/links_new.json')
        .then(res => res.json())
        .then(data => {
            let href = window.location.href.split('/')
            let fileName = href[href.length - 1].split('.')[0]
            let formatedName = zeroPad(parseInt(fileName))
            console.log(data[formatedName])
            let newName = data[formatedName].substr(5)
            URL = 'https://leetcode.com/problems/' + newName

            window.open(URL, '_blank');
        })
})


document.addEventListener('DOMContentLoaded', (event) => {
        if (navigator.userAgent.match(/iPhone/i)) {
            alert("iphone")
            document.getElementById('root').style.zoom = '2.0'
        }
    }
)



// document.getElementById('question_title').addEventListener('click',async function (){
//     let text = this.innerText.split('.')
//     let newText = text[1].trim()
//     console.log(newText)
//     // navigator.clipboard.writeText(newText)
//
// })
