(function($) {
  $.fn.shuffle = function() {
    // credits: http://bost.ocks.org/mike/shuffle/
    var m = this.length, t, i;

    while (m) {
      i = Math.floor(Math.random() * m--);

      t = this[m];
      this[m] = this[i];
      this[i] = t;
    }

    return this;
  };
}(jQuery));


$( document ).ready(function() {


var controller = new ScrollMagic.Controller();



var gallery = new TimelineMax()

  
	.from('.full-width-gallery', 1, {autoAlpha: 0});



//	  .staggerFrom($('div[class^="gallery-item"]'), 2, {autoAlpha: 0}, 0.2)

	/* $('div[class^="gallery-item"]').each(function(){
	gallery.from(this, 1, {autoAlpha: 0}, Math.random());
}); */


	var gallery_scene = new ScrollMagic.Scene({
	triggerElement: '.full-width-gallery',
	triggerHook: 0.7,
	reverse: false
})


.setTween(gallery)
.addTo(controller)




var whyNotTry = new TimelineMax()

/*
$('.suggested-product').shuffle().each(function(){
	whyNotTry.from(this, 0.2, {ease: Power2.easeInOut, autoAlpha: 0});
}); 

$('.suggested-product').each(function(){
	whyNotTry.from(this, 2, {autoAlpha: 0}, Math.random());
}); */

	.staggerFrom($('div[class^="suggested-products"]').children(), 0.5, {ease: Power2.easeIn, autoAlpha: 0}, 0.2)

	var whyNotTry_scene = new ScrollMagic.Scene({
	triggerElement: '.why-not-try',
	triggerHook: 0.7,
	reverse: false
})


.setTween(whyNotTry)
.addTo(controller)


var additionalImages = new TimelineMax()

	.staggerFrom($('.additional-images').children(), 2, {autoAlpha: 0}, 0.2)

	var additionalImages_scene = new ScrollMagic.Scene({
	triggerElement: '.additional-images',
	triggerHook: 0.7,
	reverse: false
})


.setTween(additionalImages)
.addTo(controller)



var blockImages = new TimelineMax()

	.from($('.main-image'), 2, {autoAlpha: 0}, 0.2)
	.staggerFrom($('.two-blocks').children(), 2, {autoAlpha: 0}, -0.5, "=-1.5")

	var blockImages_scene = new ScrollMagic.Scene({
	triggerElement: '#main-site',
	triggerHook: 0.7,
	reverse: false
})


.setTween(blockImages)
.addTo(controller)



});