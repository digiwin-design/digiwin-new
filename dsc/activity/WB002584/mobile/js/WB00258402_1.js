// JavaScript Document
$(function(){
		
	var isHover = false;
	$('#nav').hover(function(){
		$('#nav .secName').stop().animate({opacity:1});
		isHover = true;
	},function(){
		$('#nav a').not('.now').find('.secName').stop().animate({opacity:0});
		isHover = false;
	})

})
