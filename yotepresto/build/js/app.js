$(document).ready(function () {
    $(".header__menu").on("click", function () {
      $("nav").slideToggle();
    });
  });



  //<!--Initialize Swiper-->
 
    var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
    });
