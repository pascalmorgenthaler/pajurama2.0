const swiper6 = new Swiper('.swiper-portfolio', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3.7,
    spaceBetween: 60,
    // centeredSlides: true,
    allowTouchMove: true,
    // autoplay: {
    //   delay: 4500,
    //   reverseDirection: true,
    // },
    breakpoints: {
      // when window width is >= 320px
      400: {
        slidesPerView: 3.7,
        spaceBetween: 20
      },
      // when window width is >= 480px
      550: {
        slidesPerView: 3.7,
        spaceBetween: 30
      },
      // when window width is >= 640px
      830: {
        slidesPerView: 3.7,
        spaceBetween: 40
      }
    },

  
  });