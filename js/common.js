(function() {

	//backBtn
	var backBtnEl      = null;
	var backBtnIconEl  = null;

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
				history.back();
			}
		});

	}

	document.addEventListener("DOMContentLoaded", function (e) {
		cacheDOMs();
		setEvents();
	}, false);
})();