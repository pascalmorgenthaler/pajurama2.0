const swiper4 = new Swiper('.swiper-bangers', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 200,
    allowTouchMove: true,
    pauseOnMouseEnter: true,
    autoplay: {
      delay: 4500,
      reverseDirection: true,
    },
    breakpoints: {
      // when window width is >= 320px
      400: {
        slidesPerView: "auto",
        spaceBetween: 20
      },
      // when window width is >= 480px
      550: {
        slidesPerView: "auto",
        spaceBetween: 20
      },
      // when window width is >= 640px
      830: {
        slidesPerView: "auto",
        spaceBetween: 20
      }
    },

      // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  
  });