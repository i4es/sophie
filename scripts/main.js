;(function($){
	'use strict';
	$('a[href*="#"]').on('click', function() {
		event.preventDefault();

		$('body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 700);

	});
	
	$(window).on('load', function() {

		$('.ba-slider').slick({
  		slidesToShow: 1,
  		arrows: false,
  		dots: true,
		});

	});

	$('.eye[data-popup]').on('click', function() {
		$('.modal').fadeOut(400);
		$('.modal[data-popup=' + $(this).data('popup') +']').fadeIn(400);
	});
	$('.modal .close').on('click', function() {
		$(this).parent('.modal').fadeOut(400);
	});


	$('.basket').on('click', function() {
		$('.modal1').fadeIn(400);
	});
	$('.close1').on('click', function() {
		$('.modal1').fadeOut(400);
	});

	$( ".eye" ).click(function() {
  $( this ).toggleClass( "active" );
});
})(jQuery);