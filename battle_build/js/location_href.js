/*
(function() {
	document.addEventListener("DOMContentLoaded", function(e) {
		
		// 作成ボタン
		
		var builtbtnEl = document.getElementById('builtbtn');
		builtbtnEl.addEventListener('mousedown',function(){
			builtbtnEl.className = "builtbtn_img_on";
		})
		builtbtnEl.addEventListener('mouseup',function(){
			builtbtnEl.className = "builtbtn_img";
			location.href = "../battle_list/index.html"
		})
	})
	
})();
*/

(function() {

	//作成ボタン
	var builtbtnEl = null;
	var builtbtnBg = null;

	function cacheDOMs () {
		
		//作成ボタン
		builtbtnEl = document.getElementById('builtbtn');
		builtbtnBg = document.getElementById('built');
		
	
	};

	function setEvents () {
		//作成ボタン
		builtbtnEl.addEventListener("click", function(e) {
			builtbtnBg.className = "builtbtn_img_on";
			location.href = "../battle_list/index.html"
		});
/*
		builtbtnEl.addEventListener("mousemove", function(e) {
			builtbtnBg.className = "builtbtn_img";
		});
		builtbtnEl.addEventListener("mousemove", function(e) {
			if (builtbtnBg.className === "back_img") {
				location.href = "../battle_list/index.html"
			}
		});
*/

	}

	document.addEventListener("DOMContentLoaded", function (e) {
		cacheDOMs();
		setEvents();
	}, false);
})();