const swiper4 = new Swiper('.swiper-bangers', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 200,
    allowTouchMove: true,
    autoplay: {
      delay: 4500,
      reverseDirection: true,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      // when window width is >= 320px
      400: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      // when window width is >= 480px
      550: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      // when window width is >= 640px
      830: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    },

      // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  
  });