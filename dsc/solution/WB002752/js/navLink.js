// JavaScript Document
$(function(){

	var $win = $(window);
	var winHeight = $win.height();
	var	docHeight = $(document).height();
	var	diff = docHeight - winHeight;	
	var	$htmlBody = $('html, body');
	var	$navLink = $('#navLink');
	var	_navLinkOffset = $navLink.offset();
	var	_navLinkOuterHeight = $navLink.outerHeight(true);
	var	$navLinkA = $('#navLink>ul>li').children('a');
	var	_navArray = [];
	var	_buffer = 25;

	/*分頁選單自動加上fixed*/
	var URL_pathName = window.location.pathname;
	var URL_fileName = URL_pathName.substring(URL_pathName.lastIndexOf('/')+1);
	var pageIndex = $navLink.data('pageIndex');

	if(URL_fileName !== pageIndex){
		$navLink.addClass('fixed');
	}else{
		var j=0;
		$.each($navLinkA, function(i){
			var $a = $navLinkA.eq(i);
			var _href = $a.attr('href');

			//判斷是否為錨點
			if(_href.match(/^#[a-zA-Z0-9]{2,}$/)){
				var	_hash = $a.prop('hash');
				var	$tmp = $(_hash);
				var	_tmpOffsetTop = Math.ceil($tmp.offset().top);
				var	_tmpHeight = $tmp.outerHeight(true);

				_navArray[j] = {
					navArrayA : $a,
					top : _tmpOffsetTop,
					bottom : _tmpOffsetTop + _tmpHeight
				};
				j++;
			}
		})

		var isClick = false;
		$navLinkA.click(function(){
			var $this = $(this);
			var	_hash = $this.prop('hash');
			$('#navLink>ul>li').removeClass('selected');	
			$this.addClass('selected');	

			isClick = true;
			$htmlBody.stop().animate({
				scrollTop: Math.ceil($(_hash).offset().top - _navLinkOuterHeight - _buffer)
			}, 400, function(){
				isClick = false;
			});
	 		return false;	
		})

		$win.scroll(function(){
			var scrollTop = $win.scrollTop(),
				isFixed = $navLink.hasClass('fixed');

			if(scrollTop >= _navLinkOffset.top){
				if(isFixed == false){
					$navLink.addClass('fixed')	;
					$navLink.css({'background-color':'#f9f9f9'});
					$navLink.find('.subLink').css({'background-color':'#f9f9f9'});
				}
				if(isClick == false){
					scrollTop = scrollTop + _navLinkOuterHeight;
					for(var i = 0; i < _navArray.length-1; i++){
						var $navArray = _navArray[i];
						if(scrollTop >= $navArray.top - _navLinkOuterHeight && scrollTop < $navArray.bottom){
							$('#navLink>ul>li').removeClass('selected');
							$navArray.navArrayA.parent().addClass('selected');
							return;
						}else{
							$navArray.navArrayA.parent().removeClass('selected');
						}
					}
				}	
			}else{
				if(isFixed == true){
					$navLink.removeClass('fixed');
					$navLink.css({'background-color':'#fff'});
					$navLink.find('.subLink').css({'background-color':'#fff'});
				}
				if(isClick == false){
					$('#navLink>ul>li').removeClass('selected');
				}
			}
		})
	}

	/*點擊聯絡我們區塊*/
	var _contactTop = $('#contact').offset().top;
	$('.contactBtn, .contactLink').click(function(){
		$htmlBody.stop().animate({scrollTop : Math.ceil(_contactTop)});
	})


	//滑過選單
	$("#navLink").on({
	    mouseenter: function () {
	        $(this).children('.subLink').slideDown(100);
	    },
	    mouseleave: function () {
	        $(this).children('.subLink').slideUp(100);
	    }
	}, 'li');

})
