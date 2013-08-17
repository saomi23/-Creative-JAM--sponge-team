(function() {

	var backBtnEl      = null;
	var backBtnIconEl  = null;
	var buildBtnEl     = null;
	var buildBtnIconEl = null;

	function cacheDOMs () {
		//backBtn
		backBtnEl      = document.getElementById('back');
		backBtnIconEl  = document.getElementById('h_back');
		
		//buildBtn		
		buildBtnEl     = document.getElementById('build');
		buildBtnIconEl = document.getElementById('h_build');
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
				location.href = "../battle_build/index.html"
			}
		});
		
		//buildBtn
		buildBtnEl.addEventListener("touchstart", function(e) {
			buildBtnIconEl.className = "build_img_on";
		});
		buildBtnEl.addEventListener("touchmove", function(e) {
			buildBtnIconEl.className = "build_img";
		});
		buildBtnEl.addEventListener("touchend", function(e) {
			if (buildBtnIconEl.className === "build_img_on") {
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