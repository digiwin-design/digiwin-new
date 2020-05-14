document.querySelector('form').reset();
//諮詢內容顯示可輸入字數
var textarea = document.querySelector('#contact-query');
var showRemainWord = document.querySelector('.remaining');
textarea.addEventListener('keyup', calWord);

function calWord(e){
	var wordNum = textarea.value.length;
	var remaindWord = textarea.getAttribute('maxlength') - wordNum;
	if(remaindWord >= 0){
		showRemainWord.innerHTML = remaindWord;
	}else {
		showRemainWord.innerHTML = 0;
	}
}

//focus時改變欄位名稱的位置
var input = document.querySelectorAll('.contact');
var verificaNum = document.querySelector('#identCode');

for (var i = 0; i < input.length; i++) {
	input[i].addEventListener('focus', changePos, false);
	input[i].addEventListener('blur', changePos, false);
}

verificaNum.addEventListener('focus', changePos, false);
verificaNum.addEventListener('blur', changePos, false);

function changePos(e){
	var _this = e.target;
	var eventType = e.type;
	var inputValue = _this.value;
	var titleClassList = _this.parentNode.children[1].classList;
	titleClassList.add('focus');

	if(eventType == 'blur'){
		if(inputValue == '' || inputValue == undefined){
			titleClassList.remove('focus');
		}else{
			_this.classList.remove('noInput');
		}
	}
}
