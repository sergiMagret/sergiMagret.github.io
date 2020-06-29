function updateNavBar() {
	let window_height = $(window).height();
	let header_height = $("header").height();


	//console.log(window_height);
	//console.log(header_height);

	let scroll_top = $(window).scrollTop();
	//console.log("scroll:" + scroll_top + ", window_height - header_height: " + (window_height - header_height));
	if(scroll_top > (window_height - header_height)){
		$("header").css('background-color', 'var(--dark-blue)');
		$("header").addClass('bottom-shadow');
		$("#go-to-top").removeClass('invisible');
	}else{
		$("header").css('background-color', 'transparent');
		$("header").removeClass('bottom-shadow');
		$("#go-to-top").addClass('invisible');
	}

	//console.log($(window).scrollTop());
}

$(document).ready(function() {
	$(window).on('scroll', updateNavBar);
});