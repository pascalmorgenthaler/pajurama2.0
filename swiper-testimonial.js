const swiper5 = new Swiper('.swiper-testimonial', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 200,
    allowTouchMove: true,
    pauseOnMouseEnter: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    // autoplay: {
    //   delay: 6500,
    //   reverseDirection: false,
    // },
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

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
  });