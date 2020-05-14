
$(function(){
		
<!-- === 選單=== -->	
   for(var i=1; i<=4; i++){
		document.getElementById("TABb"+i).onmouseover =showIT;//選擇ID=TAB+數字  摸到變成showIT
	}	
	document.getElementById("TABb1").className="NOWTABb";//先設定TAB1的CSS > NOWTAB

	function showIT(){//執行showIT
		
		for(var i=1; i<=4; i++){
			document.getElementById("BOXb"+i).style.display = "none";//先將BOX都先收起來
			document.getElementById("TABb"+i).className="";//消除套用的不然不會變回來
		}
		
		var N =  this.id.substr(4),//宣告N=第四個數字.程式是由0開始算 0. 1 . 2 .3
			ulHeight = $("#tabMenub").outerHeight(true),
			boxHeight = $("#BOXb"+N).outerHeight(true)+40;

		document.getElementById("BOXb"+N).style.display = "block";//選中的會出現
		$(".TABMDb").stop(true).animate({height:boxHeight+ulHeight});
		this.className="NOWTABb";//CSS > NOWTAB
	}


 })



