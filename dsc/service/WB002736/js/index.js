// 贴心服务
function hoverDIV(){
	var $caseTxt = $('.hoverLi'),
		_caseHeight = $caseTxt.height(),
		$caseDes = $('.hovDiv'),
		_caseDesHeight = $caseDes.height(),
		_speed = 600;

	$caseTxt.hover(function(){
		var $this = $(this),
			$thisDes = $this.find('.hovDiv');
			if ( $this.parent().attr('class') == 'sec5GuestUl clearfix') {
				
				$thisDes.stop().animate({
					top:0
				}, _speed);
			} else {
				$thisDes.stop().animate({
					top:_caseHeight - _caseDesHeight
				}, _speed);
			}
		
	}, function(){
		var $this = $(this),
			$thisDes = $this.find('.hovDiv');
		$thisDes.stop().animate({
			top:_caseHeight
		}, _speed);

	})
}
 hoverDIV();
 // 解决方案
 function tabChange() {
 	var $chanSpan = $('.sec3CaseUl > li'),
 		$chanDiv = $('.sec3CaseOl > li');

 	$chanSpan.click(function(){
 		$(this).addClass('current').siblings().removeClass('current');
 		var i = $(this).index();
 		$chanDiv.eq(i).addClass('chanNow').siblings().removeClass('chanNow');
 	})	
 }
 tabChange();
 // FQA
 function changesta(){
	$('.sec6Q').click(function() {
		if($(this).siblings('.sec6A').is(':hidden')){	
			
			$(this).parent().siblings().find('.sec6A').slideUp();
			$('.sec6Q').removeClass('sec6QCur');
			$(this).addClass('sec6QCur');
			$(this).siblings('.sec6A').slideDown();		
		}else{
			$(this).siblings('.sec6A').slideUp();	
		}
		
	});
};
changesta();
// 年度合約弹窗

	$('.sec2ServBtn-1 a').click(function(){
		$('.sec2ServCov').show();
		console.log(1)
	})
	$('.sec2ServClose,.sec2CovBg').click(function(){
		$('.sec2ServCov').hide();
	})

