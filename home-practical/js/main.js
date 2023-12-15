$(document).ready(function () {
    $('.home-slider').slick({
        speed: 300,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        prevArrow: "<i class='fa fa-chevron-left a-left control-c prev slick-prev position-absolute rounded-circle border-0 slider-btn'></i>",
        nextArrow: "<i class='fa fa-chevron-right a-left control-c prev slick-next position-absolute rounded-circle border-0 slider-btn'></i>",
    });
});

