$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}

// Usage:

$(['home-bg.png']).preload();

$( document ).ready(function() {
	$('#main-heading').imagesLoaded(function() {
		$('#main-heading').fadeTo('slow',1);
	});	
});