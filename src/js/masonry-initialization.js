

$(document).ready(function(){

		$('.image-thumbnail').masonry({
		  // set itemSelector so .grid-sizer is not used in layout
		  itemSelector: '.image-thumbnail__item',
		  // use element for option
		  percentPosition: true
		})

});
