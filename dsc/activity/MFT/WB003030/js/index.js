(function(){
	var $htmlBody = $('html, body');	
	var $win = $(window);
	var $winWidth = $win.width();
	var mainNavHeight = $('#mainNav').outerHeight(true);	
	var mainNavLength = $('#mainNav li').length;
	var cisHeight = $('#nav').outerHeight();	
	var topArray = [];
	var isHash = /^#[a-zA-Z0-9]{2,}$/;

	$win.resize(function(){
		$winWidth = $win.width();
		$('.secBot ul>li').removeClass('current');
		$('.secBot ul>li').children().removeClass('now');
		phoneNum($winWidth);

		if ( $winWidth>=1000 && $winWidth<= 1920) {
			$('.content').css('min-width','auto')
			return false;
		} else if($winWidth>=320 && $winWidth<= 750){
			$('.content').css('min-width','auto')
			return false;
		} else if($winWidth>=751 && $winWidth< 1000){
			$('.content').css('min-width',1000+'px');
			// $('.section1 .content').css('min-width','auto')
		};		
	}).resize();

	function phoneNum(w){
		if(w <= 640){
			var link = 'tel:0800009890';
		}else{
			var link = 'https://www.digiwin.com/tw/contact/eform.html';
		}
		$('#mainNav .contactUs').attr('href',link);
	}

	phoneNum($winWidth);


	for(var i = 0; i < mainNavLength; i++) {
		var $a = $('#mainNav li').eq(i);
		var hash = $a.children().prop('hash');

		if(hash.match(isHash)){
			var top = $(hash).offset().top;
			var bottom = top + $(hash).outerHeight(true);
			
			topArray[i] = {
				a: $a,
				top: top,
				bottom: bottom
			}
		}
	}

	$('#mainNav ul>li').click(function(){
		var hash = $(this).children().prop('hash');
		if(hash.match(isHash)){
			$(this).addClass('current');
			$htmlBody.stop().animate({scrollTop: $(hash).offset().top - mainNavHeight}, 600);
			return false;
		}
	})

	var isMobileNav = false;
	var isFixed = false;
	$win.scroll(function(){
		var $winTop = $win.scrollTop();
		if($winTop > cisHeight){
			if($winWidth <= 750 && !isMobileNav){
				$('#mainNav').animate({'top':'-100px'}, 500, function(){$(this).css({'top':'auto', 'bottom':'-50px', 'position':'fixed', 'display':'block'}).animate({'bottom':'0'}, 500)});
				isMobileNav = true;		
			}else if($winWidth >= 750 && !isFixed){
				$('#mainNav').stop().fadeIn();
				$('#mainNav').addClass('fixed');
				isFixed = true;
			}
			for (var n = 0; n < topArray.length; n++) {
				var newTopArray = topArray[n];
				if ( $winTop >= newTopArray.top - mainNavHeight && $winTop < newTopArray.bottom - mainNavHeight){
						$('#mainNav ul>li').removeClass('current');
						newTopArray.a.addClass('current');
						return false;
				}else if($winTop <= $('#recent').offset().top){
					$('#mainNav ul>li').removeClass('current');
				} 			
			}
		}else{
			if($winWidth <= 750 && isMobileNav){
				$('#mainNav').animate({'bottom':'-50px'}, 500, function(){$(this).css({'top':'-50px', 'bottom':'auto', 'position':'absolute', 'display':'none'}).animate({'top':'50px'})});
				isMobileNav = false;		
			}else{
				$('#mainNav').stop().fadeOut();
				$('#mainNav').removeClass('fixed');
				isFixed = false;
			}
		}	
	}).scroll();

	$('.arrow').click(function(){
		$winWidth = $win.width();
		if($winWidth <= 750){
			var buffer = 0;
		}else{
			var buffer = mainNavHeight;
		}
		$htmlBody.stop().animate({scrollTop:$('#recent').offset().top - buffer});
	})

	$('#returnTop,.reTop').click(function(){
		$htmlBody.stop().animate({
			scrollTop:($('#banner').offset().top)
		},600)
	})


	$('.close').click(function(){
		$(".wrap").hide();
		$("#teaIntr").show();
	})
})()
