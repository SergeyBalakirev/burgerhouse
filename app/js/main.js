$(function () {


  $('.menu__slider-inner').slick({
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
  });

  $('.new__slider-inner').slick({
    infinite: true,
    arrows: false,
    dots: true,
  });


  var wow = new WOW(
    {
      boxClass: 'wow',
      animateClass: 'animate__animated',
      offset: 300,
      mobile: true,
      live: true,
      callback: function (box) {
      },
      scrollContainer: null,
      resetAnimation: true,
    }
  );
  wow.init();


});