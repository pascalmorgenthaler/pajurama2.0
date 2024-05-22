const swiper2 = new Swiper('.swiper-free-small-images', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    allowTouchMove: false,
    autoplay: {
      delay: 3500,
      reverseDirection: true,
    },
    breakpoints: {
      // when window width is >= 320px
      400: {
        slidesPerView: 5,
        spaceBetween: 20
      },
      // when window width is >= 480px
      650: {
        slidesPerView: 7,
        spaceBetween: 20
      },
      // when window width is >= 640px
      830: {
        slidesPerView: 9,
        spaceBetween: 20
      }
    },

  
  });