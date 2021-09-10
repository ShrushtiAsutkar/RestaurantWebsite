$(document).ready(function(){
    $('.food-slider').slick({
        autoplay:true, /* to make the slide ,slide automatically*/
        slidesToShow:3,
        slidesToScroll:1,
        prevArrow:".prev-btn",
        nextArrow:".next-btn",
    });
});