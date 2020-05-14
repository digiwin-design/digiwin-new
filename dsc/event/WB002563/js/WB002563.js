$(function(){
	var $win = $(window),
		$htmlBody = $('html, body'),
		$MENU = $('#MENU'),
		_MENUOffset = $MENU.offset(),
		_MENUHeight = $MENU.height(),
		_MENUOuterHeight = $MENU.outerHeight(true),
		_buffer = 25;

	$('#contactSec').click(function(){
		$htmlBody.animate({scrollTop:$('#contact').offset().top}, 800);
	});

	$win.scroll(function(){
		var scrollTop = $win.scrollTop(),
			isFixed = $MENU.hasClass('fixed');

		if(scrollTop >= _MENUOffset.top){
			if(isFixed == false){
				$MENU.addClass('fixed')	;
			}
		}else{
			if(isFixed == true){
				$MENU.removeClass('fixed');
			}
		}
			
	})

	var historyHash = window.location.hash;
	$htmlBody.stop().animate({
		scrollTop: Math.ceil($(historyHash).offset().top - _MENUOuterHeight - _buffer)
	}, 400);
			
})