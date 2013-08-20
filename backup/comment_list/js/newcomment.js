/*
新規コメントをdisplay:; *
iPhoneキーパッドで入力欄をつくる *
入力欄１行分と送信ボタンをファーストビュー下部にfixed
一番下にスクロール
送信ボタン押したらdisplay:inline; -> block;
*/
(function(){
	var i;
	if(i == null){
		i = 0;
	}
	var submitBtn = document.getElementById("submitBtn");
	submitBtn.addEventListener('click',function(){
		// var newComment = document.getElementById("comment").innerHTML;
		// var hr = "<hr>";
		// hr.id = "hr";
		// document.write(hr);
		var newcomment = document.submit.comment.value;
		console.log(newcomment);
		if(document.getElementById('icon_container').className === 'vs1'){
			var element1 = document.createElement('li');
			element1.className = "comment_l";
			element1.innerHTML = "";
		}else{
			var element1 = document.createElement('li');
			element1.className = "comment_r";
			element1.innerHTML = "";
		}
			var element2 = document.createElement('div');
			element2.className = "com_l";
			var element3 = document.createElement('div');
			element3.className = "com_r";
			if(document.getElementById('icon_container').className === 'vs1'){
				var element4 = document.createElement('img');
				element4.src = "../comment_list/images/kinoko.png";
				element4.style.width = '60px';
				element4.style.height = '60px';
			}else{
				var element4 = document.createElement('img');
				element4.src = "../comment_list/images/takenoko.png";
				element4.style.width = '60px';
				element4.style.height = '60px';
			}
			
			var element5 = document.createElement('p');
			element5.className = "username";
			element5.innerHTML = "べっち";
			var element6 = document.createElement('p');
			element6.className = "text";
			element6.innerHTML = newcomment;
			
			console.log(newcomment);

			var objBody1 = document.getElementsByTagName('ul').item(0);
			objBody1.appendChild(element1);
			var objBody2 = document.getElementsByTagName('li').item(i);
			objBody2.appendChild(element2);
			var objBody3 = document.getElementsByTagName('li').item(i);
			objBody3.appendChild(element3);
			var objBody4 = document.getElementsByClassName('com_l').item(i+3);
			objBody4.appendChild(element4);		
			var objBody5 = document.getElementsByClassName('com_r').item(i+3);
			objBody5.appendChild(element5);
			var objBody6 = document.getElementsByClassName('com_r').item(i+3);
			objBody6.appendChild(element6);
			i++;	
	})
})();

// function newComment() {
// 	// var newComment = document.getElementById("comment").innerHTML;
// 	var newComment = document.submit.comment.value;
// 	// console.log(newComment);
// 	var element = document.createElement('li');
// 	element.class = "comment_text";
// 	//element.innerHTML = newComment;
	
// 	element.innerHTML = 
// 		'<img src="images/icon1.jpg" alt="たけのこの画像" width="70px" height="70px"/>' +
// 		'<div class="comment_right">' +
// 			'<span class="comment_num">No.3</span>' +
// 			'<article class="comment">' +
// 				newComment +
// 			'</article>' +
// 		'</div>';

// 	console.log(element);
// 	var AllComment = document.getElementById("comment_list");
// 	console.log(AllComment);
// 	//AllComment.innerHTML = AllComment.innerHTML + element;
// 	AllComment.appendChild(element);
// 	console.log(AllComment.innerHTML)
// }
		
		//element.innerHTML = newComment;
		
		/*
	element.innerHTML = 
			'<img src="images/icon1.jpg" alt="たけのこの画像" width="70px" height="70px"/>' +
			'<div class="comment_right">' +
				'<span class="comment_num">No.3</span>' +
				'<article class="comment">' +
					newComment +
				'</article>' +
			'</div>';
	*/

		/*
	console.log(element);
		var AllComment = document.getElementById("comment_list");
		console.log(AllComment);
		//AllComment.innerHTML = AllComment.innerHTML + element;
		AllComment.appendChild(element);
		console.log(AllComment.innerHTML)
	*/


	/*
	function newComment() {
		// var newComment = document.getElementById("comment").innerHTML;
		var newComment = document.submit.comment.value;
		// console.log(newComment);
		var element = document.createElement('li');
		element.class = "comment_text";
		//element.innerHTML = newComment;
		
		element.innerHTML = 
			'<img src="images/icon1.jpg" alt="たけのこの画像" width="70px" height="70px"/>' +
			'<div class="comment_right">' +
				'<span class="comment_num">No.3</span>' +
				'<article class="comment">' +
					newComment +
				'</article>' +
			'</div>';

		console.log(element);
		var AllComment = document.getElementById("comment_list");
		console.log(AllComment);
		//AllComment.innerHTML = AllComment.innerHTML + element;
		AllComment.appendChild(element);
		console.log(AllComment.innerHTML)
	}
	*/
