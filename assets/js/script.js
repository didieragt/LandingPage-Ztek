document.addEventListener('DOMContentLoaded', () => {
    CarruselDos();
    const carrusel = document.getElementById('carrusel-track');

    if (!carrusel) return;

    let intervalo = null;
    let velocidad = 1;

    let isDown = false;
    let startX = 0;
    let scrollLeftInitial = 0;

    const getMaxScroll = () => carrusel.scrollWidth - carrusel.clientWidth;

    const stop = () => {
        if (intervalo) {
            clearInterval(intervalo);
            intervalo = null;
        }
    };

    const start = () => {
        stop();
        intervalo = setInterval(() => {
            if (isDown) return;
            const maxScrollIzq = getMaxScroll();
            carrusel.scrollLeft += velocidad;
            if (Math.ceil(carrusel.scrollLeft) >= maxScrollIzq) {
                velocidad = -1;
            } else if (carrusel.scrollLeft <= 0) {
                velocidad = 1;
            }
        }, 15);
    };

    carrusel.addEventListener('dragstart', (e) => e.preventDefault());

    const getPageX = (e) => {
        if (e.touches && e.touches.length > 0) {
            return e.touches[0].pageX;
        }
        return e.pageX;
    };

    const startDragging = (e) => {
        isDown = true;
        stop();

        startX = getPageX(e);
        scrollLeftInitial = carrusel.scrollLeft;

        carrusel.style.cursor = 'grabbing';
        document.body.style.userSelect = 'none';
    };

    const stopDragging = () => {
        if (!isDown) return;
        isDown = false;

        carrusel.style.cursor = 'grab';
        document.body.style.removeProperty('user-select');
        start();
    };

    const moveDragging = (e) => {
        if (!isDown) return;

        e.preventDefault();

        const x = getPageX(e);
        const walk = (x - startX) * 1.5;

        carrusel.scrollLeft = scrollLeftInitial - walk;
    };

    carrusel.addEventListener('mousedown', startDragging);
    window.addEventListener('mouseup', stopDragging);
    window.addEventListener('mousemove', moveDragging);

    carrusel.addEventListener('touchstart', startDragging, { passive: true });
    window.addEventListener('touchend', stopDragging);
    carrusel.addEventListener('touchmove', moveDragging, { passive: false });

    carrusel.addEventListener('mouseenter', () => {
        if (!isDown) stop();
    });

    carrusel.addEventListener('mouseleave', () => {
        if (!isDown) start();
    });

    carrusel.style.cursor = 'grab';
    start();
});

function CarruselDos() {
    const carruselDos = document.getElementById('carrusel-track-Dos');

    if (!carruselDos) return;

    let intervalo = null;
    let velocidad = 1;

    let isDown = false;
    let startX = 0;
    let scrollLeftInitial = 0;

    const getMaxScroll = () => carruselDos.scrollWidth - carruselDos.clientWidth;

    const stop = () => {
        if (intervalo) {
            clearInterval(intervalo);
            intervalo = null;
        }
    };

    const start = () => {
        stop();
        intervalo = setInterval(() => {
            if (isDown) return;
            const maxScrollIzq = getMaxScroll();
            carruselDos.scrollLeft += velocidad;
            if (Math.ceil(carruselDos.scrollLeft) >= maxScrollIzq) {
                velocidad = -1;
            } else if (carruselDos.scrollLeft <= 0) {
                velocidad = 1;
            }
        }, 15);
    };

    carruselDos.addEventListener('dragstart', (e) => e.preventDefault());

    const getPageX = (e) => {
        if (e.touches && e.touches.length > 0) {
            return e.touches[0].pageX;
        }
        return e.pageX;
    };

    const startDragging = (e) => {
        isDown = true;
        stop();

        startX = getPageX(e);
        scrollLeftInitial = carruselDos.scrollLeft;

        carruselDos.style.cursor = 'grabbing';
        document.body.style.userSelect = 'none';
    };

    const stopDragging = () => {
        if (!isDown) return;
        isDown = false;

        carruselDos.style.cursor = 'grab';
        document.body.style.removeProperty('user-select');
        start();
    };

    const moveDragging = (e) => {
        if (!isDown) return;

        e.preventDefault();

        const x = getPageX(e);
        const walk = (x - startX) * 1.5;

        carruselDos.scrollLeft = scrollLeftInitial - walk;
    };

    carruselDos.addEventListener('mousedown', startDragging);
    window.addEventListener('mouseup', stopDragging);
    window.addEventListener('mousemove', moveDragging);

    carruselDos.addEventListener('touchstart', startDragging, { passive: true });
    window.addEventListener('touchend', stopDragging);
    carruselDos.addEventListener('touchmove', moveDragging, { passive: false });

    carruselDos.addEventListener('mouseenter', () => {
        if (!isDown) stop();
    });

    carruselDos.addEventListener('mouseleave', () => {
        if (!isDown) start();
    });

    carruselDos.style.cursor = 'grab';
    start();
}