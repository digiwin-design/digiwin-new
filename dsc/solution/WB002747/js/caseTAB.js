$(function(){

	$("#num2 li").click(function(){
		
		var NOW = $(this).index();
		
		var MOVE = NOW * 960 * -1;
		
		$("#blockCon2").stop().animate({ left: MOVE });
		
		$("#num2 li").find("a").removeClass().eq(NOW).addClass("NOWTAB");
		
		return false;
	});
	
})