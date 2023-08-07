let navbar = document.querySelector(".navbar");
let menuBtn = document.getElementById("menu-btn");

if (menuBtn) {
  menuBtn.onclick = () => {
    navbar.classList.toggle("active");
  };
}

var swiper = new Swiper(".photos-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
  },
});
