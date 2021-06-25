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

// ------------------------------------------------------- //
// currency selector
// ------------------------------------------------------- //
function updateSymbol(e){
  var selected = $(".currency-selector option:selected");
  $(".currency-symbol").text(selected.data("symbol"))
  $(".currency-amount").prop("placeholder", selected.data("placeholder"))
  $('.currency-addon-fixed').text(selected.text())
}

$(".currency-selector").on("change", updateSymbol)

updateSymbol()
