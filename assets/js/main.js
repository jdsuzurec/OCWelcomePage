
!(function($) {
  "use strict";

  $('.scrollto').on('click',function(){
    const introductionTop = $('#introduction').offset().top;
    $("html").animate({scrollTop: introductionTop});
});

  // トップに戻るボタン
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

})(jQuery);