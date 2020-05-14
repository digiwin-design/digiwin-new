// JavaScript Document
$(function(){
	var $win = $(window); 
	var $winWidth = $win.width();
	var bannerNum = $('#bannerCon>div').length;
	var bannerNow = 1;
	var bannerOldNum = 0;
	var bannerTimer;
	var move;
	var playTime = 5000;

	$win.resize(function(){
		bannerStop();
		$winWidth = $win.width();
		if($winWidth < 1000){
			$winWidth = 1000;
		}
		move = -(bannerNow-1) * $winWidth;
		$('#bannerCon>div').css({width:$winWidth}); 
		$('#bannerCon').css({left:move});
		bannerRun();
	}).resize();

	$('#banner').hover(function(){
		bannerStop();
	},function(){
		bannerRun();
	})

	$('#bannerOrder li').hover(function(){
		var $this = $(this);
		var $bannerDes = $this.find('.bannerDes');
		$bannerDes.stop(true, true).fadeIn();
	}, function(){
		var $this = $(this);
		var $bannerDes = $this.find('.bannerDes');
		$bannerDes.stop(true, true).fadeOut();
	})

	$('#bannerOrder li').click(function(){
		var $this = $(this).index() + 1;
		if($this == bannerNow){
			return;
		}else{
			move = -($this-1) * $winWidth;
			$('#bannerCon>div').eq(bannerNow-1).find('h2').stop(true, true).animate({left:-$winWidth}, 500, 'easeInBack', function(){$(this).animate({left:0})});
			$('#bannerCon').stop(true, true).delay(500).animate({left:move});
			$('#bannerOrder li').removeClass('now');
			$('#bannerOrder li').eq($this - 1).addClass('now');
			bannerNow = $this;
		}
	});

	function bannerPlay(){
		bannerOldNum = bannerNow;
		if(bannerNow < bannerNum){
			move = -bannerNow * $winWidth;
			bannerNow++;
		}else{
			move = 0;
			bannerNow = 1;
		}
		
		$('#bannerCon>div').eq(bannerOldNum-1).find('h2').stop(true, true).animate({left:-$winWidth}, 500, 'easeInBack', function(){$(this).animate({left:0})});
		$('#bannerCon').stop(true, true).delay(500).animate({left:move});
		$('#bannerOrder li').removeClass('now');
		$('#bannerOrder li').eq(bannerNow-1).addClass('now');
	}

	function bannerRun(){
		bannerTimer = setInterval(bannerPlay, playTime);
	}

	function bannerStop(){
		clearInterval(bannerTimer);
	}
})
