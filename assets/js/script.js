const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const iconHamburger = document.getElementById('icon-hamburger');
const iconClose = document.getElementById('icon-close');
const header = document.getElementById('header');

let isScrolling = false;


window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            const isPastThreshold = window.scrollY > 20;

            header.classList.toggle('bg-font-200/60', isPastThreshold);
            header.classList.toggle('transition-transform', isPastThreshold);
            header.classList.toggle('duration-500', isPastThreshold);
            header.classList.toggle('bg-transparent', !isPastThreshold);

            isScrolling = false;
        });

        isScrolling = true;
    }
});


//Carrusel


AOS.init({
    duration: 2000,
})