// ------------------------------------------------------- //
// Testimonials Slider
// ------------------------------------------------------ //
$('#testimonials-slider').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    smartSpeed: 700,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: true
        },
        768: {
            items: 2,
            nav: true
        },
        1200: {
            items: 3,
            nav: true,
        }
    }
});


// ------------------------------------------------------- //
// Scroll Top Button
// ------------------------------------------------------- //
$('#scrollTop').on('click', function () {
    $('html, body').animate({ scrollTop: 0}, 1000);
});

var c, currentScrollTop = 0,
    navbar = $('.navbar');
$(window).on('scroll', function () {

    // Navbar functionality
    var a = $(window).scrollTop(), b = navbar.height();

    currentScrollTop = a;
    if (c < currentScrollTop && a > b + b) {
        navbar.addClass("scrollUp");
    } else if (c > currentScrollTop && !(a <= b)) {
        navbar.removeClass("scrollUp");
    }
    c = currentScrollTop;


    if ($(window).scrollTop() >= 2000) {
        $('#scrollTop').addClass('active');
    } else {
        $('#scrollTop').removeClass('active');
    }
});


// ---------------------------------------------------------- //
// Preventing URL update on navigation link click
// ---------------------------------------------------------- //
$('.link-scroll').on('click', function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
});


// ---------------------------------------------------------- //
// Scroll Spy
// ---------------------------------------------------------- //
$('body').scrollspy({
    target: '#navbarSupportedContent',
    offset: 80
});

// ------------------------------------------------------- //
// Navbar Toggler Button
// ------------------------------------------------------- //
$('.navbar .navbar-toggler').on('click', function () {
    $(this).toggleClass('active');
});

$("#books-gallery").owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout: 1500,
    items: 4
});


// ------------------------------------------------------- //
// contact form
// ------------------------------------------------------- //
var contact_form = $('#contact-form');
$(contact_form).submit(function(event) {
  event.preventDefault();
  var formData = $(contact_form).serialize();
  $.ajax({
    type: 'POST',
    url: $(contact_form).attr('action'),
    data: formData,
    success: function(data) {
      console.log("ok!!", data);
      alertify.success("Bien reçu ! Je vous réponderai au plus vite.")
      // $('input[name=email]').val('');
      // $('input[name=phone]').val('');
      // $('textarea[name=message]').val('');
    }
  });
});

// ------------------------------------------------------- //
// canton selector
// ------------------------------------------------------- //
var cantons_list = ['vaud', 'geneve', 'fribourg', 'neuchatel', 'valais', 'berne'];
function selectCanton(canton) {
    console.log(canton);
    cantons_list.filter(function(x) { return x !== canton }).forEach(function(element) {
        $("." + canton + ".canton-schools").removeClass('d-none');
        $("." + element + ".canton-schools").addClass('d-none');
    });
}
selectCanton('vaud');
