// JavaScript Document
$(function(){
	/*$("#solutionTxtMap").tooltip({
		track: true
	});	*/
		
	var $win = $(window),
		$htmlBody = $('html, body'),
		$link = $('#link'),
		_linkOffset = $link.offset(),
		_linkHeight = $link.height(),
		_linkOuterHeight = $link.outerHeight(true),
		$linkA = $('#link>ul>li').not('#moreLink').children('a'),
		_h2Array = [],
		_buffer = 25;
			
	$.each($linkA, function(i){
		var $a = $linkA.eq(i),
			_href = $a.prop('hash'),
			$tmp = $(_href),
			_tmpOffsetTop = Math.ceil($tmp.offset().top),
			$tmpTxt = $(_href+'Txt'),
			_tmpTxtOffsetTop = Math.ceil($tmpTxt.offset().top),
			_tmpTxtHeight = $tmpTxt.height();

		_h2Array[i] = {
			linkA:$a,
			top:_tmpOffsetTop,
			bottom:_tmpTxtOffsetTop + _tmpTxtHeight
		};
	})

	var isClick = false;
	$linkA.click(function(){
		var $this = $(this),
			_href = $this.attr('href'),
			_hash = $this.prop('hash');
		$('#link>ul>li').css({'background-position':'left top'});
		$this.parent().css({'background-position':'right top'});
		
		isClick = true;

		$htmlBody.stop().animate({
			scrollTop: Math.ceil($(_hash).offset().top - _linkOuterHeight - _buffer)
		}, 400, function(){
			isClick = false;
		});
 		return false;	
	})
	$('#banner .contact').click(function(){
		$('#link>ul>li').css({'background-position':'left top'});
		$('#link .link7').css({'background-position':'right top'});
		
		isClick = true;

		$htmlBody.stop().animate({
			scrollTop: Math.ceil($('#contact').offset().top - _linkOuterHeight - _buffer)
		}, 400, function(){
			isClick = false;
		});
 		return false;			
	})

	var winHeight = $win.height(),
		docHeight = $(document).height(),
		diff = docHeight - winHeight ;	

	// $win.scroll(function(){
	// 	var scrollTop = $win.scrollTop(),
	// 		isFixed = $link.hasClass('fixed');

	// 	if(scrollTop >= _linkOffset.top){
	// 		if(isFixed == false){
	// 			$link.addClass('fixed')	;
	// 			$link.css({'background-color':'#f9f9f9'});
	// 			$('#link .subLink').css({'background-color':'#f9f9f9'});

	// 		}
	// 	}else{
	// 		if(isFixed == true){
	// 			$link.removeClass('fixed');
	// 			$link.css({'background-color':'#fff'});
	// 			$('#link .subLink').css({'background-color':'#fff'});

	// 		}
	// 	}
			
	// })
		
	/*
	var winHeight = $win.height(),
		docHeight = $(document).height(),
		diff = docHeight - winHeight ;	

	$win.scroll(function(){
		var scrollTop = $win.scrollTop(),
			isFixed = $link.hasClass('fixed');
			
		if(scrollTop == diff){
			$('#link>ul>li').css({'background-position':'left top'})	
			$('#link>ul>li').last().css({'background-position':'right top'}).addClass('selected');
		}else{
			$('#link>ul>li').last().css({'background-position':'left top'}).removeClass('selected');
		}

		if(scrollTop >= _linkOffset.top){
			if(isFixed == false){
				$link.addClass('fixed')	;
				$link.css({'background-color':'#f9f9f9'});
			}
			if(isClick == false){
				scrollTop = scrollTop + _linkOuterHeight;
				for(var i = 0; i < _h2Array.length-1; i++){
					var h2 = _h2Array[i]	;
					if(scrollTop >= h2.top- _linkOuterHeight && scrollTop < h2.bottom){
						$('#link>ul>li').css({'background-position':'left top'})	
						h2.linkA.parent().css({'background-position':'right top'}).addClass('selected');
						return;
					}else{
						h2.linkA.parent().css({'background-position':'left top'}).removeClass('selected');
					}
				}
			}	
		}else{
			if(isFixed == true){
				$link.removeClass('fixed');
				$link.css({'background-color':'#fff'});
			}
			if(isClick == false){
				$('#link>ul>li').css({'background-position':'left top'}).removeClass('selected');
			}
		}
	})
*/
	//滑過選單
	$('#moreLink').hover(function(){
		$(".subLink").stop(true,true).slideDown(100);
	}, function(){
		$(".subLink").stop(true,true).slideUp(100);
	})

	$('#link>ul>li').hover(function(){
			var $this = $(this);
			$this.css({'background-position':'right top'});
		},function(){
			var $this = $(this);
				selected = $this.hasClass('selected')
			if(selected == true){
				$this.css({'background-position':'right top'});;
			}else{
				$this.css({'background-position':'left top'});;
			}
	});

	/*典範客戶*/
	var $caseTxt = $('#guideTxt>li'),
		_caseHeight = $caseTxt.height(),
		$caseDes = $('.guideDes'),
		_caseDesHeight = $caseDes.height(),
		_speed = 200;

	$caseTxt.hover(function(){
		var $this = $(this),
			$thisDes = $this.find('.guideDes');
		$thisDes.stop().animate({
			top:_caseHeight - _caseDesHeight
		}, _speed);
	}, function(){
		var $this = $(this),
			$thisDes = $this.find('.guideDes');
		$thisDes.stop().animate({
			top:_caseHeight
		}, _speed);

	})

	/*需求與困擾*/
	$('#upgradeTxt>li:nth-child(3n)').addClass('end');
	var $problemsTxt = $('#upgradeTxt>li'),
		_proHeight = $problemsTxt.height(),
		$proDes = $('.proDes'),
		_proDesHeight = $proDes.innerHeight();

	$problemsTxt.hover(function(){
		var $this = $(this),
			$thisDes = $this.find('.proDes');
		$thisDes.stop().animate({
			top:_proHeight - _proDesHeight
		}, _speed);
	}, function(){
		var $this = $(this),
			$thisDes = $this.find('.proDes');
		$thisDes.stop().animate({
			top:_proHeight
		}, _speed);

	})
	
	// Released under MIT license: http://www.opensource.org/licenses/mit-license.php
 
	$('[placeholder]').focus(function() {
		var input = $(this);
		if (input.val() == input.attr('placeholder')) {
		input.val('');
		input.removeClass('placeholder');
		}
	}).blur(function() {
		var input = $(this);
		if (input.val() == '' || input.val() == input.attr('placeholder')) {
		input.addClass('placeholder');
		input.val(input.attr('placeholder'));
		}
	}).blur().parents('form').submit(function() {
			$(this).find('[placeholder]').each(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
			input.val('');
			}
		})
	}); 

	var historyHash = window.location.hash,
		topHeight =  _linkOuterHeight + _buffer;
	if(historyHash !=''){
		if(historyHash =='#top'){
			topHeight = 0;
		}
		$htmlBody.stop().animate({
			scrollTop: Math.ceil($(historyHash).offset().top - topHeight)
		}, 400);		
	}



})
/*---------------------------------------------------------------------------*/

