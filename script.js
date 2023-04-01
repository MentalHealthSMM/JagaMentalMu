$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 5) {
      $('#scrollBtn').fadeIn();
    } else {
      $('#scrollBtn').fadeOut();
    }
  });

  $('#scrollBtn').click(function() {
    $('html, body').animate({scrollTop : 0},800);
    return false;
    // console.log('berhasi;');
  });
});
