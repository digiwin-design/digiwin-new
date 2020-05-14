'use strict';

// =============================================================================
// function
// =============================================================================
/**
 * 取得各區塊網頁位置
 */
function getElementPos() {
    sectionPos.length = 0;
    $('.js-article').each(function (index, element) {
        var top = $(this).position().top;
        sectionPos.push(top);
    });
}

/**
 * 移動下一頁箭頭位置
 */
function moveNextArrow() {
    var distance = $shorten.position().top - $(window).height(); // 影片下方與視窗底部的距離
    var pos = $(window).scrollTop();
    if (pos >= distance) {
        $nextArrow.addClass('is-nofixed');
    } else {
        $nextArrow.removeClass('is-nofixed');
    }
}

// =============================================================================
// event
// =============================================================================
// "應用效益"滑鼠移入/出效果
$('.js-list').hover(function () {
    $(this).find('.js-outline02').stop().animate({
        'top': '0'
    });
}, function () {
    $(this).find('.js-outline02').stop().animate({
        'top': '100%'
    });
});

// 點擊導覽列連結
$(document).on('click', '.js-nav', function (event) {
    event.preventDefault();
    if (!$(this).hasClass('active')) {
        flag = false;

        target = $(this).attr('href');

        // 變更連結樣式
        $('.js-nav').removeClass('active');
        $(this).addClass('active');

        // 取得移動目標位置
        var targetPos = $(target).position().top;
        finalPos = targetPos - navHeight;

        // 移動頁面
        $('html, body').animate({ scrollTop: finalPos });
    }
});

// 點擊解決方案
$(document).on('click', '.js-goContact', function (event) {
    event.preventDefault();
    var targetPos = $('#contact').position().top;
    $('html, body').animate({ scrollTop: targetPos - navHeight });
});

$(window).on('load resize', function () {
    getElementPos();
    moveNextArrow();
});

$(window).on('scroll', function () {
    var pos = $(this).scrollTop() + 5; // 因有誤差須加上偏移量

    // 定位導覽列
    if (pos >= navPos) {
        $nav.addClass('fixed').fadeIn();
        // 影片靜音
        player.mute();
    } else {
        $nav.removeClass('fixed');
    }

    // 透過導覽列連結移動頁面結束後
    if (pos >= finalPos) {
        // 變更網址hash
        if (!md.mobile()) {
            history.replaceState(null, null, target);
        }

        flag = true;
    }

    if (flag) {
        // 依據網頁位置變更導覽列連結樣式
        var result = sectionPos.filter(function (value, index) {
            return pos + navHeight >= value;
        });
        $('.js-nav').removeClass('active');
        if (result.length) {
            $nav.find('.js-nav').eq(result.length - 1).addClass('active');
        }

        // 變更網址hash
        if (!md.mobile()) {
            var hash = $('.js-nav.active').attr('href');
            history.replaceState(null, null, hash);
        }
    }

    moveNextArrow();
});

// =============================================================================
// initial
// =============================================================================
var $nav = $('#nav');
var $nextArrow = $('#nextArrow');
var $shorten = $('#shorten');
var navHeight = 60;
var navPos = void 0;
var sectionPos = []; // 各區塊網頁位置
var target = void 0; // 指定頁面移動的目標
var flag = true; // 透過導覽列連結移動頁面結束後的判斷
var finalPos = void 0; // 頁面移動最終位置
var md = new MobileDetect(window.navigator.userAgent); // 設備偵測

// 取得導覽列位置
if (window.matchMedia("(max-width: 480px)").matches) {
    navPos = $nav.position().top;
} else {
    navPos = 35; // 因桌機預設隱藏無法取得位置，故直接指定值
}

moveNextArrow();

// =============================================================================
// youtube api
// =============================================================================
// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player)
// after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
    var playerVars = {
        loop: 1,
        playlist: 'HlgZswfAAuM',
        controls: 0,
        showinfo: 0,
        rel: 0
    };

    // 如為 chrome 則預設靜音，否則無法自動播放
    // if (md.is('WebKit')) {
    //     playerVars['mute'] = 1;
    // }

    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'HlgZswfAAuM',
        suggestedQuality: 'highres',
        playerVars: playerVars,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// The API calls this function when the player's state changes.
// The function indicates that when playing a video (state=1),
// the player should play for six seconds and then stop.
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        $("#nav").fadeIn();
    }
}
// =============================================================================
// end youtube api
// =============================================================================
//# sourceMappingURL=WB00286002.js.map
