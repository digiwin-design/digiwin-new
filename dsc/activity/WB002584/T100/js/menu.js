

$(function() {
	
/*-------上方企業識別Nav-------------*/
	/*$("#nav ul ul").hide();*/
	
	$("#barNav > ul > li").hover(function(){	
		var N = $(this).index();
		$("#barNav > ul > li").eq(N).find("ul").stop(true,true).slideDown(100);
		}, function(){	
		var N = $(this).index();
		$("#barNav > ul > li").eq(N).find("ul").stop(true,true).slideUp(100);
 	})
});

