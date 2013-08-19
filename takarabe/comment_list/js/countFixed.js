var num1    = $('.num1'),
    offset = num1.offset();

$(window).scroll(function () {
  if($(window).scrollTop() > offset.top - 20) {
    num1.addClass('fixed');
  } else {
    num1.removeClass('fixed');
  }
});