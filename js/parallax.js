$(document).ready(function() {

	redrawDotNav();

	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });

	/* Next/prev and primary nav btn click handlers */
	$('a.anneone').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.annetwo').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#annetwo').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.annethree').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#annethree').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.annefour').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#annefour').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
		$('a.annefive').click(function(){
				$('html, body').animate({
					scrollTop:$('#annefive').offset().top
				}, 1000, function() {
					parallaxScroll(); // Callback is required for iOS
			});
				return false;
			});
			$('a.annesix').click(function(){
		    	$('html, body').animate({
		    		scrollTop:$('#annesix').offset().top
		    	}, 1000, function() {
			    	parallaxScroll(); // Callback is required for iOS
				});
		    	return false;
		    });
				$('a.anneseven').click(function(){
			    	$('html, body').animate({
			    		scrollTop:$('#anneseven').offset().top
			    	}, 1000, function() {
				    	parallaxScroll(); // Callback is required for iOS
					});
			    	return false;
			    });
					$('a.anneeight').click(function(){
							$('html, body').animate({
								scrollTop:$('#anneeight').offset().top
							}, 1000, function() {
								parallaxScroll(); // Callback is required for iOS
						});
							return false;
						});





    /* Show/hide dot lav labels on hover */
    $('nav#primary a').hover(
    	function () {
			$(this).prev('h1').show();
		},
		function () {
			$(this).prev('h1').hide();
		}
    );

});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
	$('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var section1Top =  0;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('#annetwo').offset().top - (($('#annethree').offset().top - $('#annetwo').offset().top) / 2);
	var section3Top =  $('#annethree').offset().top - (($('#annefour').offset().top - $('#annethree').offset().top) / 2);
var section4Top =  $('#annefour').offset().top - (($('#annefive').offset().top - $('#annefour').offset().top) / 2);
var section5Top =  $('#annefive').offset().top - (($('#annesix').offset().top - $('#annefive').offset().top) / 2);
var section6Top =  $('#annesix').offset().top - (($('#anneseven').offset().top - $('#annesix').offset().top) / 2);
var section7Top =  $('#anneseven').offset().top - (($('#anneeight').offset().top - $('#anneseven').offset().top) / 2);
var section8Top =  $('#anneeight').offset().top - (($(document).height() - $('#anneeight').offset().top) / 2);
;


	$('nav#primary a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#primary a.anneone').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#primary a.annetwo').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('nav#primary a.annethree').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
		$('nav#primary a.annefour').addClass('active');
	} else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top){
		$('nav#primary a.annefive').addClass('active');
	} else if ($(document).scrollTop() >= section6Top && $(document).scrollTop() < section7Top){
		$('nav#primary a.annesix').addClass('active');
	} else if ($(document).scrollTop() >= section8Top){
		$('nav#primary a.anneeight').addClass('active');
	}




	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('footer').outerHeight();

	$(window).scroll(function(event){
	    didScroll = true;
	});

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 7000);

	function hasScrolled() {
	    var st = $(this).scrollTop();

	    // Make sure they scroll more than delta
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;

	    // If they scrolled down and are past the navbar, add class .nav-up.
	    // This is necessary so you never see what is "behind" the navbar.
	    if (st > lastScrollTop && st > navbarHeight){
	        // Scroll Down
	        $('footer').removeClass('nav-down').addClass('nav-up');
	    } else {
	        // Scroll Up
	        if(st + $(window).height() < $(document).height()) {
	            $('footer').removeClass('nav-up').addClass('nav-down');
	        }
	    }

	    lastScrollTop = st;
	}









}










// Hide footer on on scroll down
