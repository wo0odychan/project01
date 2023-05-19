$(function () {
    $('.topBanner .inner i').on('click', function () {
        $('.topBanner').addClass('on')
    })

    $('.right_banner .btn').on('click', function () {
        $('.right_banner').toggleClass('on')
    });

    $('.mainSlide').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

})