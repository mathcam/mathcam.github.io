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
// var cantons_list = ['vaud', 'geneve', 'fribourg', 'neuchatel', 'valais', 'berne'];
// function selectCanton(canton) {
//     cantons_list.filter(function(x) { return x !== canton }).forEach(function(element) {
//         $("." + element + ".canton-schools").addClass('d-none');
//     });
//     $("." + canton + ".canton-schools").removeClass('d-none');
// }
// selectCanton('vaud');

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

// ------------------------------------------------------- //
// tracking ask
// ------------------------------------------------------- //
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function startMicrosoftClarity() {
    if (window.location.hostname === 'swissmath.ch') {
        $('head').append('<script type="text/javascript">(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "9ee2g93jwr");</script>');
    } else if (window.location.hostname === 'mathcam.github.io') {
        $('head').append('<script type="text/javascript">(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "94qwyxtyyi");</script>');
    }
}

function closeTrackingAsk() {
    $("#tracking_ask").addClass('d-none');

    if (window.location.hostname === 'swissmath.ch') {
        $('body').append('<script type="text/javascript">var sc_project=12681898; var sc_invisible=1; var sc_security="79078c4a";</script><script type="text/javascript"src="https://www.statcounter.com/counter/counter.js" async></script><noscript><div class="statcounter"><a title="Web Analytics" href="https://statcounter.com/" target="_blank"><img class="statcounter" src="https://c.statcounter.com/12681898/0/79078c4a/1/" alt="Web Analytics" referrerPolicy="no-referrer-when-downgrade"></a></div></noscript>');
    } else if (window.location.hostname === 'mathcam.github.io') {
        $('body').append('<script type="text/javascript">var sc_project=12681899; var sc_invisible=1; var sc_security="c1591536";</script><script type="text/javascript" src="https://www.statcounter.com/counter/counter.js" async></script><noscript><div class="statcounter"><a title="Web Analytics" href="https://statcounter.com/" target="_blank"><img class="statcounter" src="https://c.statcounter.com/12681899/0/c1591536/1/" alt="Web Analytics" referrerPolicy="no-referrer-when-downgrade"></a></div></noscript>');
    }
}

function enableTracking() {
    setCookie('tracking', true, 30);
    $("#tracking_ask").addClass('d-none');
    startMicrosoftClarity();
}

if (getCookie('tracking') === null) {
    $("#tracking_ask").removeClass('d-none');
}
else if (getCookie('tracking') === true) {
    startMicrosoftClarity();
} 
