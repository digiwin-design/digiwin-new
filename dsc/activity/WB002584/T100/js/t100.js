// JavaScript Document
$(function(){
		
	var $win = $(window),
		$htmlBody = $('html, body'),
		$nav = $('#nav'),
		$navA = $('#nav a'),
		_navArray = [],
		_buffer = 540;
			
	$.each($navA, function(i){
		var $a = $navA.eq(i),
			$hash = $a.prop('hash'),
			$tmp = $($hash),
			_tmpOffsetTop = Math.ceil($tmp.position().top),
			_tmpHeight = $tmp.outerHeight(true);

		_navArray[i] = {
			linkA:$a,
			top:_tmpOffsetTop - _buffer,
			bottom:_tmpOffsetTop + _tmpHeight - _buffer
		};
	})

	var isClick = false;
	$navA.click(function(){
		var $this = $(this),
			_href = $this.attr('href'),
			_hash = $this.prop('hash'),
			_hashIndex = $this.parent().index(),
			_hashTop = $(_hash).offset().top;
		$(this).addClass('now').parent().siblings().children().removeClass('now');
		
		isClick = true;
		if(_hashIndex == 2 || _hashIndex == 3 || _hashIndex == 5){
			_hashTop = _hashTop+100;
		}else if(_hashIndex == 0){
			_hashTop = _hashTop+50;
		}

		$htmlBody.stop().animate({
			scrollTop: Math.ceil(_hashTop-50)
		}, 400, function(){
			isClick = false;
		});
 		return false;	
	})


	var winHeight = $win.height(),
		docHeight = $(document).height(),
		diff = docHeight - winHeight ;	

	$win.scroll(function(){
		var scrollTop = $win.scrollTop();
		if(scrollTop>_navArray[0].top){
			$('#nav').fadeIn();
		}else{
			$('#nav').fadeOut();
		}
		if(isClick == false){
			//scrollTop = scrollTop + _linkOuterHeight;
			for(var i = 0; i < _navArray.length; i++){
				var _section = _navArray[i];
				if(scrollTop >= _section.top && scrollTop < _section.bottom){
					_section.linkA.addClass('now');
					_section.linkA.children().css({opacity:1});
					if(isHover){
						_section.linkA.parent().siblings().children().removeClass('now');
						_section.linkA.parent().siblings().children().find('.secName').css({opacity:1});
					}else{
						_section.linkA.parent().siblings().children().removeClass('now');
						_section.linkA.parent().siblings().children().find('.secName').css({opacity:0});
					}
					
					return;
				}else{
					_section.linkA.parent().siblings().children().removeClass('now');
				}
			}
		}	
	})

	var isHover = false;
	$('#nav').hover(function(){
		$('#nav .secName').stop().animate({opacity:1});
		isHover = true;
	},function(){
		$('#nav a').not('.now').find('.secName').stop().animate({opacity:0});
		isHover = false;
	})

	$('#section0 h1').click(function(){
		var section01 = $('#section01').offset().top;
			$htmlBody.stop().animate({
				scrollTop: Math.ceil(section01)
			}, 400, function(){
				isClick = false;
			});			
	})

	
	videoSize();

	$win.resize(function(){
		videoSize();
	})

	function videoSize(){
		var winHeight = $win.height(),
			winWidth = $win.width(),
			videoWidth = (16*winHeight)/9;
		if(winWidth < 1024){
			$('.video').css({'height':565, 'width':1000});
		}else{
			$('.video').css({'height':winHeight, 'width':videoWidth});
		}
	}

})
