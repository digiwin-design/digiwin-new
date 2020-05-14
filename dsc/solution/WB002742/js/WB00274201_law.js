// 本頁錨點連結各標題上移時扣掉被TOP覆蓋的高度
$(function(){
	$('#box a').click(function(){
		var $this = $(this);
		var _thisHref = $this.attr('href');
		var _thisHrefHeight = $(_thisHref).offset().top;
		var buffer = 70;
		$('html, body').stop().animate({'scrollTop': _thisHrefHeight - buffer});
		return false;
	})
})