(function(){
	document.addEventListener('DOMContentLoaded',function(){
		function zeroPadding(number, length){
			return (Array(length).join('0') + number).slice(-length);
		}
			var x = document.getElementById("hagedou_num1").innerHTML;
			var y = document.getElementById("hagedou_num2").innerHTML;
			var hagedouBtn = document.getElementsByClassName('hagedou');
			hagedouBtn[0].addEventListener('click',function(){
			if(document.getElementById('icon_container').className === "vs1") {
				x++;
				x = String(x);
				x = zeroPadding(x, 4);
				document.getElementById("hagedou_num1").innerHTML= x;
			}else{
				y++;
				y = String(y);
				y = zeroPadding(y, 4);
				document.getElementById("hagedou_num2").innerHTML= y;
			}
			})
		/*
else if(document.getElementById('icon_container').className === "vs2") {
			var y = document.getElementById("hagedou_num2").innerHTML;
			var hagedouBtn = document.getElementsByClassName('hagedou');
			hagedouBtn[0].addEventListener('click',function(){
				console.log(y);
				y++;
				y = String(y);
				y = zeroPadding(y, 4);
				document.getElementById("hagedou_num2").innerHTML= y;
			})
		}	
*/
		var para = window.location.search ;
		// console.log(para.substring(1));
		document.getElementById('icon_container').className = para.substring(1);
		
		var El = document.getElementById('icon_container');
		//var type = El.className;
		var negaeruBtn = document.getElementsByClassName('negaeru');
		negaeruBtn[0].addEventListener('click',function() {
			//if(type == "side1") {
			if(El.className === 'vs1') {
				El.className = "vs2";
				//type = "side2";
			} else {
				El.className = "vs1";
				//type = "side1";
			}
		})
	}, false);

})()


		/*
	
		var y = document.getElementById("icon2_count").innerHTML;
		y--;
		y = String(y);
		y = zeroPadding(y, 4);
		document.getElementById("icon2_count").innerHTML= y;
	*/
	
	// window.onload = function(){
	// 	var para = window.location.search ;
	// 	alert('javascript');
	// 	console.log(para);
	// 	document.getElementById('icon-container').className = para.substring(1);
	// }
	// function negaeribtn() {
	// 	var El = document.getElementById('icon-container');
	// 	if(El.className === 'vs1') {
	// 		console.log('vs1');
	// 		El.className = "vs2";
	// 		//type = "vs2";
	// 	} else {
	// 		console.log('vs2');
	// 		El.className = "vs1";
	// 		//type = "vs1";
	// 	}
	// }
		// var type = El.className;
		// var x = document.getElementById('negaeri');
		// x.addEventListener('click',function() {