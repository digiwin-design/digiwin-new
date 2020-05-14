"use strict";
$(function () {
    $(".t_box .t_li,.th_box .t_li,#item .th_box .t_li").hover(function(){
        $(this).find('.fadein').stop().animate({"top" : "0"});
        $(this).find('.fadeout');
    }, function(){
        $(this).find('.fadein').stop().animate({"top" : "130%"});
        $(this).find('.fadeout');
    })
});

$(function () {
    // $(".togglebox .la1").on("click",function () {
    //     $(".la1").css("display","none");
    //     $(".la2").css("display","block");
    // });
    // $(".togglebox .la2").on("click",function () {
    //     $(".la2").css("display","none");
    //     $(".la1").css("display","block");
    // });
        var $tab_li = $('.tab_list li');
        $tab_li.hover(function(){
            $(this).addClass('active').siblings().removeClass('active');
            var index = $tab_li.index(this);
            $('.tab_cont>img').eq(index).show().siblings().hide();
        });

});

$(function () {
    var mySwiper = new Swiper('.slider_box .swiper-container',{
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay:true,
    })
});


$(function(){
    //菜单隐藏展开
    var tabs_i=0
    $('.vtitle').click(function(){
        var _self = $(this);
        var j = $('.vtitle').index(_self);
        if( tabs_i == j ) return false; tabs_i = j;
        $('.vtitle em').each(function(e){
            if(e==tabs_i){
                $('em',_self).removeClass('vconst').addClass('vconst');
            }else{
                $(this).removeClass('vconst').addClass('vconst');
            }
        });
        $('.vcon').slideUp().eq(tabs_i).slideDown();
    });
});

//移动端轮播
$(function () {
    var mySwiper1 = new Swiper("#manage .swiper-container",{
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay:true,
        watchSlidesProgress : true,
        watchSlidesVisibility : true,
        slidesPerView: 2,
        spaceBetween: 12,
        freeMode: true,
        centeredSlides : true,
        centeredSlidesBounds: true,
    })
})