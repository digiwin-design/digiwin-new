window.onload = function(){
	for(var i=1; i<=7; i++){
		document.getElementById("TAB"+i).onclick =showIT;
	}	
	//document.getElementById("TAB1").className="NOWTAB";
	
	function showIT(){
		
		var N =  this.id.substr(3);
		if(N > 0 && N < 5){
			for(var i=1; i<=4; i++){
			document.getElementById("BOX"+i).style.display = "none";
			document.getElementById("TAB"+i).className="";
			}
		}else if(N >4 && N < 8){
			for(var i=5; i<=7; i++){
			document.getElementById("BOX"+i).style.display = "none";
			document.getElementById("TAB"+i).className="";
			}	
		}
		document.getElementById("BOX"+N).style.display = "block";
		this.className="NOWTAB";
		
	}

}


