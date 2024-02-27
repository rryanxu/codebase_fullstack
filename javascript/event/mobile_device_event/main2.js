document.getElementsByClassName('css-v3d350')[0].addEventListener('click',function (){
    fetch('http://192.168.50.10/problems/links_new.json')
        .then(res => res.json())
        .then(data => {
            let href= window.location.href.split('/')
            let fileName = href[href.length-1].split('.')[0]
            let formatedName =zeroPad(parseInt(fileName))
            console.log(data[formatedName])
            let newName= data[formatedName].substr(5)
            URL='https://leetcode.com/problems/'+newName

            window.open(URL, '_blank');
        })
})

document.getElementsByClassName('css-v3d350')[0].addEventListener('touchstart',function (){
    fetch('http://192.168.50.10/problems/links_new.json')
        .then(res => res.json())
        .then(data => {
            let href= window.location.href.split('/')
            let fileName = href[href.length-1].split('.')[0]
            let formatedName =zeroPad(parseInt(fileName))
            console.log(data[formatedName])
            let newName= data[formatedName].substr(5)
            URL='https://leetcode.com/problems/'+newName

            window.location.href=URL
        })
})


// didn't work here

function detectswipe(func) {
    swipe_det = new Object();
    swipe_det.sX = 0;
    swipe_det.sY = 0;
    swipe_det.eX = 0;
    swipe_det.eY = 0;
    var min_x = 20*3;  //min x swipe for horizontal swipe
    var max_x = 40*3;  //max x difference for vertical swipe
    var min_y = 40*3;  //min y swipe for vertical swipe
    var max_y = 50*3;  //max y difference for horizontal swipe
    var direc = "";
    document.addEventListener('touchstart',function(e){
        var t = e.touches[0];
        swipe_det.sX = t.screenX;
        swipe_det.sY = t.screenY;
        // alert(swipe_det.sX  + " - " + swipe_det.sY);
    },false);
    document.addEventListener('touchmove',function(e){
        e.preventDefault();
        var t = e.touches[0];
        swipe_det.eX = t.screenX;
        swipe_det.eY = t.screenY;
    },false);
    document.addEventListener('touchend',function(e){
        //horizontal detection
        if ((((swipe_det.eX - min_x > swipe_det.sX) || (swipe_det.eX + min_x < swipe_det.sX)) && ((swipe_det.eY < swipe_det.sY + max_y) && (swipe_det.sY > swipe_det.eY - max_y)))) {
            if(swipe_det.eX > swipe_det.sX) direc = "r";
            else direc = "l";
        }
        //vertical detection
        if ((((swipe_det.eY - min_y > swipe_det.sY) || (swipe_det.eY + min_y < swipe_det.sY)) && ((swipe_det.eX < swipe_det.sX + max_x) && (swipe_det.sX > swipe_det.eX - max_x)))) {
            if(swipe_det.eY > swipe_det.sY) direc = "d";
            else direc = "u";
        }

        if (direc != "") {
            if(typeof func == 'function') func(direc);
        }
        direc = "";
    },false);
    document.addEventListener('keydown',function (e){
        if(e.key==='ArrowRight'){
            direc='r'
        }else if(e.key==='ArrowLeft'){
            direc='l'

        }

        if (direc != "") {
            if(typeof func == 'function') func(direc);
        }
        direc = "";
    })
}
const zeroPad =(num, places=4) => String(num).padStart(places,'0')
function myfunction(d) {
    fetch('http://192.168.50.10/problems/links_new.json')
        .then(res => res.json())
        .then(data => {
            // alert(d)
            let href= window.location.href.split('/')
            let fileName = href[href.length-1].split('.')[0]
            if(d==='r'){
                let formatedName =zeroPad(parseInt(fileName)+1)
                // alert(data[formatedName])
                window.location.href = 'http://192.168.50.10/problems/'+data[formatedName]+'.html'
            }else{
                let formatedName =zeroPad(parseInt(fileName)-1)
                // alert(data[formatedName])
                window.location.href = 'http://192.168.50.10/problems/'+data[formatedName]+'.html'
            }
        })
}
detectswipe(myfunction);
