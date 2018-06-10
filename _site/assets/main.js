function contact() {
	window.open("/contact/index.html", "_self")
};

$(document).ready(function() {
    var previousScroll = 0,
        headerOrgOffset = $('#site-header').offset().top;
    
    $('#site-header').height($('#wrapper').height());

	// hide #back-top first
	$("#up").hide();
	
    $(window).scroll(function() {
        var currentScroll = $(this).scrollTop();
		//console.log(currentScroll + " and " + previousScroll + " and " + headerOrgOffset);
        if ($(this).scrollTop() > 100) {
				$('#up').fadeIn();
			} else {
				$('#up').fadeOut();
			}
	
		if(currentScroll > headerOrgOffset) {
            if (currentScroll > previousScroll) {
                $('#site-header').fadeOut();
            } else {
                $('#site-header').fadeIn(300);
                $('#site-header').addClass('fixed');
            }
        } else {
             $('#header').removeClass('fixed');   
        }
        previousScroll = currentScroll;
		});
    
		// scroll body to 0px on click
		$('#up').click(function () {
			$('body,html').animate({
			scrollTop: 0}, 800);
			return false;
		});
	});