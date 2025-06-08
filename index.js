const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 24,
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      992: {
        slidesPerView: 3
      },
    },
    navigation: {
      nextEl: ".slider-btn-next",
      prevEl: ".slider-btn-prev"
    }
  });
  