// JavaScript Document
var tag = document.createElement('script');
    tag.src = "http://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var players = {}; //Define a player storage object, to expose methods,without having to create a new class instance again.
function onYouTubeIframeAPIReady() {
    $(".video > iframe[id]").each(function() {
        var identifier = this.id;
        //var frameID = getFrameID(identifier);
        if (identifier) { //If the frame exists
            players[identifier] = new YT.Player(identifier, {
            	events: {
            		"onStateChange": onPlayerStateChange, 
            		"onReady": createYTEvent
            	}
        	})
        }
    })
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        caseStopRun();
        done = true;
    }else if (event.data == YT.PlayerState.PAUSED && done) {
        caseRun();
        done = false;
    }
}

function createYTEvent(event) {
    $('#caseOrder li').click(function() {
         event.target.pauseVideo(); 
         done = false;  
    })
}

$(function(){
		
	var $win = $(window);
	var	$htmlBody = $('html, body');


	//滑過選單(這段可以刪掉了)
	// $('#navLink>ul>li').hover(function(){
	// 	var $this = $(this);
	// 	$this.children('.subLink').stop(true,true).slideDown(100);
	// 		        alert('uo')
	// }, function(){
	// 	var $this = $(this);
	// 	$this.children('.subLink').stop(true,true).slideUp(100);
	// })

	/*banner輪播*/
	var $windowWidth = $win.width();
	$('#banner #bannerCon>div').css({width:$windowWidth});
	
	
	

	/*客戶輪播-成就客戶創造應用價值*/
	var caseNum = 1,
		caseTnum = $('#industry>.content>div').length,
		caseNumOld = 0,
		caseSpeed = 1000,
		caseLeft = 2000,
		caseTimer,
		playTime = 10000;
	
	
	$("#industry").hover(function(){
		caseStopRun();
	}, function(){
		if(done){
			clearInterval(caseTimer);
		}else if(caseTimer || !done){
			clearInterval(caseTimer);
			caseRun();
			caseNumOld = caseNum-1;
		}
	})
		
	$("#caseOrder li").click(function(){
		caseNum = $(this).index();
		if(caseNum>caseNumOld){
			casePlay();
		}else if(caseNum<caseNumOld){
			if(caseNum<caseTnum){caseNum++;}else{caseNum=1;}
			$("#industry div.now").stop().animate({left:caseLeft}, caseSpeed);
			$("#case_"+caseNum).stop().css({left:-caseLeft}).animate({left:0}, caseSpeed);
			$("#caseOrder li").removeClass("tabNow").eq(caseNum-1).addClass("tabNow");
			$("#industry div.now").removeClass("now");
			$("#case_"+caseNum).addClass("now");
			caseNumOld = caseNum-1;
		}else{
			return;
		}
	})
		
	window.casePlay = function(){
					if(caseNum<caseTnum){caseNum++;}else{caseNum=1;}
					$("#industry div.now").stop().animate({left:-caseLeft}, caseSpeed);
					$("#case_"+caseNum).stop().css({left:caseLeft}).animate({left:0}, caseSpeed);
					$("#caseOrder li").removeClass("tabNow").eq(caseNum-1).addClass("tabNow");
					$("#industry div.now").removeClass("now");
					$("#case_"+caseNum).addClass("now");
					caseNumOld = caseNum-1;
				};
	window.caseRun = function(){caseTimer = setInterval(casePlay, playTime)};
	
	window.caseStopRun = function(){clearInterval(caseTimer)};
	caseRun();
	// Released under MIT license: http://www.opensource.org/licenses/mit-license.php
 

 	/*聯絡表單用*/
	$('[placeholder]').focus(function() {
		var input = $(this);
		if (input.val() == input.attr('placeholder')) {
		input.val('');
		input.removeClass('placeholder');
		}
	}).blur(function() {
		var input = $(this);
		if (input.val() == '' || input.val() == input.attr('placeholder')) {
		input.addClass('placeholder');
		input.val(input.attr('placeholder'));
		}
	}).blur().parents('form').submit(function() {
			$(this).find('[placeholder]').each(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
			input.val('');
			}
		})
	}); 

})


