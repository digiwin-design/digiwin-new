$(function(){
	/*行業別*/
	function bgPosition(id, isMouseIn){
		if(isMouseIn){
			var bgWidth = -1000;
		}else{
			var bgWidth = 1000;
		}
		var bgPos = $('#'+id).css('backgroundPosition').split(' '),
			bgPosX = (parseFloat(bgPos[0])+bgWidth)+'px',
			bgPosY = bgPos[1];
		return [bgPosX, bgPosY];
	}	

	$('#industryTxt>li').hover(function(){
		var $thisId = $(this).attr('id'),
		    newPos = bgPosition($thisId, true);
	    $(this).css('backgroundPosition',newPos[0] + ' ' + newPos[1]);
	},	function () {
		var $thisId = $(this).attr('id'),
		    newPos = bgPosition($thisId, false);
	    $(this).css('backgroundPosition',newPos[0] + ' ' + newPos[1]);
	});	
	
	/*點banner*/
	var $htmlBody = $('html, body');
	$('#banner a').click(function(){
		var anchorName = $(this).prop('hash');
		scrollToAnchor(anchorName);
		return false;
	})

	function scrollToAnchor(anchorName){
		var top = Math.ceil($(anchorName).offset().top)-80;
		$htmlBody.stop().animate({scrollTop: top});
	}

	var $adBanner = $('#adBanner');
	var endDateString = $adBanner.data('endDate');
	var currDate = Date.parse((new Date()).toDateString());
	var endDate = Date.parse(endDateString);

	if (currDate > endDate) {
		$adBanner.hide();
	}
})