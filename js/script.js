  
//mixitup
$(document).ready(function(){
  var mixer = mixitup('.mixit-up');
});

// owl carousel 
$(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10
  })
});

// slick slider 

$('.slick-wrapper').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slick-nav'
});
$('.slick-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slick-wrapper',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
});


// typed
var typed = new Typed(".auto-input", {
  strings: ["Tanzir Rahman Rifat", "Front-end Devloper"],

  loop: true,
  /**
   * @property {number} typeSpeed type speed in milliseconds
   */
  typeSpeed: 200,


});


// swipper 
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// canvas chart 
window.onload = function () {

  var options = {
    exportEnabled: true,
    animationEnabled: true,
    data: [
    {
      type: "splineArea",
      dataPoints: [
        { y: 15 },
        { y: 6 },
        { y: 14 },
        { y: 12 },
        { y: 19 },
        { y: 14 },
        { y: 26 },
        { y: 10 },
        { y: 14 },
        { y: 12 },
        { y: 19 },
        { y: 14 },
        { y: 26 },
        { y: 10 },
        { y: 22 }
      ]
    }
    ]
  };
  $("#chartContainer").CanvasJSChart(options);
  
  }