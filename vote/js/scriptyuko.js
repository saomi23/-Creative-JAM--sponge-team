(function() {
	document.addEventListener('DOMContentLoaded', function(e){
		var jump1 = document.getElementById('vs_left');
		jump1.addEventListener('click', function() {
	    	location.href = "../comment_list/indexyuko.html?vs1";
	    })
	    var jump2 = document.getElementById('vs_right');
		jump2.addEventListener('click', function() { 
	    	location.href = "../comment_list/indexyuko.html?vs2";
	    })
    })
})()