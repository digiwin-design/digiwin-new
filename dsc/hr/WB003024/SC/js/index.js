$(function () {
    $('.arrow').click(function(){
        var $htmlBody = $('html, body');
        $htmlBody.animate({scrollTop:$('#CREATE').offset().top},500);
    });
});


$(function () {
    $("#CHOOSE ul li").hover(function(){
        $(this).find('.fadein').stop().animate({"top" : "0"});
        $(this).find('.fadeout');
    }, function(){
        $(this).find('.fadein').stop().animate({"top" : "130%"});
        $(this).find('.fadeout');
    })
});