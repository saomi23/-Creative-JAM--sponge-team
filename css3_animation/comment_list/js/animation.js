/* ネガエリ */

var isTouch = ('ontouchstart' in window);
$('.btn').bind({
	'touchstart mousedown': function(e) {
},
'touchend mouseup': function(e) {
	$('.btn').addClass('anime01');
}
});

$('.btn')[0].addEventListener('webkitTransitionEnd', function (e) {
	$(this).removeClass('anime01');
});


/* ハゲドウ */

var isTouch = ('ontouchstart' in window);
$('#btn').bind({
'touchstart mousedown': function(e) {
},
'touchend mouseup': function(e) {
$('#btn').addClass('anime02');
}
});
$('#btn')[0].addEventListener('webkitTransitionEnd', function (e) {
	$(this).removeClass('anime02');
});