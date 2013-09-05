(function() {

	//backBtn
	var backBtnEl      = null;
	var backBtnIconEl  = null;
	
	//footer1
	var footer1        = null;
	var footerEl1      = null;
	
	//footer2
	var footer2        = null;
	var footerEl2      = null;
		
	//footer3
	var footer3        = null;
	var footerEl3      = null;
	

	function cacheDOMs () {
		//backBtn
		backBtnEl      = document.getElementById('back');
		backBtnIconEl  = document.getElementById('h_back');
		
		//buildBtn		
		buildBtnEl     = document.getElementById('build');
		buildBtnIconEl = document.getElementById('h_build');
		
		//footer1
		footer1        = document.getElementById('ftli01');
		footerEl1      = document.getElementsByTagName('a');
				
		//footer2
		footer2        = document.getElementById('ftli02');
				
		//footer3
		footer3        = document.getElementById('ftli03');
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
		alert("べっち");
	}, false);
})();