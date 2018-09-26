
var personTemplate ='<div class="card %SUBJAREA"><div class="card-body"><h4 class="card-title">%NAME</h4><p>%SUBJAREA</p><p class="card-text">%BIO</p></div><div class="card-footer"><small class="text-muted text-center"><a href="%EXTLINK" target="_blank">Website</a> | <a href="%TWITTER" target="_blank">Twitter</a></small></div></div>'
var ssFlipped =false;
var rdFlipped=false;
var gameFlipped=false;
var hobbyFlipped=false;




(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

})(jQuery); // End of use strict

$(document).ready(function() {

	for (var i=0; i<allpeople.length;i++) {
		var person=allpeople[i]
		var thisPerson=personTemplate.replace("%NAME",person.name)
		thisPerson=thisPerson.replace(/%SUBJAREA/g, person.subject);
		thisPerson=thisPerson.replace("%EXTLINK",person.website);
		thisPerson=thisPerson.replace("%TWITTER",person.twitter)
		thisPerson=thisPerson.replace("%BIO",person.bio)
		$(".people-deck").append(thisPerson)


	}

	$('.navbar-nav>li>a').on('click', function(){
    	$('.navbar-collapse').collapse('hide');
	});

	$(".jssocials-shares").addClass("text-center");
	
	

});








