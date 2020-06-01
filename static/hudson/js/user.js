$( document ).ready(function() {


var controller = new ScrollMagic.Controller();


var story = new TimelineMax()

	.from(".story-image", 3, {autoAlpha:0, xPercent: 15})


var story_scene = new ScrollMagic.Scene({
	triggerElement: '.story-image',
	triggerHook: 0.8,
	duration: "70%"
})

.setTween(story)
.addTo(controller);


var comfort = new TimelineMax()	

	.from(".collage1", 1, {yPercent: 20})
	.from(".collage2", 1, {yPercent: 20,},"=-1");

var comfort_scene = new ScrollMagic.Scene({
	triggerElement: '#triggerComfort',
	offset: -700,
	duration: 700
})

.setTween(comfort)
.addTo(controller);


var control = new TimelineMax()	

.fromTo("#controlText", 1, {autoAlpha:0},{autoAlpha:1, ease: Power2.easeOut,})
.fromTo("#controlImage", 1, {autoAlpha:0},{autoAlpha:1},"=-1");

var control_scene = new ScrollMagic.Scene({
	triggerElement: '#triggerControl',
	offset: 0
})

.setTween(control)
.addTo(controller);


var products = TweenMax.staggerFrom('.sneaker', 0.5, {autoAlpha:0, y:100, ease: Power1.easeOut,}, 0.25);

var products_scene = new ScrollMagic.Scene({
	triggerElement: '#triggerProducts',
	offset: -100
})

.setTween(products)
.addTo(controller);


    $(function() {
    $(".rslides").responsiveSlides({
    	  nav: true
    });
  });

});








