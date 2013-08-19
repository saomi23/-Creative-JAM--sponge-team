(function(){
	document.addEventListener('DOMContentLoaded',function(){
		function zeroPadding(number, length){
			return (Array(length).join('0') + number).slice(-length);
		}
		var x = document.getElementById("hagedou_num1").innerHTML;
		var y = document.getElementById("hagedou_num2").innerHTML;
		var hagedouBtn = document.getElementsByClassName("hagedou");
		var El = document.getElementById('wrapper');
		var hagedouAnime = document.createElement("div");
		hagedouAnime.className = "anime03";
		hagedouAnime.innerHTML = '<div class="star1"></div><div class="star2"></div>'
		for (var j=0; j<hagedouBtn.length; j++) {
			hagedouBtn[j].addEventListener('click', function (e) {
				El.appendChild(hagedouAnime);
				setTimeout(function(){
					El.removeChild(hagedouAnime);
				},500);
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
		var negaeruBtn = document.getElementsByClassName('negaeru');
		var negaeriAnime = document.createElement("div");
		negaeriAnime.className = "anime01";
		negaeriAnime.innerHTML = '<div class="plate"></div><div class="cloud"></div>'
		//console.log(negaeruBtn.length);
		for (i=0; i<negaeruBtn.length; i++) {
			negaeruBtn[i].addEventListener('click', function (e) {
				El.appendChild(negaeriAnime);
				setTimeout(function(){
					El.removeChild(negaeriAnime);
				},2500);
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
				}, 2500);
			})
		}
	}, false);
})()