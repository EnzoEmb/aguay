var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    direction: 'vertical',
    // scrollbar: '.swiper-scrollbar',
    // scrollbarHide: false,
    slidesPerView: 1,
    grabCursor: true,
            mousewheelControl: true
});

$('.slide-background').owlCarousel({
    animateOut: 'fadeOut',
    items: 1,
    smartSpeed: 450,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    freeDrag: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    loop: true
});

$('.main-header .anchor-slide').on('click', function(e){
    e.preventDefault();
    var data = $(this).attr('slide');
    swiper.slideTo(data);
})
$('.btn-right, .menu-mobile a').on('click', function(e){
    e.preventDefault();
    $('.menu-mobile').toggleClass('active')
})