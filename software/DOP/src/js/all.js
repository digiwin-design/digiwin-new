// 錨點連結
$(document).on('click', '.js-nav', function(event) {
    event.preventDefault();
    let target = $(this).attr('href') || $(this).attr('xlink:href') || $(this).data('target');
    let offset = $('.page-submenu').outerHeight();
    let targetPos = $(target).offset().top;
    let finalPos = offset ? targetPos - offset : targetPos;
    window.scroll({ top: finalPos, left: 0, behavior: 'smooth' });
});
