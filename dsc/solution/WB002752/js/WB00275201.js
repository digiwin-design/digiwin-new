// JavaScript Document
$(function(){
	var $win = $(window);
	var $htmlBody = $('html, body');
	var navHeight = $('#navLink').outerHeight(true);

	//客戶心聲跳窗
	$('#heartSound .page_btn').click(function(){
		$('#heartSoundPop').stop().fadeIn(function(){
			$htmlBody.stop().animate({scrollTop : $('#heartSoundPop').offset().top - navHeight});
		});
	})

	$('.closeBtn').click(function(){
		$('#heartSoundPop').stop().fadeOut();
	})

	// 接案階段解決方案轉換
	$('.btnGroup .page_btn').click(function(){
		var now = $(this).index();
		var move = now * 1000 * -1;
		var nowParentsTop = $(this).parents('.getCaseStep').offset().top - navHeight;
		$(this).parent().siblings('.getCaseTxt').stop().animate({ left: move }, function(){
			$htmlBody.stop().animate({scrollTop : nowParentsTop });
		});
		$(this).addClass('now').siblings().removeClass('now');	
	});

	/*行業別 hover換行業icon底圖*/
	function bgPosition(id, isMouseIn){
		if(isMouseIn){
			var bgWidth = -1000;
		}else{
			var bgWidth = 1000;
		}
		var bgPos = $('#'+id).css('backgroundPosition').split(' '),
			bgPosX = (parseFloat(bgPos[0])+bgWidth)+'px',
			bgPosY = bgPos[1];
		return [bgPosX, bgPosY];
	}	

	$('#industryTxt>li').hover(function(){
		var $thisId = $(this).attr('id'),
		    newPos = bgPosition($thisId, true);
	    $(this).css('backgroundPosition',newPos[0] + ' ' + newPos[1]);
	},	function () {
		var $thisId = $(this).attr('id'),
		    newPos = bgPosition($thisId, false);
	    $(this).css('backgroundPosition',newPos[0] + ' ' + newPos[1]);
	});	

})
