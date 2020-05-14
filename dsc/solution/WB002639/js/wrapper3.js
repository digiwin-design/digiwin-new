// JavaScript Document
$(function(){
	var num = 1,
		tNum = $("#blockCon > div").length,
		numOld = 0,
		speed = 500,//動畫時間
		playSpeed = 6000,//輪播間隔
		timer;


	run();
	
	$('#benefitTxt').hover(
		function(){
			stopRun();
		}, function(){
			if(timer){
				clearInterval(timer);
				run();
				numOld = num;
			}
	})
		
	$("#num li").click(function(){
		num = $(this).index();
		if(num>numOld){
			numOld = num;
			play();
		}else if(num<numOld){
			if(num<tNum){num++;}else{num=1;}
			$("#blockCon .now").stop().animate({left:1000},speed);
			$("#block"+num).stop().css({left:-1000}).animate({left:0},speed);
			$("#num li").removeClass("tabNow").eq(num-1).addClass("tabNow");
			$("#blockCon .now").removeClass("now");
			$("#block"+num).addClass("now");
			numOld = num-1;
		}else{
			return;
		}
	})
		
	function play(){
		if(num<tNum){
			num++;
		}else{
			num=1;
		}
		$("#blockCon .now").stop().animate({left:-1000},speed);
		$("#block"+num).stop().css({left:1000}).animate({left:0},speed);
		$("#num li").removeClass("tabNow").eq(num-1).addClass("tabNow");
		$("#blockCon .now").removeClass("now");
		$("#block"+num).addClass("now");
	}	


	function run(){
		timer = setInterval(play, playSpeed);
	}
	
	function stopRun(){
		clearInterval(timer);
	}


})
