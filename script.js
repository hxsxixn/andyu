AOS.init();

var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        breakpoints: {
        550: {
      slidesPerView: 2,
      spaceBetween: 20
      },
    680: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 20
    }},
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
$(window).scroll(function(e){
                 if($(window).scrollTop()>700){
                   $(".nav").css("opacity","0");
                   $(".header").css("animation","none");
                 }else{
                   $(".nav").css("opacity","1");
                   $(".header").css("animation","bgi 12s both")
                 }
});