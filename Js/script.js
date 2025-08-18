
$(function() {
    // Меню
    $('.mini-menu').click(function() {
        $('nav ul').slideToggle();
    }); 

    // Слайдер
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
    }); 

    Fancybox.bind("[data-fancybox='tour']", {
        Thumbs: false,
        Toolbar: true,
        Image: {
            zoom: true,
            click: 'zoom',
            wheel: 'zoom'
        }
    });
    AOS.init();
}); 