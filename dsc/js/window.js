var tips; 
var theTop = 150; 
var old = theTop;
$(window).scroll(function() {
 
   $("#floatTips").css({'top':$(window).scrollTop()+190});   

});
function initFloatTips() {
  // tips = document.getElementById('floatTips');33ee
  // moveTips();
   
};
function moveTips() {
 
   var tt=50;
   if (window.innerHeight) {
     pos = window.pageYOffset
   }
   else if (document.documentElement && document.documentElement.scrollTop) {
     pos = document.documentElement.scrollTop;
   }
   else if (document.body) {
     pos = document.body.scrollTop;
   }
   pos=pos-tips.offsetTop+theTop;
   pos=tips.offsetTop+pos/10;
   if (pos < theTop) pos = theTop;
   if (pos != old) {
     tips.style.top = pos+"px";
     tt=10;
   }
   old = pos;
   setTimeout(moveTips,tt);
}

$(document).ready(function(){

var isOpen=false;
initFloatTips();

  $(".btn").click(function(){
  //$(".window_main").slideToggle("show");
 
   //$(".window_main").animate({width: "0px"}, 1000 );
 
     if(isOpen){
		
    //$(".window_main").animate({width: "0px",paddingLeft:"0px",paddingRight:"0px",right:"5px"}, 400 );
	$(".window_main").animate({width: "0px",paddingLeft:"0px",paddingRight:"0px"} , 400);
	$("#floatTips").animate({ right:"5px"}, 400 );
	$("#btn").addClass("btn");
	$("#btn").removeClass("btn2");
	    isOpen=false;
		
	}else{
	
   // $(".window_main").animate({width: "141px",paddingLeft:"24px",paddingRight:"8px",right:"200px"}, 400 );
  	$(".window_main").animate({width: "141px",paddingLeft:"24px",paddingRight:"8px"} , 400);
    $("#floatTips").animate({right:"176px"}, 400 );
	$("#btn").addClass("btn2");
	$("#btn").removeClass("btn")
	    isOpen=true;
	}
	

  });

  
});