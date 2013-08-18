(function() {

	//backBtn
	var backBtnEl      = null;
	var backBtnIconEl  = null;
	
	//footer1
	var footer1     = null;
	var footer1Bg   = null;
	
	//footer2
	var footer2     = null;
	var footer2Bg   = null;
	
	//footer3
	var footer3     = null;
	var footer3Bg   = null;

	function cacheDOMs () {
		//backBtn
		backBtnEl      = document.getElementById('back');
		backBtnIconEl  = document.getElementById('h_back');
		
		//buildBtn		
		buildBtnEl     = document.getElementById('build');
		buildBtnIconEl = document.getElementById('h_build');
		
		//footer1
		footer1        = document.getElementById('ftli01');
		footer1Bg      = document.getElementById('ft01');
		
		//footer2
		footer2        = document.getElementById('ftli02');
		footer2Bg      = document.getElementById('ft02');
		
		//footer3
		footer3        = document.getElementById('ftli03');
		footer3Bg      = document.getElementById('ft03');
	};

	function setEvents () {
		//backBtn
		backBtnEl.addEventListener("touchstart", function(e) {
			backBtnIconEl.className = "back_img_on";
		});
		backBtnEl.addEventListener("touchmove", function(e) {
			backBtnIconEl.className = "back_img";
		});
		backBtnEl.addEventListener("touchend", function(e) {
			if (backBtnIconEl.className === "back_img_on") {
				history.back();
			}
		});
		
		//footer1
		footer1.addEventListener("touchstart", function(e) {
			footer1Bg.className = "ftli01_bg_on";
		});
		footer1.addEventListener("touchmove", function(e) {
			footer1Bg.className = "ftli01_bg";
		});
		footer1.addEventListener("touchend", function(e) {
			if (footer1Bg.className === "ftli01_bg_on") {
				location.href = "../battle_list/index.html"
			}
		});
		
		//footer2
		footer2.addEventListener("touchstart", function(e) {
			footer2Bg.className = "ftli02_bg_on";
		});
		footer2.addEventListener("touchmove", function(e) {
			footer2Bg.className = "ftli02_bg";
		});
		footer2.addEventListener("touchend", function(e) {
			if (footer2Bg.className === "ftli02_bg_on") {
				location.href = "../mypage/index.html"
			}
		});
		
		//footer3
		footer3.addEventListener("touchstart", function(e) {
			footer3Bg.className = "ftli03_bg_on";
		});
		footer3.addEventListener("touchmove", function(e) {
			footer3Bg.className = "ftli03_bg";
		});
		footer3.addEventListener("touchend", function(e) {
			if (footer3Bg.className === "ftli03_bg_on") {
				location.href = "../battle_build/index.html"
			}
		});
	}

	document.addEventListener("DOMContentLoaded", function (e) {
		cacheDOMs();
		setEvents();
	}, false);

	/*
	document.addEventListener("DOMContentLoaded", function(e) {

		document.getElementById('back').addEventListener("touchstart", function(e) {
			var element = document.getElementById('h_back');
			element.className = "back_img_on";
		});
		document.getElementById('back').addEventListener("touchmove", function(e) {
			console.log("touchmove is called!");
			var element = document.getElementById('h_back');
			element.className = "back_img";
		});
		document.getElementById('back').addEventListener("touchend", function(e) {
			var element = document.getElementById('h_back');
			//element.className = "back_img";
			if (element.className === "back_img_on") {
				location.href = "../battle_build/index.html"
			}
		});

	*/
		/* 対戦作成ボタン */
	/*
		document.getElementById('a_build').addEventListener("touchstart", function(e) {
			var element = document.getElementById('h_build');
			element.className = "build_img_on";
		})
		document.getElementById('a_build').addEventListener("touchend", function(e) {
			var element = document.getElementById('h_build');
			element.className = "build_img";
			location.href = "../battle_build/index.html"
		})
*/

		/* ハゲドウボタン */
		/*
		document.getElementsByClassName('hagedou').addEventListener("touchstart", function(e) {
			var element = document.getElementsByClassName('hagedou');
			console.log(element);
			element.className = "hagedou_on";
		})
		*/
/*
		document.getElementById('a_back').addEventListener("touchend", function(e) {
			var element = document.getElementById('h_back');
			console.log(element);
			element.className = "back_img";
			location.href = "../vote/index.html"
		})
*/

	//})
})();