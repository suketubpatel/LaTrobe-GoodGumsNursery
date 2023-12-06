// responceive manu bar between larger screen and smaller screen
// Works when user click on manu hamburger icon 

function myFunction() {     
    var x = document.getElementById("myHd_nav");
    if (x.className === "hd_nav") {
        x.className += " responsive";
    } else {
        x.className = "hd_nav";
    }
}
