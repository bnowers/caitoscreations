const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500
    },
    navigation: false,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 640px
        1140: {
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next-unique',
                prevEl: '.swiper-button-prev-unique',
            },
            slidesPerView: 2,
            spaceBetween: 20
        }
    }
});

const hamburger = document.getElementById("hamburger-menu");
const navMenu = document.getElementById("nav-menu");

document.getElementById("hamburger-menu").addEventListener("click", (e) => {
    navMenu.classList.add("open");
    hamburger.classList.add("nav-open");
})

document.addEventListener('click', (e) => {
    let clickInside = navMenu.contains(e.target) || (hamburger.contains(e.target) && hamburger.classList.contains("nav-open"))
  
    if (!clickInside) {
        navMenu.classList.remove('open')
    }
  })