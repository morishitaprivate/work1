$(function() {
  $('header').find('#menu-logo').click(function() {
    if ($('.header-bottom').hasClass('open')) {
      $('.header-bottom').slideUp();
      $('.header-bottom').removeClass('open');
    } else {
      $('.header-bottom').slideDown();
      $('.header-bottom').addClass('open');
    }
  });
});
