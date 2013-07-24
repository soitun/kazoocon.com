$('.main-nav ul li a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href')).offset().top
    }, 1500, 'easeInOutQuart');
    return false;
});

$(window).scroll(function(){
    var scrollTop = 680;
    if($(window).scrollTop() >= scrollTop){
        $('.sticky-scroll-nav').fadeIn(600);
    }
    if($(window).scrollTop() < scrollTop){
        $('.sticky-scroll-nav').fadeOut(400);
    }
});

$('.sticky-scroll-nav ul li a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href')).offset().top
    }, 1500, 'easeInOutQuart');
    return false;
});

$('body').scrollSpy();