(function ($){
	"use strict";
	
	
	$('.slider-active').owlCarousel({
    loop:true,
    nav:true,
    responsive:{
        0:{
            items:4
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})
// brand-logo
$('.brand-active').owlCarousel({
    loop:true,
    nav:true,
	margin:20,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:4
        }
    }
})
	// latest product slide
	
$('.lates-product-active').owlCarousel({
    loop:true,
    nav:true,
	margin:20,
	navText:['next', 'prev'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
	
})(jQuery);