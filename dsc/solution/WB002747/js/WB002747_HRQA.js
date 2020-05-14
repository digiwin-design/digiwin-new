// JavaScript Document
	$(function(){
		var $htmlBody = $('html, body');
	    var vars = [];
	    var hash;
	    var hashes = window.location.search.substring(1).split('&');
	    for(var i = 0; i < hashes.length; i++){
	        hash = hashes[i].split('=');		        
	        vars.push(hash[0]);
	        vars[hash[0]] = hash[1];
	    }
		    
		var block = vars["block"];
		var tab = vars["tab"];



		// 幫 div.qa_title 加上 hover 及 click 事件
		// 同時把兄弟元素 div.qa_content 隱藏起來
		$('#qaContent ul.accordionPart li div.qa_title').hover(function(){
			$(this).addClass('qa_title_on');
		}, function(){
			$(this).removeClass('qa_title_on');
		}).click(function(){
			// 當點到標題時，若答案是隱藏時則顯示它；反之則隱藏
			$(this).next('div.qa_content').slideToggle();
		}).siblings('div.qa_content').hide();

		$('#qaContent ul.accordionPart li div.qa_content:first').show();
		$('#qaContent ul.accordionPart li div.qa_title').siblings('div.qa_content').hide();
		$('#' + tab).siblings('div.qa_content').show();

		if(block !== '' || block !== undefined){
			var _tabTop = $('#' + tab).offset().top;
			$htmlBody.stop().animate({scrollTop : Math.ceil(_tabTop) - 125});
		}

	});