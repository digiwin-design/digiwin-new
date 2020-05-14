// JavaScript Document
$(function(){
	/*案例上方頁籤*/
	$('.tabList li').click(function(){
		var now = $(this).index();
		var move = now * 1000 * -1;
		var bgColor;
		if(now % 2 === 0){
			$('#case').removeClass('even');
		}else {
			$('#case').addClass('even');
		}
		// $('#bgImg').removeClass().addClass(bgColor);
		$('#caseList').stop().animate({ left: move });
		$(".tabList li").removeClass('tabNow').eq(now).addClass('tabNow');
	});
})

