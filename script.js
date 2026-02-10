const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/* SCROLL ANIMATION */
const scrollElements = document.querySelectorAll(".scroll-animate");

const scrollAnimation = () => {
  scrollElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const visiblePoint = 120;

    if (elementTop < window.innerHeight - visiblePoint) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
    }
  });
};

window.addEventListener("scroll", scrollAnimation);
window.addEventListener("load", scrollAnimation);