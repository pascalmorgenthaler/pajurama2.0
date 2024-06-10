const swiper9 = new Swiper('.swiper-website-portfolio', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'coverflow',
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 20,
    allowTouchMove: true,
    // autoplay: {
    //   delay: 4500,
    //   reverseDirection: true,
    //   pauseOnMouseEnter: true,
    // },
    breakpoints: {
      // when window width is >= 480px
      550: {
        slidesPerView: 3,
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