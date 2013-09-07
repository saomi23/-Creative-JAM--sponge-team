(function() {
	var arr = [];
	var i = 0;
	function createString(data){
			return '<div class="box">' +
				'<div class="vs_left">' +
					'<div class="icon1_frame">' +
						'<div class="icon1" style="background-image: url(' + data.img1 + ');"></div>' +
					'</div>' +
					'<div class="num1">' +
						'<div>0</div>' +
						'<div>0</div>' +
						'<div>0</div>' +
						'<div>0</div>' +
					'</div>' +
				'</div>' +
				'<div class="vs_title">' +
					'<h2>' + data.name1 + '</h2>' +
					'<div class="vs_img"></div>' +
					'<h2>' + data.name2 + '</h2>' +
				'</div>' +
				'<div class="vs_right">' +
					'<div class="icon2_frame">' +
						'<div class="icon2" style="background-image: url(' + data.img2 + ');"></div>' +
					'</div>' +
					'<div class="num2">' +
						'<div>0</div>' +
						'<div>0</div>' +
						'<div>0</div>' +
						'<div>0</div>' +
					'</div>' +
				'</div>' +
			'</div>' +
			'<p class="vs_comment">' + data.comment + '</p>' +
		'</li>'
	}

	if(window.localStorage){

		var local_storage = window.localStorage;
		var str = localStorage.getItem("sponge_key");
		arr = JSON.parse(str);
		if(arr!==null){
			for(var i=0;i<arr.length;i++){
				var elementLi = document.createElement('li');
				elementLi.className = "vs";
				elementLi.innerHTML = createString(arr[i]);
				var objBody = document.getElementById("sort_new");
				objBody.insertBefore(elementLi,objBody[0]);
			}
		}
	}

	var vsEl = document.getElementsByClassName("vs");
	vsEl[0].addEventListener('click',function(){
		location.href = "../vote/indexkinoko.html";
	});
	vsEl[1].addEventListener('click',function(){
		location.href = "../vote/indexsafari.html";
	});
	vsEl[2].addEventListener('click',function(){
		location.href = "../vote/indexyuko.html";
	});
	var vsEl2 = document.getElementById("vskinoko");
	vsEl2.addEventListener('click',function(){
		location.href = "../vote/indexkinoko.html";
	})
	var vsEl3 = document.getElementById("vssafari");
	vsEl3.addEventListener('click',function(){
		location.href = "../vote/indexsafari.html";
	})
	var vsEl4 = document.getElementById("vsyuko");
	vsEl4.addEventListener('click',function(){
		location.href = "../vote/indexyuko.html";
	})
})();