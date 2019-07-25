(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        $(".get-ahead-slider").owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			navText:['<i class="fas fa-angle-left"></i>',
		'<i class="fas fa-angle-right"></i>'],
			dots:true,
			items:4,
			autoplay:true,
			autoplayTimeout:4000,
			animateIn:'fadeIn'
		});
		/* ------testimonial slider------ */
		$(".testimonial-slider").owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			navText:['<i class="fas fa-angle-left"></i>',
		'<i class="fas fa-angle-right"></i>'],
			dots:true,
			items:1,
			autoplay:true,
			autoplayTimeout:4000,
			animateIn:false,
		});
		
		// ScrollUp
			  $.scrollUp({
				scrollName: 'scrollUp', 
				topDistance: '300', 
				topSpeed: 1000, 
				animation: 'fade', 
				animationInSpeed: 200,
				animationOutSpeed: 200, 
				scrollText: '<i class="fas fa-long-arrow-alt-up"></i>', // Text for element
				activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
			  });
  

    });

	
		
    jQuery(window).load(function(){
			
		});
}(jQuery));	