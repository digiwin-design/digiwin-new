// JavaScript Document
$(function(){
	/*
	$('#searchValue').keyup(function(){
		var $this = $(this);
		var $thisVal = $(this).val();
		var $thisLength = $thisVal.length;
		var characters = 5;

		if($thisLength > characters){
        	$this.val($thisVal.substr(0, characters))
        };
	});
	*/

	$('#searchValue').keypress(function(e){
		if(e.which == 13) {
		    searchAPI();
		}
	})

	$('#submit').click(function(){
		searchAPI();
	})

	function searchAPI(){
		var val = $('#searchValue').val();
		var valLength = val.length;
		$('.loading').show();
		if(val != "" && valLength > 1){
			$('.noInput').hide();
			$.ajax({
				type:"GET",
				crossDomain: true,
				cache: false,
				contentType: "application/json; charset=utf-8",
				url:'http://219.87.78.254/DscDayInfo/DscDay.asmx/GetInfo2',
				dataType:"jsonp",
				data:{data: val},
				success :function(data){
					$('.loading').hide();
					var info = "<tr><th class=\"nameDep\">姓名 / 部門</th><th class=\"shortCol\">桌次</th><th class=\"mediumCol\">去程</th><th class=\"mediumCol\">回程</th></tr>";
					if(data != undefined){
						for(var i = 0; i < data.length; i++){
							info += "<tr>";
							info += "<td class=\"nameDep\"><span class=\"name\">" + data[i].name + "</span><span class=\"dept\">" + data[i].dept + "</span></td><td>" + data[i].seat + "</td><td>" + data[i].go + "</td><td>" + data[i].back + "</td>";
							info += "</tr>";
						}
					}else{
						var info = "<tr class=\"noData\"><td>查無資料，請重新輸入。</td></tr>";
					}
					$('#result').html(info);
					$('#searchResult').show();
				},
				error: function(response)
			    {
			        alert(response.status);
			    }

			})
		}else{
			$('.loading').hide();
			$('#searchResult').hide();
			$('.noInput').show();
		}
	}
})