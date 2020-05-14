$(function(){

	$("#num2 li").click(function(){
		
		var NOW = $(this).index();
		
		var MOVE = NOW * 960 * -1;
		
		$("#blockCon2").stop().animate({ left: MOVE });
		
		$("#num2 li").find("a").removeClass().eq(NOW).addClass("NOWTAB");
		
		return false;
	});
	
})

$(function(){

	$("#num3 li").click(function(){
		
		var NOW = $(this).index();
		
		var MOVE = NOW * 960 * -1;
		
		$("#blockCon3").stop().animate({ left: MOVE });
		
		$("#num3 li").find("a").removeClass().eq(NOW).addClass("NOWTAB");
		
		return false;
	});
	
})

$(function(){

	$("#num4 li").click(function(){
		
		var NOW = $(this).index();
		
		var MOVE = NOW * 960 * -1;
		
		$("#blockCon4").stop().animate({ left: MOVE });
		
		$("#num4 li").find("a").removeClass().eq(NOW).addClass("NOWTAB");
		
		return false;
	});
	
})