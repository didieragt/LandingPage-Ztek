const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const iconHamburger = document.getElementById('icon-hamburger');
const iconClose = document.getElementById('icon-close');
const header = document.getElementById('header');

let isScrolling = false;


menuBtn.addEventListener('click', () => {
    // Alternar visibilidad del menú
    mobileMenu.classList.toggle('hidden');

    // Alternar iconos
    iconHamburger.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');

    // Accesibilidad
    const isExpanded = mobileMenu.classList.contains('hidden') ? 'false' : 'true';
    menuBtn.setAttribute('aria-expanded', isExpanded);
});

window.addEventListener('scroll', () => {
    // 2. Técnica simple de "requestAnimationFrame" para optimizar el rendimiento
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            const isPastThreshold = window.scrollY > 20;

            // 3. Uso de toggle con condición (booleano)
            // Si isPastThreshold es true, añade 'bg-font-50/60' y quita 'bg-transparent'
            header.classList.toggle('bg-font-50/80', isPastThreshold);
            header.classList.toggle('transition-transform', isPastThreshold);
            header.classList.toggle('duration-500', isPastThreshold);
            header.classList.toggle('bg-transparent', !isPastThreshold);

            isScrolling = false;
        });

        isScrolling = true;
    }
});


AOS.init({
    duration: 2000,
})