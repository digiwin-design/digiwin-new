$(function() {	

var password = window.localStorage["dscPassword"];
if(password != undefined){
	$.ajax({
		type:"GET",
		crossDomain: true,
		contentType: "application/json; charset=utf-8",
		url:'http://219.87.78.254/DscDayInfo/DscDay.asmx/GW',
		dataType:"jsonp",
		data:{data: password},
		success :function(data){
			if(data.chk == true){
				$('#checkLogin').stop().delay(1500).fadeOut();
				$('#wrapper').stop().delay(2000).fadeIn();
			}else{
				window.location.href ='http://www.digiwin.com/tw/dsc/event/WB002650/login.htm';
			}
		},
		error: function(response)
	    {
	        alert(response.status);
	    }
	})	
}else{
	window.location.href ='http://www.digiwin.com/tw/dsc/event/WB002650/login.htm';
}

var $win = $(window);
var	$winWidth = $win.width();
var	$winHeight = $win.height();
var	$htmlBody = $('html, body');

/*agenda btn click*/	
var $agendaBtn = $('#agenda .btn');
$agendaBtn.click(function(){
	var $this = $(this);
	var thisA = $($this).find('a').prop('hash');
	$htmlBody.stop().animate({scrollTop: Math.ceil($(thisA).offset().top-55)}, 400);
 	return false;
})

/*award click*/
var $awardListName = $('#award .listName');
var $awardUl = $('#first, #second, #third');
$awardListName.click(function(){
	var $this = $(this);
	var $thisHeight = $this.siblings().outerHeight()+45;
	if($winWidth>480){
		$('.awardTable').hide().parent().removeClass('now');
		$this.siblings().show().parent().addClass('now');
		$awardUl.css({'height': '40px'});
		$this.parent().parent().css({'height': $thisHeight+'px'});	
	}else{
		$('.awardTable').hide().parent().removeClass('now');
		$this.siblings().show().parent().addClass('now');	
		$htmlBody.stop().animate({scrollTop: Math.ceil($this.offset().top-55)}, 400);
	}
})



/*nav click*/
var $mainMenuLi = $('#mainMenu li');
var sizeChange = 0;
$('#BTN').click(function() {
	$('#mainMenu').slideToggle();
});

$win.resize(function(){
	$winWidth = $win.width();
	$winHeight = $win.height();

	if($winWidth > 480){
		if(sizeChange > 0){
			var awardTableHeight = $('#award').find('.now').find('.awardTable').outerHeight()+45;
			$awardUl.css({'height':'40px'});
			$('#award').find('.now').parent().css({'height': awardTableHeight+'px'});
		}	
		$('#mainMenu').removeAttr('style');
		$('#mainMenu').show();
		$mainMenuLi.find('.link').removeAttr('style').hide();
		$mainMenuLi.off('click');
		$mainMenuLi.on({
		    mouseenter: function(){
		        var $this = $(this);
				$this.find('.link').stop().slideDown();
		    },
		    mouseleave: function(){
		        var $this = $(this);
				$this.find('.link').stop().slideUp();
		    },
		    click: function(){
				var $this = $(this);
				var thisA = $($this).find('a').prop('hash');
				$htmlBody.stop().animate({scrollTop: Math.ceil($(thisA).offset().top-50)}, 400);
			 	return false;		    	
		    }
		});
	}else{
		if(sizeChange > 0){
			$awardUl.removeAttr('style');
		}
		$('#mainMenu').css({'height':$winHeight-55});
		$('#mainMenu').hide();
 		$mainMenuLi.off('mouseenter mouseleave click').find('.link').removeAttr('style').show();
 		$mainMenuLi.on({
		    click: function(){
				var $this = $(this);
				var thisA = $($this).find('a').prop('hash');
				$('#mainMenu').stop().slideToggle();
				$htmlBody.stop().delay(500).animate({scrollTop: Math.ceil($(thisA).offset().top-50)}, 1000);
			 	return false;    	
		    }
		});
	}
	sizeChange++;
}).resize();

});