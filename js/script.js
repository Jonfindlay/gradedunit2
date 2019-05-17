// JavaScript Document


$(document).ready(function(){
	
	"use strict";
	
	$('#infobtn1').click(function(){
		$('#adidas-container-hidden').fadeIn(500);
		$('#adidas-container').hide();
	});
	
	
		$('#infobtn2').click(function(){
		$('#adidas-container').fadeIn(500);
		$('#adidas-container-hidden').hide();
	});
	
	
		$('#infobtn3').click(function(){
		$('#event-content-hidden').fadeIn(500);
		$('#event-content').hide();
	});
	
	
		$('#infobtn4').click(function(){
		$('#event-content').fadeIn(500);
		$('#event-content-hidden').hide();
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	$(".thumb-01").click(function(){
	
	$(".overlay, .gal-01").fadeIn(500);
	});
	
	$(".thumb-02").click(function(){
	
	$(".overlay, .gal-02").fadeIn(500);
	});
	
	
	$(".thumb-03").click(function(){
	
	$(".overlay, .gal-03").fadeIn(500);
	});
	
	
	$(".thumb-04").click(function(){
	
	$(".overlay, .gal-04").fadeIn(500);
	});
	
	
	$(".close").click(function(){
		$(".overlay, .gallery").fadeOut(500);
	});
	
	
	
	
});


$('.menu-toggle').click(function() {
  
  $('.site-nav').toggleClass('site-nav--open', 500);
  $(this).toggleClass('open');
  
})


// JavaScript Document

// Set the date we're counting down to
var countDownDate = new Date("Jul 18, 2019 12:05:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
	'use strict';
    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Graded Unit 2 Finished";
    }
}, 1000);


	