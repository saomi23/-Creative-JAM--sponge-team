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

})();