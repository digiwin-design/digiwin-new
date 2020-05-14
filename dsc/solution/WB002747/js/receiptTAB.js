$(function(){

	$("#num3 li").click(function(){
		
		var NOW = $(this).index();
		
		var MOVE = NOW * 960 * -1;
		
		$("#blockCon3").stop().animate({ left: MOVE });
		
		$("#num3 li").find("a").removeClass().eq(NOW).addClass("NOWTAB");
		
		return false;
	});
	
})