$(function () {

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