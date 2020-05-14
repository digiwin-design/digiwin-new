

$(function() {
	
/*-------上方企業識別Nav-------------*/
	/*$("#nav ul ul").hide();*/
	
	$("#nav > ul > li").hover(function(){	
		var N = $(this).index();
		$("#nav > ul > li").eq(N).find("ul").stop(true,true).slideDown(100);
		}, function(){	
		var N = $(this).index();
		$("#nav > ul > li").eq(N).find("ul").stop(true,true).slideUp(100);
 	})
});

