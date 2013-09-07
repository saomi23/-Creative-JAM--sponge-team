(function(){
	var obj = {
		battleID : "",
	    name1 : "",
	    name2 : "",
	    img1 : "",
	    img2 : "",
	    comment: ""
	};
	var input1 = document.getElementById('imageInput1');
	var preview1 = document.getElementById('preview1');
	var input2 = document.getElementById('imageInput2');
	var preview2 = document.getElementById('preview2');

	input1.addEventListener('change', function(e) {

		var file = e.target.files[0];
		console.log(file);
		var fr = new FileReader();
		fr.onload = function() {
			preview1.setAttribute('style', 'background-image:url(' +fr.result+ ');');
			obj.img1 = fr.result;
		}
		fr.readAsDataURL(file);
	},false);

	input2.addEventListener('change', function(e) {
		var file = e.target.files[0];
		var fr = new FileReader();
		fr.onload = function() {
			preview2.setAttribute('style', 'background-image:url(' +fr.result+ ');');
			obj.img2 = fr.result;
		}
		fr.readAsDataURL(file);
	},false);

	var builtbtn = document.getElementsByClassName("builtbtn_img");
	builtbtn[0].addEventListener('click',function(){
		var comment = document.getElementById("commentbox").value;
		obj.comment = comment;
		var name1 = document.getElementById("name1").value;
		var name2 = document.getElementById("name2").value;
		obj.name1 = name1;
		obj.name2 = name2;
		var local_storage = window.localStorage;
		var battleList = JSON.parse(localStorage.getItem("sponge_key"));
		if (!battleList) {
			battleList = [];
		}
		obj.battleID = battleList.length;
		battleList.unshift(obj);
		var json = JSON.stringify(battleList);
		localStorage.setItem("sponge_key", json);
	})
})();