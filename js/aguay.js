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

$('.tarifas-carousel').owlCarousel({
    items: 1,
    margin: 0,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
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
new WOW().init();

// $( "#contacto" ).submit(function( event ) {
//     if ($('#nombre').val() != "") {
//         alert('escribi nombre');
//     }
//     event.preventDefault();
// });
$( document ).ready(function() {

// $('#btn-enviar').on('click', function(e){
$("#contacto").submit(function(e){
    if ( $('#nombre').val() == "" ) {
        // alert('escribi nombre');
        $('#validar').removeClass()
        $('#validar').html('Escribi un nombre!')
        $('#validar').addClass('active')
        setTimeout(function(){ $('#validar').removeClass('active') }, 2000);
    } else if ( isEmail( $('#email').val() ) != true ) {
        // alert('mail invalido')
        $('#validar').removeClass()
        $('#validar').html('Escribi un mail válido!')
        $('#validar').addClass('active')
        setTimeout(function(){ $('#validar').removeClass('active') }, 2000);
    } else if ( $('#msn').val() == "" ) {
        // alert('escribi un mensaje')
        $('#validar').removeClass()
        $('#validar').html('Escribi un mensaje')
        $('#validar').addClass('active')
        setTimeout(function(){ $('#validar').removeClass('active') }, 2000);
    }else{
        // alert('mensaje enviado correctamente')
        $('#validar').html('Mensaje enviado correctamente!!1')
        $( "#contacto" ).submit();
        $('#validar').removeClass()
        $('#validar').addClass('active success')
        setTimeout(function(){ $('#validar').removeClass('active success') }, 2000);
        $('#nombre, #email, #msn').val("");
    }
    // e.preventDefault()
     return false;
})

})
function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}