(function() {

	// var element1;
	// var element2;
	// var element3;
	// var element4;
	// var element5;
	// var element6;
	// var element7;
	// var element8;
	var arr = [];
	var i = 0;

	// // document.addEventListener('DOMContentLoaded', function(e) {

	// 	function createElement() {
	// 	    element1 = document.createElement('li');
	// 	    element1.className = "battle_obj";
	// 	    element1.innerHTML = "";
	// 	    element1.style.backgroundColor = '';
	// 	    element2 = document.createElement('div');
	// 	    element2.className = "icon1_div";
	// 	    element2.src = "";
	// 	    element2.style.backgroundColor = '';
	// 	    element3 = document.createElement('div');
	// 	    element3.className = "container_div";
	// 	    element3.innerHTML = "";
	// 	    element3.style.backgroundColor = '';		    
	// 	    element4 = document.createElement('div');
	// 	    element4.className = "icon2_div";
	// 	    element4.src = "";
	// 	    element4.style.backgroundColor = '';
	// 	    element5 = document.createElement('img');
	// 	    element5.className = "icon1";
	// 	    element5.src = arr[i].img1;
	// 	    element5.style.width = '60px';
	// 	    element5.style.height = '60px';
	// 	    element6 = document.createElement('h2');
	// 	    element6.className = "battle-card";
	// 	    element6.innerHTML = arr[i].name1 + "vs" + arr[i].name2;
	// 	    element6.style.backgroundColor = '';
	// 	    element7 = document.createElement('span');
	// 	    element7.className = "comment_container";
	// 	    element7.innerHTML = arr[i].comment;
	// 	    element7.style.backgroundColor = '';		    		    
	// 	    element8 = document.createElement('span');
	// 	    element8.className = "date";
	// 	    element8.innerHTML = "";
	// 	    element8.style.backgroundColor = '';
	// 	    element9 = document.createElement('span');
	// 	    element9.className = "passion";
	// 	    element9.innerHTML = "";
	// 	    element9.style.backgroundColor = '';		    
	// 	    element10 = document.createElement('img');
	// 	    element10.className = "icon2";
	// 	    element10.src = arr[i].img2;
	// 	    element10.style.width = '60px';
	// 	    element10.style.height = '60px';
	// 	}

	// 	function addElement(){
	// 		var objBody1 = document.getElementById("sort_new");
	// 		objBody1.appendChild(element1);
	// 		var objBody2 = document.getElementsByClassName("battle_obj").item(i);
	// 		objBody2.appendChild(element2);
	// 		var objBody3 = document.getElementsByClassName("battle_obj").item(i);
	// 		objBody3.appendChild(element3);
	// 		var objBody4 = document.getElementsByClassName("battle_obj").item(i);
	// 		objBody4.appendChild(element4);
	// 		var objBody5 = document.getElementsByClassName("icon1_div").item(i);
	// 		objBody5.appendChild(element5);
	// 		var objBody6 = document.getElementsByClassName("container_div").item(i);
	// 		objBody6.appendChild(element6);
	// 		var objBody7 = document.getElementsByClassName("container_div").item(i);
	// 		objBody7.appendChild(element7);
	// 		var objBody8 = document.getElementsByClassName("container_div").item(i);
	// 		objBody8.appendChild(element8);	
	// 		var objBody9 = document.getElementsByClassName("container_div").item(i);
	// 		objBody9.appendChild(element9);			
	// 		var objBody10 = document.getElementsByClassName("icon2_div").item(i);
	// 		objBody10.appendChild(element10);																				
	// 	}

	// var obj = {
	// 	battleID : "",
	//     name1 : "",
	//     name2 : "",
	//     img1 : "",
	//     img2 : "",
	//     comment: ""
	// };
	
	function createString(data){
		// return '<li class="vs">' +
			return '<div class="box">' +
				'<div class="vs_left">' +
					'<div class="icon1_frame">' +
						'<div class="icon1" style="background-image: url(' + data.img1 + ');"></div>' +
					'</div>' +
					'<div class="num1">' +
						'<div>0</div>' +
						'<div>0</div>' +
						'<div>0</div>' +
						'<div>0</div>' +
					'</div>' +
				'</div>' +
				'<div class="vs_title">' +
					'<h2>' + data.name1 + '</h2>' +
					'<div class="vs_img"></div>' +
					'<h2>' + data.name2 + '</h2>' +
				'</div>' +
				'<div class="vs_right">' +
					'<div class="icon2_frame">' +
						'<div class="icon2" style="background-image: url(' + data.img2 + ');"></div>' +
					'</div>' +
					'<div class="num2">' +
						'<div>0</div>' +
						'<div>0</div>' +
						'<div>0</div>' +
						'<div>0</div>' +
					'</div>' +
				'</div>' +
			'</div>' +
			'<p class="vs_comment">' + data.comment + '</p>' +
		'</li>'
	}

	if(window.localStorage){

		var local_storage = window.localStorage;

		// JSON 文字列を読み込み
		var str = localStorage.getItem("sponge_key");
	
		// JSON 文字列からオブジェクトに変換
		arr = JSON.parse(str);
		console.log(arr[0].name1);
	}


	for(var i=0;i<arr.length;i++){
		var elementLi = document.createElement('li');
		elementLi.className = "vs";
		elementLi.innerHTML = createString(arr[i]);
		// elementLi.appendChild(battleCardInnerHtml);
		var objBody = document.getElementById("sort_new");
		objBody.insertBefore(elementLi,objBody[0]);
/* 		objBody.appendChild(elementLi); */
	}

	// ウェブストレージに対応している	

		// for(var i=0;i<arr.length;i++,j=j+3){
		// 	// document.write(arr[i].name1);
		// // name2 : "",
		// // img1 : "",
		// // img2 : "",
		// // comment: ""
		// 	createElement();
		// 	addElement();
		// }
	// },false);

	var vsEl = document.getElementsByClassName("vs");
	vsEl[0].addEventListener('click',function(){
		location.href = "../vote/indexkinoko.html";
	});
	vsEl[1].addEventListener('click',function(){
		location.href = "../vote/indexsafari.html";
	});
	vsEl[2].addEventListener('click',function(){
		location.href = "../vote/indexyuko.html";
	});
	var vsEl2 = document.getElementById("vskinoko");
	vsEl2.addEventListener('click',function(){
		location.href = "../vote/indexkinoko.html";
	})
	var vsEl3 = document.getElementById("vssafari");
	vsEl3.addEventListener('click',function(){
		location.href = "../vote/indexsafari.html";
	})
	var vsEl4 = document.getElementById("vsyuko");
	vsEl4.addEventListener('click',function(){
		location.href = "../vote/indexyuko.html";
	})
})();