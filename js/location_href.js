(function() {

	//スタートボタン
	var startbtnEl = null;
	var startbtnBg = null;

	function cacheDOMs () {
		
		//スタートボタン
		startbtnEl = document.getElementById('start');
		startbtnBg = document.getElementById('startBtn');
		
	
	};

	function setEvents () {
		//スタート
		startbtnEl.addEventListener("click", function(e) {
			startbtnBg.className = "start_bg_on";
/*
			setTimeout(function(){
				location.href = "battle_list/index.html"
				startbtnBg.className = "start_bg";
			},500);
*/
		});

	}

	document.addEventListener("DOMContentLoaded", function (e) {
		cacheDOMs();
		setEvents();
	}, false);
})();