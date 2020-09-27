/*I copy pasted this code from /mjg/s repo. Don't ask me what it does. It does stuff*/
function pickimg(){
    var imagenumber = 11 ;
    var randomnumber = Math.random() ;
    var rand1 = Math.round( (imagenumber-1) * randomnumber) + 1;
    images = new Array
    images[1] = "banner/banner1.png"
    images[2] = "banner/Banner2.png"
    images[3] = "banner/banner3.png"
    images[4] = "banner/Banner4.png"
    images[5] = "banner/banner5.png"
    images[6] = "banner/banner6.png"
    images[7] = "banner/banner7.png"
    images[8] = "banner/banner8.png"
    images[9] = "banner/banner9.png"
    images[10] = "banner/banner10.png"
    images[11] = "banner/banner11.png"
    images[11] = "banner/banner12.png"
    var image = images[rand1]
    document.randimg.src = image
    }