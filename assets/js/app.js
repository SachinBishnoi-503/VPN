
$('.sliderbox').slick({
    dots: true,
    infinite: false,
    speed: 300,
    nextArrow: ".next",
    prevArrow: ".prev",
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:2000,
    infinite: true,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                dots: true,
            }
        }
    ]
});