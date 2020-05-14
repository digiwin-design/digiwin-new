var $win = $(window);
var winHeight = $win.height();
var	docHeight = $(document).height();
var	diff = docHeight - winHeight;	
var	$htmlBody = $('html, body');
var	$navLink = $('#navLink');
var	_navLinkOffset = $navLink.offset();
var	_navLinkOuterHeight, $navLinkA;
var	_navArray = [];
var	_buffer = 25;

var pageIndex = $navLink.data('pageIndex');
var URL_pathName = window.location.pathname;
var URL_fileName = URL_pathName.substring(URL_pathName.lastIndexOf('/')+1);

//如果a的連結是#contact，滑到下方諮詢單
// $('a[href*="#contact"]').click(function () {
//     $htmlBody.stop().animate({
//         scrollTop: Math.ceil($('#contact').offset().top - _navLinkOuterHeight)
//     });
//     return false;
// });

$('.jobProblem .txt').hover(
    function () {
        var $this = $(this);
        $this
            .find('.txtLayer')
            .stop()
            .fadeOut();
        $this
            .find('.mask')
            .stop()
            .animate({ top: 0 }, function () {
                $this
                    .find('.txtLayer')
                    .css({ 'z-index': 5, color: '#fff' })
                    .stop()
                    .fadeIn();
            });
    },
    function () {
        var $this = $(this);
        $this
            .find('.mask')
            .stop()
            .animate({ top: 100 + '%' });
        $this.find('.txtLayer').removeAttr('style');
    }
);

//案例超過字數顯示省略號
$('.caseGroup .desc').each(function () {
    var maxWordNum = 60;
    if ($(this).text().length > maxWordNum) {
        $(this).text(
            $(this)
                .text()
                .substring(0, maxWordNum)
        );
        $(this).html($(this).html() + '...');
    }
});

$('.fa-chevron-down').click(function () {
    $('html, body').animate({
        scrollTop:
            $('.issueGroup').offset().top - $navLink.outerHeight(true) + 'px'
    });
});

var changeNum = 0;
$('#jobProblem .outline').click(function () {
    var $this = $(this).index();
    if (changeNum == $this) {
        return;
    } else {
        $('#jobProblem .outline')
            .removeClass('active')
            .eq($this)
            .addClass('active');
        $('#jobProblem .jobProblem')
            .eq($this)
            .stop(true, true)
            .fadeIn();
        $('#jobProblem .jobProblem')
            .eq(changeNum)
            .stop(true, true)
            .fadeOut();
        changeNum = $this;
    }
});

/*行業別 hover換行業icon底圖*/
function bgPosition(id, isMouseIn) {
    var bgWidth;
    if (isMouseIn) {
        bgWidth = -1000;
    } else {
        bgWidth = 1000;
    }
    var bgPos = $('#' + id)
            .css('backgroundPosition')
            .split(' '),
        bgPosX = parseFloat(bgPos[0]) + bgWidth + 'px',
        bgPosY = bgPos[1];
    return [bgPosX, bgPosY];
}

$('#industryTxt>li').hover(
    function () {
        var $thisId = $(this).attr('id'),
            newPos = bgPosition($thisId, true);
        $(this).css('backgroundPosition', newPos[0] + ' ' + newPos[1]);
    },
    function () {
        var $thisId = $(this).attr('id'),
            newPos = bgPosition($thisId, false);
        $(this).css('backgroundPosition', newPos[0] + ' ' + newPos[1]);
    }
);

// slider
(function () {
    if ($('.swiper-container').length) {
        var mySwiper;

        var sliderInit = function () {
            mySwiper = new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                autoplay: {
                    disableOnInteraction: false
                },
                loop: true
            });
        };

        sliderInit();

        // 調整視窗時依據寬度啟用/停用slider
        var resizeWidth = function (pMatchMedia) {
            // <=768px
            if (pMatchMedia.matches) {
                sliderInit();

                // slider hover
                $('#abgneBlock').hover(
                    function () {
                        mySwiper.autoplay.stop();
                    },
                    function () {
                        mySwiper.autoplay.start();
                    }
                );
            }
            // >768px
            else {
                // destroy slider
                mySwiper.destroy();
            }
        };
        var mm = window.matchMedia('(max-width: 768px)');
        mm.addListener(resizeWidth);
        resizeWidth(mm);
    }
})();

Shadowbox.init({ continuous: 'next', displayCounter: true });
