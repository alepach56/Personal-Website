const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarScroll');
    }
    else if (top < 100){
        header.classList.remove('navbarScroll');
    }
}


var typed = new Typed(".auto-type", {
    strings:["Alejandro Pacheco", "a student"],
    typeSpeed: 75,
    backSpeed: 75,
    loop: true
});
