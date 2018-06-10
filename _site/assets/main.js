/// function myFunction() {
//     document.getElementById("demo").style.fontSize = "25px";
//     document.getElementById("demo").style.color = "red";
//     document.getElementById("demo").style.backgroundColor = "yellow";
// }
// window.addEventListener("load", function (){
//   var load_screen = document.getElementById("load_screen");
//   document.body.removeChild(load_screen);
// })

function contact() {
	window.open("/contact/index.html", "_self")
};

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.site-header').fadeOut(200);
    }
	else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.site-header').fadeIn(200);
        }
    }

    lastScrollTop = st;
}
