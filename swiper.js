const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 60,
    allowTouchMove: false,
    autoplay: {
      delay: 4500,
      reverseDirection: true,
    },
    breakpoints: {
      // when window width is >= 320px
      400: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      // when window width is >= 480px
      550: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      // when window width is >= 640px
      830: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    },

  
  });