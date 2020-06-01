$( document ).ready(function() {

if ($( window ).width() >= 700) {

// Desktop GSAP Code	//


var controller = new ScrollMagic.Controller();


$('div[id^="row"]').each(function(){

	var rowTween = new TimelineMax()

	.staggerFrom($(this).children('div'), 2, {yPercent: 15}, 0.3)

var rowScene = new ScrollMagic.Scene({
	triggerElement: this,
	triggerHook: 0.7
})

.setTween(rowTween)
.addTo(controller);

});



} else {

// Mobile GSAP Code	//

var controller = new ScrollMagic.Controller();


$('div[id^="row"]').each(function(){

	var rowTween = new TimelineMax()

	.staggerFrom($(this).children('div'), 2, {yPercent: 15}, 0.3)

var rowScene = new ScrollMagic.Scene({
	triggerElement: this,
	triggerHook: 0.7
})

.setTween(rowTween)
.addTo(controller);

});


}


});