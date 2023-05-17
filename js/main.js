$(function () {
    $('.topBanner .inner i').on('click', function () {
        $('.topBanner').addClass('on')
    });

    $('.mainSlide').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
})