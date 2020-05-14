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
		timer = setInterval(play,6000);
	}
	
	function stopRun(){
		clearInterval(timer);	
	}
	
	//youtube test
		
	$("#play1, #play1-1").click(function(){
		var pause1 = $("#play1, #play1-1").hasClass("play1");
		var pause2 = $("#play2, #play2-1").hasClass("play2");
		if(pause2){
			callPlayer("video02", "pauseVideo");
			$("#play2, #play2-1").removeClass("play2");
		}
		
		callPlayer("video01", "playVideo");
		if(pause1){
			$("#play1, #play1-1").removeClass("play1");
			callPlayer("video01", "pauseVideo");
		}else{
			$("#play1, #play1-1").addClass("play1");
		}
		clearInterval(timer);
		$("#M1").off('hover');
		$("#M1>ul>li").on('click');	
	});
		
	$("#play2, #play2-1").click(function(){
		var pause1 = $("#play1, #play1-1").hasClass("play1");
		var pause2 = $("#play2, #play2-1").hasClass("play2");
		if(pause1){
			callPlayer("video01", "pauseVideo");
			$("#play1, #play1-1").removeClass("play1");
		}
		callPlayer("video02", "playVideo");
		if(pause2){
			$("#play2, #play2-1").removeClass("play2");
			callPlayer("video02", "pauseVideo");
		}else{
			$("#play2, #play2-1").addClass("play2");
		}
		clearInterval(timer);
		$("#M1").off('hover');
		$("#M1>ul>li").on('click');	
	});
	
	
	function callPlayer(frame_id, func, args) {
		if (window.jQuery && frame_id instanceof jQuery) frame_id = frame_id.get(0).id;
		var iframe = document.getElementById(frame_id);
		if (iframe && iframe.tagName.toUpperCase() != 'IFRAME') {
			iframe = iframe.getElementsByTagName('iframe')[0];
		}
		if (iframe) {
			// Frame exists, 
			iframe.contentWindow.postMessage(JSON.stringify({
				"event": "command",
				"func": func,
				"args": args || [],
				"id": frame_id
			}), "*");
		}
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
		$("#play1, #play1-1").removeClass("play1");
		$("#play2, #play2-1").removeClass("play2");
	})
	
	
	
})
