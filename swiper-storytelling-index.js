const swiper3 = new Swiper('.swiper-storytelling-index', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    allowTouchMove: false,
    autoplay: {
      delay: 3500,
      reverseDirection: true,
    },
    breakpoints: {
      // when window width is >= 320px
      400: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      550: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 640px
      830: {
        slidesPerView: 1,
        spaceBetween: 20
      }
    },

  
  });