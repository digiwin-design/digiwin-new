$(function(){
	$("#blurPrintMap").tooltip({
			track: true
	
		});	
	var numOld = 0;
	$("#problem1").css({left:0})
	$(".tabList li").click(function(){
		var $this = $(this),
			n = $this.index(),
			move = n*1000*-1,
			now = n+1,
			_height = $("#problem"+now).outerHeight(true);
			
		for(var i=1; i<6; i++){
			$("#problem"+i).css({'display':'none', left:1000});
		}
		if (numOld == n){
			$("#problem"+now).stop().css({'display':'block', left : 0});		
		}else if(numOld < n){
			$("#problem"+now).stop().css({'display':'block'}).animate({left:0});
			$("#problemAll").stop(true).delay(400).animate({height:_height});
			$(".tabList li").removeClass('now').eq(n).addClass('now');
			numOld = n;
		}else{
			$("#problem"+now).stop().css({'display':'block', left : -1000}).animate({left:0});
			$("#problemAll").stop(true).delay(400).animate({height:_height});
			$(".tabList li").removeClass('now').eq(n).addClass('now');
			numOld = n;
		}
	})
	
	function slideBom(){
		var navHeight = $('.link').outerHeight(true);
		var bomTop = $('.soluBom').offset().top;
		$('.wordCon span').click(function(){
			$('body,html').stop().animate({'scrollTop':bomTop-navHeight},400,function(){

			})
		})
	}
	slideBom();
	function geInfor(){
		var top6 = $('#contact').offset().top-200;
		$(document).on('click','.moreCase',function(){
			$('body,html').stop().animate({'scrollTop':top6},400,function(){
			})
		})
	};
	geInfor();
})