(function() {
	
	//sortNewTab
	var newTabEl                = null;
	var newTabBgEl              = null;
	var newList                 = null;
	
	//sortPassionTab
	var passionTabEl            = null;
	var passionTabBgEl          = null;
	var passionList             = null;
	

	function cacheDOMs () {
		
		//sortNewTab		
		newTabEl                = document.getElementById('tab_new');
		newTabBgEl              = document.getElementById('tab_l');
		newList                 = document.getElementById('sort_new');
		
		//passionNewTab		
		passionTabEl            = document.getElementById('tab_passion');
		passionTabBgEl          = document.getElementById('tab_r');
		passionList             = document.getElementById('sort_passion');
	};

	function setEvents () {
		
		//sortNewTab
		newTabEl.addEventListener("touchstart", function(e) {
			newTabBgEl.className     = "tab_bg_l";
			passionTabBgEl.className = "tab_bg_none";
			newList.className        = "sort";
			passionList.className        = "sort_none";
		});
		newTabEl.addEventListener("touchmove", function(e) {
			newTabBgEl.className     = "tab_bg_l";
			passionTabBgEl.className = "tab_bg_none";
			newList.className        = "sort";
			passionList.className        = "sort_none";
		});
		newTabEl.addEventListener("touchend", function(e) {
			newTabBgEl.className     = "tab_bg_l";
			passionTabBgEl.className = "tab_bg_none";
			newList.className        = "sort";
			passionList.className        = "sort_none";
		});
		
		//passiongNewTab
		passionTabEl.addEventListener("touchstart", function(e) {
			passionTabBgEl.className     = "tab_bg_r";
			newTabBgEl.className          = "tab_bg_none";
			passionList.className        = "sort";
			newList.className        = "sort_none";
		});
		passionTabEl.addEventListener("touchmove", function(e) {
			passionTabBgEl.className     = "tab_bg_r";
			newTabBgEl.className          = "tab_bg_none";
			passionList.className        = "sort";
			newList.className        = "sort_none";
		});
		passionTabEl.addEventListener("touchend", function(e) {
			passionTabBgEl.className     = "tab_bg_r";
			newTabBgEl.className          = "tab_bg_none";
			passionList.className        = "sort";
			newList.className        = "sort_none";
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