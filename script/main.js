$(document).ready(function(){
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });

  // scroll body to 0px on click
  $('#back-to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);

    return false;
  });

  $('nav a[href^="#"]').click(function(e) {

    e.preventDefault();

    var target = this.hash;
    var $target = $(target);
    if (! target) {
      $target = $('body');

    }

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - 70
    }, 500);
    // }, 500, 'swing', function() {
    //   window.location.hash = target;
    // });
  });

});
