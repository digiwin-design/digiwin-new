$(function(){

	$("#num1 li").click(function(){
		
		var NOW = $(this).index();
		
		var MOVE = NOW * 960 * -1;
		
		$("#blockCon1").stop().animate({ left: MOVE });
		
		$("#num1 li").find("a").removeClass().eq(NOW).addClass("NOWTAB");
		
		return false;
	});
	
})