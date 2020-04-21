$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > 125) {
        $('.plane').css({
            'transform': 'scale(1.3)',
            'transition': 'all 2s ease-out',
            'padding-top': '20%'
        })
    }
    if (scrollTop < 125) {
        $('.plane').css({
            'transform': 'scale(0.8)',
            'transition': 'all 3s ease-out'
        })
    }
    if (scrollTop > 190) {
        $('.plane').css({
            'transform': 'skew(15deg, 20deg)',
            'transition': 'all 2s ease-out'
        })
    }
});