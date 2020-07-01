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

function isBirthday(day, month){
	return month == 7 && day == 24;
}

function calculateAge(day, month, year) {
	let day_birth = 24;
	let month_birth = 7;
	let year_birth = 1999;
	let age = year - year_birth;
	if(isBirthday(day, month)){
		return age;
	}else if(month <= month_birth && day <= day_birth){
		age--;
		return age;
	}
}

$(document).ready(function() {
	$(window).on('scroll', updateNavBar);

	let dt = new Date();
	let age = calculateAge(dt.getUTCDate(), dt.getUTCMonth()+1, dt.getUTCFullYear());
	
	// Update the tag in the whoami section to display the correct age without having to update it manually
	// When it's my birthday is displayed as well.
	if(isBirthday(dt.getUTCDate(), dt.getUTCMonth()+1)){
		$("#my-age").html('<i class="fas fa-calendar-day blue-icon"></i>' + "Today is my birthday!! I'm turning " + age);	
	}else{
		$("#my-age").html('<i class="fas fa-calendar-day blue-icon"></i>' + age + " years old");
	}
	
});