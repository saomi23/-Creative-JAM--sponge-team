(function(){
	document.addEventListener('DOMContentLoaded',function(){
		function zeroPadding(number, length){
			return (Array(length).join('0') + number).slice(-length);
		}
		var x = document.getElementById("hagedou_num1").innerHTML;
		var y = document.getElementById("hagedou_num2").innerHTML;
		var hagedouBtn = document.getElementsByClassName("hagedou");
		for (var j=0; j<hagedouBtn.length; j++) {
			hagedouBtn[j].addEventListener('click', function (e) {
				if (e.target.className === "hagedou") {
					e.target.className = "hagedou_on";
					if (document.getElementById("wrapper").className === "vs1") {
						x++;
						x = String(x);
						x = zeroPadding(x, 4);
						document.getElementById("hagedou_num1").innerHTML = x;
					} else {
						y++;
						y = String(y);
						y = zeroPadding(y, 4);
						document.getElementById("hagedou_num2").innerHTML= y;
					}
				}
			});
		}

		var para = window.location.search;
		document.getElementById('wrapper').className = para.substring(1);
		var El = document.getElementById('wrapper');
		var negaeruBtn = document.getElementsByClassName('negaeru');
		//console.log(negaeruBtn.length);
		for (i=0; i<negaeruBtn.length; i++) {
			negaeruBtn[i].addEventListener('click', function (e) {
				e.target.className = "negaeru_on";
				hagedouBtnOn = document.getElementsByClassName("hagedou_on");
				console.log(hagedouBtnOn);
				setTimeout(function () {	
					e.target.className = "negaeru";
					if (El.className === "vs1") {
						El.className = "vs2";
					} else {
						El.className = "vs1";
					}
				}, 1000);
			})
		}
	}, false);
})()