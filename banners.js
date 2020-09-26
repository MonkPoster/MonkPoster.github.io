function pickimg(){
    var imagenumber = 11 ;
    var randomnumber = Math.random() ;
    var rand1 = Math.round( (imagenumber-1) * randomnumber) + 1;
    images = new Array
    images[1] = "banner1.png"
    images[2] = "Banner2.png"
    images[3] = "banner3.png"
    images[4] = "Banner4.png"
    images[5] = "banner5.png"
    images[6] = "banner6.png"
    images[7] = "banner7.png"
    images[8] = "banner8.png"
    images[9] = "banner9.png"
    images[10] = "banner10.png"
    images[11] = "banner11.png"
    var image = images[rand1]
    document.randimg.src = image
    }