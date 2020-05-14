(function($){
	var num=0;
	var n=0;
	var timer;
	var firstLi=$('.subA05bg_a li:first').clone(true);
	$('.subA05bg_a').append(firstLi);
	var next=function(){
		num++;
		if (num>2) {
			num=0;
		}
		$('.subA05bg ol li').eq(num).addClass('current').siblings('li').removeClass('current');
		n++;
		if (n>3) {
			n=1;
			$('.subA05bg_a').css('left',0);
		}
		var s=n*-1000;
		$('.subA05bg_a').stop().animate({'left':s},600);
	}
	var pre=function(){
		num--;
		if (num<0) {
			num=2;
		}
		$('.subA05bg ol li').eq(num).addClass('current').siblings('li').removeClass('current');
		n--;
		if (n<0) {
			n=2;
			$('.subA05bg_a').css('left',-3000);
		}
		var s=n*-1000;
		$('.subA05bg_a').stop().animate({'left':s},600);
	}
	$('.subA05bg ol li').click(function(event){
		var i =$(this).index();
		var s =i*-1000;
		$('.subA05bg ol li').eq(i).addClass('current').siblings('li').removeClass('current');
		$('.subA05bg_a').stop().animate({'left':s},600);
		n=i;
		num=i;
	});
	timer=setInterval(next,4000);
	$('.subA05bg_ul').hover(function(){
		clearInterval(timer);	
	},function(){
		clearInterval(timer);
		timer=setInterval(next,4000);
	})
})(jQuery)