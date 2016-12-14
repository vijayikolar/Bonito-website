
$(document).ready(function(){

		//FILTERS

		// if (window.matchMedia("(max-width: 768px)").matches) {	
			$(".portfolio-filters__heading ").click(function(){
					$(".portfolio-filters__info").addClass("portfolio-filters__info--visible ");
			});
		// }
		// else {
		// 	$(".portfolio-filters__heading ").click(function(){
		// 			$(".portfolio-filters__info").removeClass("portfolio-filters__info--visible ");
		// 	});
		// }

});


//FUNCTION TO TOGGLE BETWEEN ACCORDIAN AND HEADINGS

function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('fa-plus fa-minus');
}
$('#accordion').on('hidden.bs.collapse', toggleChevron);
$('#accordion').on('shown.bs.collapse', toggleChevron);



if (window.matchMedia("(min-width: 992px)").matches) {
	$(".panel-collapse").addClass("in");
}
else {

	$(".panel-collapse").removeClass("in");
	$("div.panel:first-of-type .panel-collapse").addClass("in");
}

$(window).resize(function(){
	if (window.matchMedia("(min-width: 992px)").matches) {
	$(".panel-collapse").addClass("in");
	}
	else {

		$(".panel-collapse").removeClass("in");
		$("div.panel:first-of-type .panel-collapse").addClass("in");
	}
});