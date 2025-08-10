$(function(){
    $('.mini-menu').click(function(){
        $('nav ul').slideToggle();
    });
$('.service-slider').slick({
    arrows: false,
    dots: true,
    responsive: [{
        breakpoint: 600,
        settings: {
            dots: false,
            centerMode: true
        }
    }]
})
});