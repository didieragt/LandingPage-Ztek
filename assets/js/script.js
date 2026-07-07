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

document.addEventListener("DOMContentLoaded", () => {
    const carrusel = document.getElementById('carrusel');
    carrusel.innerHTML += carrusel.innerHTML;

    let posicion = 0;
    const velocidad = 1;

    function animar() {
        posicion += velocidad;

        if (posicion >= carrusel.scrollWidth / 2) {
            posicion = 0;
        }

        carrusel.style.transform = `translateX(-${posicion}px)`;
        requestAnimationFrame(animar);
    }

    animar();
})


AOS.init({
    duration: 2000,
})