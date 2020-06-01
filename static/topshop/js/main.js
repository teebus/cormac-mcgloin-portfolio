$( document ).ready(function() {

if ($( window ).width() >= 700) {

// Desktop GSAP Code	//


var controller = new ScrollMagic.Controller();


var rowHero = new TimelineMax()

	.from('#row-hero h1', 1, {yPercent: 60, autoAlpha: 0})


var rowHero_scene = new ScrollMagic.Scene({
	triggerElement: '#row-hero',
	triggerHook: 1
})

.setTween(rowHero)
.addTo(controller);



var row1 = new TimelineMax()

	.from('#row-1 .content-block-1', 2,{yPercent: 15})
	.from('#row-1 .content-block-1', 1,{'filter': 'grayscale(1)'},1)
	.from('#row-1 .content-block-2 .text-box', 1,{xPercent: 15, autoAlpha:0}, "0.3")


var row1_scene = new ScrollMagic.Scene({
	triggerElement: '#row-1',
	triggerHook: 0.5
})

.setClassToggle('#row-1', 'move')
.setTween(row1)
.addTo(controller);




var row2 = new TimelineMax()

	.staggerFrom($('#row-2').children(), 2, {yPercent: 15}, -0.3)
	.from('#row-2 .content-block-2', 1, {'filter': 'grayscale(1)'}, "0.5")


var row2_scene = new ScrollMagic.Scene({
	triggerElement: '#row-2',
	triggerHook: 0.7
})

.setClassToggle('#row-2', 'move')
.setTween(row2)
.addTo(controller);


$('div[id^="parallax"]').each(function(){

new ScrollMagic.Scene({triggerElement: this, duration: "200%"})
.setTween($(this).children('div'),{y: "80%", ease: Linear.easeNone})
.addTo(controller);

});




var productGalleryLarge = new TimelineMax()



.staggerFrom($('.product-gallery'), 2, {ease: Power1.easeIn, autoAlpha: 0}, 0.2)

	/* .staggerFrom($('.product-gallery div[class^="gallery-item"]'), 2, {ease: Power1.easeIn, autoAlpha: 0}, 0.2)

	$('.product-gallery div[class^="gallery-item"]').each(function(){
	productGalleryLarge.fromTo(this, 1, {autoAlpha: 0, opacity: 0}, {autoAlpha: 1, opacity: 1}, Math.random());
}); */


var productGalleryLarge_Scene = new ScrollMagic.Scene({
	triggerElement: '.product-gallery',
	triggerHook: 0.5
})

.setTween(productGalleryLarge)
.addTo(controller);




} else {


// Mobile GSAP Code	//

$("#row-1 .content-block-2 h2").appendTo("#row-1 .content-block-1");

var controller = new ScrollMagic.Controller();


var row1_block1_mobile = new TimelineMax()

	.from('#row-1 .content-block-1', 2, {yPercent: 15}, 0.3)
	.from('#row-1 .content-block-1 img', 2,{'filter': 'grayscale(1)'})
	.from('#row-1 .content-block-1 h2', 1.5, {yPercent: 100, autoAlpha:0}, 0.3)


var row1_block1_mobile_scene = new ScrollMagic.Scene({
	triggerElement: '#row-1 .content-block-1',
	triggerHook: 0.7
})

.setClassToggle('#row-1', 'move')
.setTween(row1_block1_mobile)
.addTo(controller);


var row1_block2_mobile = new TimelineMax()

	.from('#row-1 .content-block-2 p', 1.5, {yPercent: 100, autoAlpha:0}, 0.3)


var row1_block2_mobile_scene = new ScrollMagic.Scene({
	triggerElement: '#row-1 .content-block-2',
	triggerHook: 1
})

.setTween(row1_block2_mobile)
.addTo(controller);


var row2_block1_mobile = new TimelineMax()

	.from('#row-2 .content-block-1', 1, {yPercent: 15}, 0.3)


var row2_block1_mobile_scene = new ScrollMagic.Scene({
	triggerElement: '#row-2 .content-block-1',
	triggerHook: 1
})

.setTween(row2_block1_mobile)
.addTo(controller);


var row2_block2_mobile = new TimelineMax()

	.from('#row-2 .content-block-2', 2, {yPercent: 15}, 0.3)
	.from('#row-2 .content-block-2 img', 1, {'filter': 'grayscale(1)'}, "0.5")


var row2_block2_mobile_scene = new ScrollMagic.Scene({
	triggerElement: '#row-2 .content-block-2',
	triggerHook: 0.8
})

.setTween(row2_block2_mobile)
.addTo(controller);


new ScrollMagic.Scene({triggerElement: "#parallax-1", duration: "100%"})
.setTween("#parallax-1 > div", {y: "80%", ease: Linear.easeNone})
.addTo(controller);


}


});








