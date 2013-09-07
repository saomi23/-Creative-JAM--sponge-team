(function(){
	
	var submitBtn = document.getElementById("submitBtn");
	var elementUl = document.getElementById("comment_list");
	var classDiv;
	function createEl (a,b){
		return '<div class=' + a + '>' +
			'<div class="com_l"></div>' +
			'<div class="com_r">' +
				'<p class="username">' + "あなた" + '</p>' +
				'<p class="text">' + b + '</p>' +
			'</div>' +
		'</div>' +
		'<div class="com_el">' +
			'<div class="data">' +
				'<span>2013/08/13</span>' +
			'</div>' +
			'<div class="btn">' +
				'<div class="answer"></div>' +
				'<div class="negaeru"></div>' +
				'<div class="hagedou"></div>' +
			'</div>' +
		'</div>'
	}
	submitBtn.addEventListener('click',function(){
		var newcomment = document.submit.comment.value;
		console.log(newcomment);
		var elementLi = document.createElement("li");
		var select = document.getElementById('wrapper');
		if(select.className === "vs1"){
			elementLi.className = "comment_left";
			classDiv = "comment_l";	
		}else{
			elementLi.className = "comment_right";
			classDiv = "comment_r";
		}
		elementLi.innerHTML = createEl (classDiv,newcomment);
		elementUl.appendChild(elementLi);
		elementLi.scrollTop = elementLi.scrollHeight;
	})
})();