// JavaScript Document
$(function(){

	/*行業別 hover換行業icon底圖*/
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

})
