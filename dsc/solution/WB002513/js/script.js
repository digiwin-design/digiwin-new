$(function(){

	$(".CONTENT").hover(function(){
		
		$(this).stop().delay(300).animate({top:-400},500,"easeOutCubic");
		
	},function(){
		
		$(this).stop(true).animate({top:0},200,"easeOutCubic");
		
	});	
});