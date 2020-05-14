// JavaScript Document

$(function(){
	//M1	
	var num=1;
	var tNum = $("#M1>div").length;
	var timer;

	run();
			
	$("#M1>ul>li").click(function(){
		num = this.id.substr(3)-1;
		play();
	});
		
	$("#M1").hover(
		function(){stopRun();
		},function(){run();}
	);
	
	function play(){
		for(var i=1; i<=tNum; i++){
			$("#M1-A"+i).css('display','none');
			$("#tab"+i).removeClass("tabNow");
		}
		if(num<tNum){num++;}else{num=1;}
		$("#M1-A"+num).css('display','block');
		$("#tab"+num).addClass("tabNow");
	}
		
	
	function run(){
		timer = setInterval(play,2000);
	}
	
	function stopRun(){
		clearInterval(timer);	
	}
	

	
	//M2
	$("#c1").attr("src","images/c1.jpg");
	$("#Layer1").css('display', 'block');
	
	$("#M2 img").click(function(){
		var N = $(this).attr("id").substr(1);
		for(var j=1; j<=9; j++){
			$("#c"+j).attr("src","images/c"+j+"a.jpg");
			$("#Layer"+j).css('display', 'none');
		}
		$("#c"+N).attr("src","images/c"+N+".jpg");
		$("#Layer"+N).css('display', 'block');
	})
	
	//M3
	
	$("#ITEM1 img, #ITEM2 img").click(function(){
		callPlayer("video01", "pauseVideo");
		callPlayer("video02", "pauseVideo");
	})
	
	
	
})
