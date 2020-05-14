$(function(){

	var isRotate = false;
	var rotateFunc = function(angle,imgNum){ 
		$('#wheel').stopRotate();
		$('#wheel').rotate({
			angle:0, 
			duration: 5000, 
			animateTo: angle+1440,
			callback: function(){
				$('#wheel').attr('src', 'images/wheel_0'+imgNum+'.png');
				$('#eggchar').css('background-image', 'url(images/result_0'+imgNum+'.png)');
				$('.popBg').delay(1000).fadeIn(300);
			}
		}); 
	};

	$('#XX, .popBg').click(function(){
		$('.popBg').fadeOut();
		$('.popBg').attr('style','');		
		$('#wheel').attr('src', 'images/wheel.png');
		isRotate = false;
		//$('#XX, .popBg').click(Close);
		$('#click').show();
	});
	/*
	function Close(){
		$('.popBg').fadeOut();
		$('.popBg').attr('style','');		
		$('#wheel').attr('src', 'images/wheel.png');
		isRotate = false;
		$('#XX, .popBg').click(Close);
		$('#click').show();
	}
	*/

	$('#clickBtn').rotate({ 
	   bind: 
		{ 
			click: function(){
				$('#click').hide();
				if(!isRotate){
					isRotate = true;
					var data = Math.floor(Math.random()*11);
					if(data==0 || data==1 || data==2){
						rotateFunc(144,'3')
					}
					if(data==3 || data==4 || data==5){
						rotateFunc(216,'4')
					}
					if(data==6 || data==7){
						rotateFunc(72,'2')
					}
					if(data==8 || data==9){
						rotateFunc(0,'1')
					}
					if(data==10){
						rotateFunc(288,'5')
					}
				}console.log(data)
			}
		}   
	});

	function clickme(){
		$("#click").animate({opacity:0},300 );
		$("#click").animate({opacity:1},500);	
		$("#click").animate({opacity:1},700);	
	}
	setInterval(clickme ,100)


})