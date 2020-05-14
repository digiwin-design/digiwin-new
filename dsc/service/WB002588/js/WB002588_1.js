// JavaScript Document
$(function(){
	var tNum = $('#blockCon>div').length;
	var numNow = 1;
	var preNum = $('#blockCon>div').length;
	var sliderTime = 5000;
	var timer = setInterval(bannerRun, sliderTime);
	var pointer = $('#blockCon').width();
	

	$('#num>li').click(function(){
		preNum = numNow;
		numNow = $(this).index()+1;
		if(timer){
			clearInterval(timer);
			timer = 0;
		}
		if(numNow != preNum){
			if(numNow > preNum){
				pointer = 1000;
			}else{
				pointer = -1000;
			}
			$("#blockCon .now").stop().animate({left:-pointer},500).removeClass("now");
			$("#block"+numNow).stop().css({left:pointer}).animate({left:0},500).addClass("now");
			$("#num li").removeClass("tabNow").eq(numNow-1).addClass("tabNow");
			preNum = numNow;	
		}else{
			return;
		}
	})

	$('#banner').hover(function(){
		clearInterval(timer);
	}, function(){
		timer = setInterval(bannerRun, sliderTime);
	})

	function bannerRun(){
		if(numNow < tNum){
			numNow++;
		}else{
			numNow = 1;
		}
		pointer = 1000;
		$("#blockCon .now").stop().animate({left:-pointer},500).removeClass("now");
		$("#block"+numNow).stop().css({left:pointer}).animate({left:0},500).addClass("now");
		$("#num li").removeClass("tabNow").eq(numNow-1).addClass("tabNow");
		preNum = numNow - 1;
	}	


	function run(){
		timer = setInterval(play, 3000);
	}
	
	function stopRun(){
		clearInterval(timer);
	}

	$('#wrapper>ul>li:nth-child(3n)').addClass('end');

	$('#moreLink').hover(function(){
		$(".subLink").stop(true,true).slideDown(100);
	}, function(){
		$(".subLink").stop(true,true).slideUp(100);
	})
/*---------------------------------------------------------------------------------------------------*/
	var $htmlBody = $('html, body'),
		$link = $('#link'),
		_linkOffset = $link.offset(),
		_linkHeight = $link.height(),
		_linkOuterHeight = $link.outerHeight(true),
		historyHash = window.location.hash,
		buffer;
	if(historyHash != ''){
		var historyHashName = historyHash.substr(1, 3);
		var historyHashNum = historyHash.substr(4);
		console.log(historyHash,historyHashName,historyHashNum)
		if(historyHashName == "TAB" && historyHashNum > 0 && historyHashNum < 5){
			buffer = 120;
			for(var i=1; i<=4; i++){
			document.getElementById("BOX"+i).style.display = "none";
			document.getElementById("TAB"+i).className="";
			}
			document.getElementById("BOX"+historyHashNum).style.display = "block";
			document.getElementById("TAB"+historyHashNum).className="NOWTAB";
			document.location.hash = "#Block2";
		}else if(historyHashName == "TAB" && historyHashNum > 4 && historyHashNum < 8){
			buffer = 100;
			for(var i=5; i<=7; i++){
			document.getElementById("BOX"+i).style.display = "none";
			document.getElementById("TAB"+i).className="";
			}
			document.getElementById("BOX"+historyHashNum).style.display = "block";
			document.getElementById("TAB"+historyHashNum).className="NOWTAB";
			document.location.hash = "#Block4";
		}else{
			buffer = 0;
		}
		$htmlBody.stop().animate({
			scrollTop: Math.ceil($(historyHash).offset().top - _linkOuterHeight - buffer)
		}, 400);		

	}
	
	
	
	
	
})
