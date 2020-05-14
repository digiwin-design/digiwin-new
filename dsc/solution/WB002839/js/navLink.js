// JavaScript Document
var $win = $(window);
var winHeight = $win.height();
var contentWidth = 1200;
var docHeight = $(document).height();
var diff = docHeight - winHeight;
var $htmlBody = $('html, body');
var $navLink = $('#navLink');
var _navLinkOffset = $navLink.offset();
var _navLinkOuterHeight = $navLink.outerHeight();
var $navLinkA;
var _navArray = [];
var _buffer = 25;

var pageIndex = $navLink.data('pageIndex');
var URL_pathName = window.location.pathname;
var URL_fileName = URL_pathName.substring(URL_pathName.lastIndexOf('/') + 1);

//載入選單
$('#navLink').load('navLink.htm', function() {
    //調整選單寬度
    var navLiNum = $('#navLink .navLinks').length;
    var navLiWidth =
        Math.floor((contentWidth - navLiNum - 1) / navLiNum) + 'px';
    $('#navLink .navLinks').css({ width: navLiWidth });

    //判斷目前所在頁面
    $('#navLink li a[href="' + URL_fileName + '"]')
        .parents('.navLinks')
        .addClass('selected');

    $navLinkA = $('#navLink>ul>li').children('a');
    var j = 0;
    $.each($navLinkA, function(i) {
        var $a = $navLinkA.eq(i);
        var _href = $a.attr('href');

        //判斷是否為錨點
        if (_href.match(/^#[a-zA-Z0-9]{2,}$/)) {
            var _hash = $a.prop('hash');
            var $tmp = $(_hash);
            var _tmpOffsetTop = Math.ceil($tmp.offset().top);
            var _tmpHeight = $tmp.outerHeight(true);

            _navArray[j] = {
                navArrayA: $a,
                top: _tmpOffsetTop,
                bottom: _tmpOffsetTop + _tmpHeight
            };
            j++;
        }
    });
});

$win.scroll(function() {
    var scrollTop = $win.scrollTop(),
        isFixed = $navLink.hasClass('fixed');

    if (scrollTop >= _navLinkOffset.top) {
        if (isFixed == false) {
            $navLink.addClass('fixed');
        }

        if (URL_fileName == pageIndex) {
            scrollTop = scrollTop + _navLinkOuterHeight;
            for (var i = 0; i < _navArray.length - 1; i++) {
                var $navArray = _navArray[i];
                if (
                    scrollTop >= $navArray.top - _navLinkOuterHeight &&
                    scrollTop < $navArray.bottom
                ) {
                    $('#navLink>ul>li').removeClass('selected');
                    $navArray.navArrayA.parent().addClass('selected');
                    return;
                } else {
                    $navArray.navArrayA.parent().removeClass('selected');
                }
            }
        }
    } else {
        if (isFixed == true) {
            $navLink.removeClass('fixed');
        }
    }
});

//滑過選單
$('#navLink').on(
    {
        mouseenter: function() {
            $(this)
                .children('.subLink')
                .slideDown(100);
        },
        mouseleave: function() {
            $(this)
                .children('.subLink')
                .slideUp(100);
        }
    },
    'li'
);
