window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    var pic_popup = document.getElementById("staff-pic-popup");
    var offset = pic_popup.offsetTop - 250;
    if (document.body.scrollTop >= offset || document.documentElement.scrollTop >= offset) {
        document.getElementById("staff-pic").style.visibility = "visible";
        document.getElementById("staff-pic").style.opacity = 1;
    } else {
        document.getElementById("staff-pic").style.visibility = "hidden";
        document.getElementById("staff-pic").style.opacity = 0;
    }
}