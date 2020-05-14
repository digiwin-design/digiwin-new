$win = $(window);
var htmlbody = $('html,body');
var navHeight = $('#navLink').outerHeight(true);
var numArr = []; // 定义一个空数组

$win.on('load', function () {
    var txt = $('.guestsect');
    for (var i = 0; i < txt.length; i++) {
        numArr.push(parseInt(txt.eq(i).offset().top));
    }
});

$('.button li').click(function () {
    var i = $(this).index();
    var nowlen = i * 1000 * -1;
    var nowliscrollTop = $(this).parents('.guestsect').offset().top - navHeight;
    $(this).parent().siblings('.changeGuest').stop().animate({ 'left': nowlen }, function () {
        htmlbody.stop().animate({ 'scrollTop': nowliscrollTop });
    });
    $(this).addClass('current').siblings().removeClass('current');

});


$('#rightList li, #firBanner ul li').click(function () {
    var _thisNum = $(this).index();
    $(this).addClass('selelinked').siblings().removeClass('selelinked');
    htmlbody.stop().animate({
        scrollTop: numArr[_thisNum] - navHeight
    }, 600);
    return false;
});


$win.scroll(function () {
    var rightLi = $('#rightList li');
    var scrollTop = $win.scrollTop();
    if (scrollTop >= numArr[0] - navHeight) {
        $('#rightList').fadeIn();
        scrollTop = scrollTop + navHeight;

        for (var i = 0; i < rightLi.length; i++) {
            // var rightListArray =rightLi[i];
            if (scrollTop >= numArr[i] - navHeight && scrollTop < numArr[i + 1] - navHeight) {

                $('#rightList li').removeClass('selelinked');

                $('#rightList li').eq(i).addClass('selelinked');

                return false;
            } else if (scrollTop >= numArr[rightLi.length - 1] - navHeight) {
                $('#rightList li').removeClass('selelinked');
                $('#rightList li').eq(i).addClass('selelinked');
            }
        }
    } else {
        $('#rightList').fadeOut();
    }
}).scroll();

$(document).on('click', '.js-nav', function(event) {
    event.preventDefault();
    let target = $(this).attr('href');
    let offset = $(this).data('offset');
    let targetPos = $(target).offset().top;
    let finalPos = offset ? targetPos - offset : targetPos;
    $('html, body').animate({ scrollTop: finalPos });
});

Shadowbox.init({
    continuous: 'next',
    displayCounter: true
});