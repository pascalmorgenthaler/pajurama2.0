const swiper1 = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    allowTouchMove: false,
    autoplay: {
      delay: 4500,
      reverseDirection: true,
    },
    breakpoints: {
      // when window width is >= 320px
      650: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      // when window width is >= 640px
      830: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    },

  
  });