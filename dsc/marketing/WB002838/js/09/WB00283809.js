//banner動畫
    setTimeout(function(){
        $(".text_img").addClass("animated bounceInLeft").show();
    },10);

//foreword動畫
$(function () {
    setTimeout(function(){
        $(".before_txt").addClass("animated bounceInLeft").show();
    },1200);
    setTimeout(function(){
        $(".row").addClass("animated bounceInLeft").show();
    },1400);
    setTimeout(function(){
        $(".after_txt").addClass("animated bounceInLeft").show();
    },1600);
})


// "智慧因應"滑鼠移入/出效果
// $('.js-problemList').hover(function() {
//     $(this).children('.outline02').stop().animate({
//         'top': '0'
//     });
//     $(this).find('.more').stop().animate({
//         'bottom': '-60px'
//     });
//
// }, function() {
//     $(this).children('.outline02').stop().animate({
//         'top': '100%'
//     });
//     $(this).find('.more').stop().animate({
//         'bottom': '0'
//     });
// });

// hover debug
// $('.js-problemList').children('.outline02').stop().animate({
//     'top': '0'
// });
// $('.js-problemList').find('.more').stop().animate({
//     'bottom': '-60px'
// });

//"成功案例"選單開合
$(document).on('click', '.js-case-header', function() {
    // 收起其它選單
    $(this).parents('li')
        .siblings()
        .find('.js-case-content').removeClass('active')
        .siblings().removeClass('active');

    // 開合目前點擊選單
    $(this).toggleClass('active')
        .siblings().toggleClass('active');
});

// 點擊導覽列連結
// $(document).on('click', '.js-nav', function(event) {
//     event.preventDefault();
//     if (!$(this).hasClass('active')) {
//         flag = false;
//
//         target = $(this).attr('href');
//
//         // 變更連結樣式
//         $('.js-nav').removeClass('active');
//         $(this).addClass('active');
//
//         // 取得移動目標位置
//         let targetPos = $(target).position().top;
//         if ($(window).scrollTop() > targetPos && target === '#wisdom' && window.matchMedia("(min-width: 641px)").matches) {
//             // 如在桌機向上移動至第一個區塊
//             finalPos = Math.floor(targetPos);
//         } else {
//             finalPos = Math.floor(targetPos - navHeight);
//         }
//
//         // 移動頁面
//         $('html, body').animate({ scrollTop: finalPos });
//     }
// });

// 點擊解決方案
// $(document).on('click', '.js-goContact', function() {
//     let targetPos = $('#contact').position().top;
//     $('html, body').animate({ scrollTop: targetPos - navHeight });
// });
//
// $(window).on('resize', function() {
//     // 導覽列回原位置
//     $nav_dtp.removeClass('fixed');
//     $nav_mb.removeClass('fixed');
//     navPos_dtp = $nav_dtp.position().top;
//     navPos_mb = $nav_mb.position().top;
// });
//
// $(window).on('scroll', function() {
//     // 定位導覽列
//     let pos = $(this).scrollTop();
//     if (window.matchMedia("(min-width: 641px)").matches) {
//         // >641px
//         if (pos >= navPos_dtp) {
//             $nav_dtp.addClass('fixed');
//         } else {
//             $nav_dtp.removeClass('fixed');
//         }
//     } else {
//         // <=640px
//         if (pos >= navPos_mb) {
//             $nav_mb.addClass('fixed');
//         } else {
//             $nav_mb.removeClass('fixed');
//         }
//     }
//
//     // 透過導覽列連結移動頁面結束後
//     if (pos === finalPos) {
//         // 變更網址hash
//         if (!md.mobile()) {
//             history.replaceState(null, null, target);
//         }
//
//         flag = true;
//     }
//
//     if (flag) {
//         // 依據網頁位置變更導覽列連結樣式
//         let result = articlePos.filter(function(value, index) {
//             return (pos + navHeight) >= value;
//         });
//         $('.js-nav').removeClass('active');
//         if (result.length) {
//             $nav_dtp.find('.js-nav').eq(result.length - 1).addClass('active');
//             $nav_mb.find('.js-nav').eq(result.length - 1).addClass('active');
//         }
//
//         // 變更網址hash
//         if (!md.mobile()) {
//             let hash = $('.js-nav.active').attr('href');
//             history.replaceState(null, null, hash);
//         }
//     }
// });

// =============================================================================
// initial
// =============================================================================
// let $nav_dtp = $('#nav-dtp');
// let $nav_mb = $('#nav-mb');
// let navHeight = 80;
// let target; // 指定頁面移動的目標
// let flag = true; // 透過導覽列連結移動頁面結束後的判斷
// let finalPos; // 頁面移動最終位置
// let md = new MobileDetect(window.navigator.userAgent); // 設備偵測
//
// // 導覽列位置
// let navPos_dtp = $nav_dtp.position().top;
// let navPos_mb = $nav_mb.position().top;
//
// // 取得各區塊網頁位置
// let articlePos = [];
// $('.js-article').each(function(index, element) {
//     let top = Math.floor($(this).position().top);
//     articlePos.push(top);
// });