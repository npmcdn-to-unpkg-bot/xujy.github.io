$( document ).ready(function() {
	$('#main-heading').fadeTo('slow',1);
	$('.grid').imagesLoaded(function() {
		$('.grid').masonry({
		  // options
		  itemSelector: '.grid-item',
		  columnWidth: 0,
		  isFitWidth: true
		});
	});	
});