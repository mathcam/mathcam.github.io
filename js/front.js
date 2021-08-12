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
    cantons_list.filter(function(x) { return x !== canton }).forEach(function(element) {
        $("." + element + ".canton-schools").addClass('d-none');
    });
    $("." + canton + ".canton-schools").removeClass('d-none');
}
selectCanton('vaud');

// ------------------------------------------------------- //
// currency selector
// ------------------------------------------------------- //
var currencies_list = ['eur', 'usd', 'gbp', 'cad', 'aud'];
function selectCurrency(currency) {
    currencies_list.filter(function(x) { return x !== currency }).forEach(function(element) {
        $("." + element + ".price-text").addClass('d-none');
    });
    $("." + currency + ".price-text").removeClass('d-none');
    $('#currencyDropdownMenuButton').text(currency.toUpperCase())
}
selectCurrency('eur');

// ------------------------------------------------------- //
// video
// ------------------------------------------------------- //
var video_wrapper = $('.youtube-video-place');

//  Check to see if youtube wrapper exists
if(video_wrapper.length){
    let addVideo = function(){
        video_wrapper.html('<div class="embed-responsive embed-responsive-16by9"><iframe id="mathcam-video" allowfullscreen class="embed-responsive-item" src="' + video_wrapper.data('yt-url') + '"></iframe></div>');
        $("#mathcam-video")[0].src += "?autoplay=1&mute=1";
    };
    if (window.matchMedia("(max-width: 575px)").matches) {
        $('.play-youtube-video').on('click', addVideo);
    } else {
        addVideo();
    }
}

// ------------------------------------------------------- //
// tidio
// ------------------------------------------------------- //
if (window.matchMedia("(min-width: 576px)").matches) {
    $('body').append('<script src="//code.tidio.co/r07leqdenl2szvtdwzgccaqhadt8lmx6.js"></script>');
}
