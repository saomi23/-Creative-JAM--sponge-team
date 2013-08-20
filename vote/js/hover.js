(function() {

	//iconNameLeft
	var iconNameLeft       = null;
	var iconNameLeftBg     = null;
	
	//iconNameRight
	var iconNameRight      = null;
	var iconNameRightBg    = null;

	function cacheDOMs () {
		//iconNameLeft
		iconNameLeft      = document.getElementById('name_l');
		iconNameLeftBg    = document.getElementById('icon_name_l');
		
		//iconNameRight		
		iconNameRight     = document.getElementById('name_r');
		iconNameRightBg   = document.getElementById('icon_name_r');
	};

	function setEvents () {
		//iconNameLeft
		iconNameLeft.addEventListener("click", function(e) {
			iconNameLeftBg.className = "icon_name_bg_l_on";
			setTimeout(function(){location.href = "../comment_list/index.html?vs1"},500);
		});
/*
		iconNameLeft.addEventListener("onMouseMove", function(e) {
			iconNameLeftBg.className = "icon_name_bg_l";
		});
*/
/*
		iconNameLeft.addEventListener("onMouseUp", function(e) {
			if (iconNameLeftBg.className === "icon_name_bg_l_on") {
				location.href = "../comment_list/index.html?vs1"
			}
		});
*/
		
		//iconNameRight
		iconNameRight.addEventListener("click", function(e) {
			iconNameRightBg.className = "icon_name_bg_r_on";
			setTimeout(function(){
				location.href = "../comment_list/index.html?vs2"
				iconNameRightBg.className = "icon_name_bg_r";
			},500);
		});
/*
		iconNameRight.addEventListener("mousemove", function(e) {
			iconNameRightBg.className = "icon_name_bg_r";
		});
*/
/*
		iconNameRight.addEventListener("mouseup", function(e) {
			if (iconNameRightBg.className === "icon_name_bg_r_on") {
				location.href = "../comment_list/index.html?vs2"
			}
		});
*/
		
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