

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
	
	
/*-------手機版Nav-------------*/	
	
	$("#BTN").on("click",OPENOPEN);
	function OPENOPEN(){
		$("#nav").slideToggle(300);
	
	}	
	
	$(window).on("resize",CLEARSTYLE)
	function CLEARSTYLE(){
		if($(window).innerWidth()>736){
			
			$("#nav").attr("style","");
				
		}	
	}
	
	$("#LOGO_M").on("click",DIGIWIN);
	function DIGIWIN(){
		 window.open("http://tw.digiwin.biz/");
	
	}	
	
	
	
	
});
//JQ 的功能指令主要是直接用程式產生 CSS 寫入到 HTML 內部的 style 之內
//然而 JQ 產生的 HTML 內部 style CSS 容易跟我們寫的外部 CSS 產生衝突
//使用 attr("style","") 就可以把 JQ 產生的 style CSS 清除乾淨
