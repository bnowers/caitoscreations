const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next-unique',
        prevEl: '.swiper-button-prev-unique',
    },

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 640px
        1000: {
            slidesPerView: 2,
            spaceBetween: 20
        }
    }
});