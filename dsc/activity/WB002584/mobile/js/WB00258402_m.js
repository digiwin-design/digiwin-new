// JavaScript Document
$(function(){
		
	var $win = $(window),
		_winHeight = $win.height(),
		_winWidth = $win.width(),
		$htmlBody = $('html, body');

	if(_winWidth <= 500){
		$('#section0').css({height:_winHeight})
	}

	$('#section0 h1').click(function(){
		var section01 = $('#section01').offset().top;
		$htmlBody.stop().animate({
			scrollTop: Math.ceil(section01)
		}, 400, function(){
			//isClick = false;
		});			
	})
})
