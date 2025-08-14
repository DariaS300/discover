
$(function() {
    // Меню
    $('.mini-menu').click(function() {
        $('nav ul').slideToggle();
    }); // <- Добавлена ;

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
    }); // <- Добавлена ;

    // Fancybox
    Fancybox.bind("[data-fancybox='tour']", {
        Thumbs: false,
        Toolbar: true,
        Image: {
            zoom: true,
            click: 'zoom',
            wheel: 'zoom'
        }
    });
}); // <- Закрывающая скобка для document.ready