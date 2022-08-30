$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items: 2,
      slideBy: 1,
      margin: 32,
      navText: ['<img src="./img/dot-prev.png" alt="">', '<img src="./img/dot-next.png" alt="">'],
      navElement: 'div',
      nav: true,
      mouseDrag: false
  });
});
