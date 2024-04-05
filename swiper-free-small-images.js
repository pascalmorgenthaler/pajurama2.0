const swiper2 = new Swiper('.swiper-free-small-images', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 9,
    spaceBetween: 20,
    autoplay: {
      delay: 4500,
      reverseDirection: true,
    },
    breakpoints: {
      // when window width is >= 320px
      400: {
        slidesPerView: 9,
        spaceBetween: 20
      },
      // when window width is >= 480px
      550: {
        slidesPerView: 9,
        spaceBetween: 20
      },
      // when window width is >= 640px
      830: {
        slidesPerView: 9,
        spaceBetween: 20
      }
    },

  
  });