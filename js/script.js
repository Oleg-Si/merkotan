$(document).ready(function() {
  $('.slider__container').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      }
    ],
    prevArrow: '.slider__arrow--left',
    nextArrow: '.slider__arrow--right'
  });

  $('.menu__btn').on('click', () => {
    $('.overlay').addClass('overlay--open');
    $('.entry-form').addClass('open');
  });

  $('.overlay').on('click', () => {
    $('.overlay').removeClass('overlay--open');
    $('.entry-form').removeClass('open');
  });

  $("html").niceScroll();
});



