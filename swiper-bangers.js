const swiper4 = new Swiper('.swiper-bangers', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 20,
    allowTouchMove: true,
    autoplay: {
      delay: 4500,
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
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 640px
      820: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    },

      // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  });