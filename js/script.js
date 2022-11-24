$(function() {
  $('#mainNav ul li').hover(
    function() {
      $(this)
        .children('ul.submenu')
        .slideDown('fast');
    },
    function() {
      $(this)
        .children('ul.submenu')
        .slideUp('slow');
    }
  );

  $('.regular').slick({
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
  });

  /* scrollup */
  let upShow = 380;
  let upFade = 500;
  let upDuration = 500;

  if ($(window).scrollTop() > upShow) {
    $('.scrollup').fadeIn();
  }

  $(window).scroll(function() {
    if ($(this).scrollTop() > upShow) {
      $('.scrollup').fadeIn(upFade);
    } else {
      $('.scrollup').fadeOut(upFade);
    }
  });
  $('.scrollup').click(function() {
    $('html, body').animate(
      {
        scrollTop: 0
      },
      upDuration
    );
    return false;
  });
  /* /scrollup */

  $('.moduleG #image-grid').each(function() {
    $(this).magnificPopup({
      delegate: 'a',
      type: 'image',
      preload: [0, 1],
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        arrowMarkup:
          '<button type="button" class="mfp-arrow mfp-arrow-%dir%"></button>'
      },
      closeMarkup: '<button type="button" class="mfp-close"></button>'
    });
  });
});
