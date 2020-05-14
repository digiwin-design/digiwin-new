


$(window).load(function(){ // 改成這樣：loadding後才會讀取
 $(".loading").fadeOut(300); //等網頁全部的DOM都載入後, 隱藏讀取中的loadin



//------------TOP按鈕----------------------
		$(window).scroll(function(){

		if( $(window).scrollTop() > 400 ){
			$(".btnTop").fadeIn(300);
		}else{	
			$(".btnTop").fadeOut(300);			
		}
		
	});
	
	$(".btnTop").click(function (){
		$("html,body").stop(true,false).animate({scrollTop:0},900); 
		//$("html,body").stop(true,false).animate({scrollTop:$(".AAA").position().top},900);//連到DIV：AAA的位置
		
	});
	
	
	
		//頁內錨點滑動效果,來自http://www.learningjquery.com/的方法
	$('a[href*=#]').click(function() {
    	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')&& location.hostname == this.hostname){
			var $target = $(this.hash);
			$target = $target.length && $target|| $('[name=' + this.hash.slice(1) +']');
		if ($target.length) {
            var targetOffset = $target.offset().top;
            $('html,body').stop().animate({scrollTop: targetOffset}, 1000);
            //return false; //使其呈現清晰的URL鏈接
         }
		}
	});
	
	
	
	
	
});

