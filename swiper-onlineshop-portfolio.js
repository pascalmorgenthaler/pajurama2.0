const swiper13 = new Swiper('.swiper-onlineshop-portfolio', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // effect: 'coverflow',
    slidesPerView: 2,
    centeredSlides: false,
    spaceBetween: 20,
    allowTouchMove: true,
    // autoplay: {
    //   delay: 4500,
    //   reverseDirection: true,
    //   pauseOnMouseEnter: true,
    // },
    breakpoints: {
      // when window width is >= 480px
      550: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 640px
      820: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    },

      // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  });