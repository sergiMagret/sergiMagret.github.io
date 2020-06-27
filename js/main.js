$(document).ready(function (argument) {
	let cover_height = $("#cover").height();
	let header_height = $("header").height();

	console.log(cover_height);
	console.log(header_height);
	
	$(window).on('scroll', function() {
		let scroll_top = $(window).scrollTop();
		if(scroll_top > (cover_height - header_height)){
			$("header").css('background-color', 'var(--dark-blue)');
			$("header").addClass('bottom-shadow');
		}else{
			$("header").css('background-color', 'transparent');
			$("header").removeClass('bottom-shadow');
		}
		
		console.log($(window).scrollTop());
	});
	
	console.log("Hello world!");
});