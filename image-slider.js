var imageCounter = 1;

showDiv(imageCounter) ;

function changeImage(m) {
    showDiv(imageCounter = imageCounter + m);
}

function showDiv(n) {
    var i;
    var imageArray = document.getElementsByClassName("mySlides");
    if (n > imageArray.length) {
        imageCounter = 1;
    }
    if (n < 1) {
        imageCounter = imageArray.length;
    }
    for (i = 0; i < imageArray.length; i++) {
        imageArray[i].style.dispaly = "none";
    }
    imageArray[imageCounter-1].style.dispaly = "block";
}

