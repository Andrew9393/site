$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$("#owl_1").owlCarousel({
	loop:true,
	nav:true,
	items:2,
	// autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 1000,
    autoplayHoverPause: true,
});

$("#feetback").owlCarousel({
	loop:true,
	nav:true,
	items:1,
	autoplayHoverPause: true,
});

const progress = document.querySelector('.progress');

window.addEventListener('scroll', progressBar);

function progressBar(e) {
	let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
	let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	
	let per = windowScroll / windowHeight * 100;

	progress.style.width = per + '%';


}

