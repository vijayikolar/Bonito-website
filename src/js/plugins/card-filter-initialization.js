$(function() {
    //Simple filter controls
    $('.simplefilter li').click(function() {
        $('.simplefilter li').removeClass('active');
        $(this).addClass('active');
    });
    //Multifilter controls
    $('.multifilter li').click(function() {
        $(this).toggleClass('active');
    });
    //Shuffle control
    // $('.shuffle-btn').click(function() {
    //     $('.sort-btn').removeClass('active');
    // });
    //Sort controls
    // $('.sort-btn').click(function() {
    //     $('.sort-btn').removeClass('active');
    //     $(this).addClass('active');
    // });
});


 $(function() {
    //Initialize filterizr with default options
    $('.filtr-container').filterizr();
});


//function to apply heighest height to the cards

var maxHeight = 0;

$(".creation-category-card__details").each(function(){
   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
});

$(".creation-category-card__details").height(maxHeight);


//function to navigate the current calss to the labels
$(document).ready(function(){

    $(".creation-category-card").addClass("active");

    $(".our-creation__filters .button").click(function(){

        //function to add current class to the tabs
        $(this).siblings().removeClass("current");
        $(this).addClass("current");

        // if( $("button[data-filter='statups']") ) {
        //  alert("yes";)
        // }

        // if ( $(this).data("filter") === 'statups') {
        // if ($(this).attr('data-filter') == 'statups') { 
        //  $('.creation-category-card[data-category="statups"]').addClass('active');
        //  $('.creation-category-card[data-category!="statups"]').removeClass('active');
        // }
        // else if($(this).attr('data-filter') == 'enterprises') { 
        //  $('.creation-category-card[data-category="enterprises"]').addClass('active');
        //  $('.creation-category-card[data-category!="enterprises"]').removeClass('active');   
        // }
        // else {
        //  $('.creation-category-card').addClass('active');
        // }

    })


});