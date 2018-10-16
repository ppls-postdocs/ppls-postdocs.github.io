
var personTemplate ='<div class="card %SUBJAREA"><div class="card-body"><h4 class="card-title">%NAME</h4><p>%SUBJAREA</p><p class="card-text">%BIO</p></div><div class="card-footer" id="%NOMID"><a href="%EXTLINK" target="_blank"><span><i class="fa fa-globe"></i></span></a></div></div>'

var twittertemplate = '&nbsp&nbsp <a href="%TWITTER" target="_blank"><span><i class="fa fa-twitter"></i></span></a>'
var githubtemplate = '&nbsp&nbsp <a href="%GITHUB" target="_blank"><span><i class="fa fa-github"></i></span></a>'
var ssFlipped =false;
var rdFlipped=false;
var gameFlipped=false;
var hobbyFlipped=false;


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

allpeople = shuffle(allpeople);

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
    var thisID=person.name.split(" ")[2]
    thisPerson=thisPerson.replace("%NOMID",thisID)
    thisPerson=thisPerson.replace("%BIO",person.bio)
    if (person.website) {
      thisPerson=thisPerson.replace("%EXTLINK",person.website);
    }
    $(".people-deck").append(thisPerson)
    
    if (person.twitter) {
      var thistwit = twittertemplate.replace("%TWITTER",person.twitter)
      $("#"+thisID).append(thistwit)
    }

    if (person.github) {
      var thisgit = githubtemplate.replace("%GITHUB",person.github)
      $("#"+thisID).append(thisgit)
    }
		
		
	}

  $(".allFilter").click(function() {
    $(".card").slideDown()
    $(".filterButton").addClass('btn-light').removeClass('btn-sel')
    $(this).addClass("btn-sel").removeClass("btn-light");
  });

  $(".lingFilter").click(function() {
    $(".Psychology").hide();
    $(".Philosophy").hide();
    $(".Linguistics").slideDown();
    $(".filterButton").addClass('btn-light').removeClass('btn-sel')
    $(this).addClass("btn-sel").removeClass("btn-light");

  })

  $(".psyFilter").click(function() {
    $(".Linguistics").hide();
    $(".Philosophy").hide();
    $(".Psychology").slideDown();
    $(".filterButton").addClass('btn-light').removeClass('btn-sel')
    $(this).addClass("btn-sel").removeClass("btn-light");

  })

  $(".philFilter").click(function() {
    $(".Linguistics").hide();
    $(".Psychology").hide();
    $(".Philosophy").slideDown();
    $(".filterButton").addClass('btn-light').removeClass('btn-sel')
    $(this).addClass("btn-sel").removeClass("btn-light");

  })

	$('.navbar-nav>li>a').on('click', function(){
    	$('.navbar-collapse').collapse('hide');
	});

	$(".jssocials-shares").addClass("text-center");
	
	

});








