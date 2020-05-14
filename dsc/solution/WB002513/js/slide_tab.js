 
function mySlide(obj1, obj2){
	var n = 0;
	var A = $('.changeDiv li.subB01bg_a1').width();
	$(obj1).click(function(){
		n=$(this).index();		
		$(obj2).animate(
		{'left':n*-A}
		,600)
		$(this).parent().siblings('.contentCon').children().children().eq(n).find('img').addClass('zoomIn');
		console.log($(this).parent().siblings('.contentCon').children().children().eq(n))
		$(this).addClass('current').siblings('li').removeClass('current');
	})
}