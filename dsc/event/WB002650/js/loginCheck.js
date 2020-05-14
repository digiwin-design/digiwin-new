// JavaScript Document
$(function(){
	$('#password').keypress(function(e){
		if(e.which == 13) {
		    checkAPI();
		}
	})
	$('#submit').click(function(){
		checkAPI();
	})

	function checkAPI(){
		var val = $('#password').val();
		//var password = window.localStorage["dscPassword"];
		if(val != ""){
			$.ajax({
				type:"GET",
				crossDomain: true,
				contentType: "application/json; charset=utf-8",
				url:'http://219.87.78.254/DscDayInfo/DscDay.asmx/GW',
				dataType:"jsonp",
				data:{data: val},
				success :function(data){
					if(data.chk == true){
						window.localStorage["dscPassword"] = val;
						window.location.href ='http://www.digiwin.com/tw/dsc/event/WB002650/index.htm';
					}else{
						alert('通關密語有誤，請重新輸入。');
					}
				},
				error: function(response)
			    {
			        alert(response.status);
			    }
			})
		}else{
			alert('請輸入通關密語');
		}		
	}
})