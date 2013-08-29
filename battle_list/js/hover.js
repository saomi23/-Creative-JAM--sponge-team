(function() {

	//backBtn
	var backBtnEl      = null;
	var backBtnIconEl  = null;

	function cacheDOMs () {
		//backBtn
		backBtnEl      = document.getElementById('back');
		backBtnIconEl  = document.getElementById('h_back');

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
	}

	document.addEventListener("DOMContentLoaded", function (e) {
		cacheDOMs();
		setEvents();
	}, false);
	
})();