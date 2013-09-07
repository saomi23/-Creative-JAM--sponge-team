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
		
		//iconNameRight
		iconNameRight.addEventListener("click", function(e) {
			iconNameRightBg.className = "icon_name_bg_r_on";
			setTimeout(function(){
				location.href = "../comment_list/index.html?vs2"
				iconNameRightBg.className = "icon_name_bg_r";
			},500);
		});
		
	}

	document.addEventListener("DOMContentLoaded", function (e) {
		cacheDOMs();
		setEvents();
	}, false);

})();