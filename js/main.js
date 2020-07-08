/* Function to update the navbar when the scroll is under the main image */
function updateNavBar() {
	let window_height = $(window).height();
	let header_height = $("header").height();

	let scroll_top = $(window).scrollTop();

	if(scroll_top > (window_height - header_height)){
		$("header").css('background-color', 'var(--dark-blue)');
		$("header").addClass('bottom-shadow');
		$("#go-to-top").removeClass('invisible');
	}else{
		$("header").css('background-color', 'transparent');
		$("header").removeClass('bottom-shadow');
		$("#go-to-top").addClass('invisible');
	}
}

/* Returns a boolean, true when it's my birthday (July 24th) */
function isBirthday(day, month){
	return month == 7 && day == 24;
}

/* Function to calculate the age that I have to display it in the basic information, according to my birthday. */
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

function updateProjectPreviewIn() {
	/*$(this).css("background-color", "var(--blue)");
	$(this).children('.project-name').css("color", "var(--white)");*/
	$(this).children('.project-name').css({
		'background-color': 'var(--blue)',
		color: 'var(--white)'
	});
}

function updateProjectPreviewOut() {
	/*$(this).css("background-color", "");
	$(this).children('.project-name').css("color", "");*/
	$(this).children('.project-name').css({
		'background-color': '',
		color: ''
	});
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
	
	$(".project-preview").hover(updateProjectPreviewIn, updateProjectPreviewOut);
});