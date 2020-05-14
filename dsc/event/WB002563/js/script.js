$(function(){

	$("#START a").click(function(){
		var N = this.id.substr(1)
		$("html,body").stop().animate({scrollTop:1000*N},800);
		return false;	
	});
	
});