const swiper8 = new Swiper('.swiper-tourismus-banner', {
    // Optional parameters
    direction: 'horizontal',
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    loop: true,
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 0,
    allowTouchMove: true,
    autoplay: {
      delay: 3500,
      reverseDirection: false,
      pauseOnMouseEnter: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      // when window width is >= 480px
      550: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 640px
      820: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    },

      // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  });