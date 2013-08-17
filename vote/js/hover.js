/*
(function() {
	document.addEventListener("DOMContentLoaded", function(e) {
		var backEl = document.getElementById('back_img');
		var backBtn = document.getElementById('back');
		console.log(backEl);
		backBtn.addEventListener("touchstart", function(e) {
			backEl.style.backgroundImage = 'url(../images/back_on.png)';
			}
			)
		})
	}, false);
*/


(function() {


	document.addEventListener("DOMContentLoaded", function(e) {
		document.getElementById('a_back').addEventListener("touchstart", function(e) {
			var element = document.getElementById('h_back');
			console.log(element);
			element.className = "h_back_img_on";
		})
		document.getElementById('a_build').addEventListener("touchstart", function(e) {
			var element = document.getElementById('h_build');
			console.log(element);
			element.className = "h_build_img_on";
		})
		
	})
})();


/*
(function() {
	document.addEventListener("DOMContentLoaded", function(e) {
		document.getElementById('a_back').addEventListener("touchstart", function(e) {
			var element = document.getElementById('h_back');
			console.log(element);
			element.className = "back_img_on";
		})
		document.getElementById('a_back').addEventListener("touchend", function(e) {
			var element = document.getElementById('h_back');
			console.log(element);
			element.className = "back_img";
			location.href = "../battle_list/index.html"
		})
	})
})();
*/