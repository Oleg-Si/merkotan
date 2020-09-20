const iframe = document.querySelector('#ifarme');
const mask = document.querySelector('#mask');

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

  const updateIframeHeight = () => {
    console.log(window.innerWidth);
    if (window.innerWidth <= 1899) {
      const param = mask.getBoundingClientRect();
      $('#ifarme').css('height', param.height - 30);
    } else {
      $('#ifarme').css('height', 665);
    }
  }

  updateIframeHeight();

  $(window).resize(function() {
    updateIframeHeight();
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



