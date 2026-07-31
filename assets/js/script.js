document.addEventListener('DOMContentLoaded', () => {
    const carrusel = document.getElementById('carrusel-track');
    if (!carrusel) return;

    let intervalo = null;
    let velocidad = 1; // 1 hacia la derecha, -1 hacia la izquierda

    // Variables de control de arrastre
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
        stop(); // Limpia cualquier intervalo previo

        intervalo = setInterval(() => {
            if (isDown) return; // Si el usuario arrastra, pausar auto-scroll

            const maxScrollIzq = getMaxScroll();
            carrusel.scrollLeft += velocidad;

            if (Math.ceil(carrusel.scrollLeft) >= maxScrollIzq) {
                velocidad = -1; // Invierte hacia la izquierda
            } else if (carrusel.scrollLeft <= 0) {
                velocidad = 1;  // Invierte hacia la derecha
            }
        }, 15);
    };

    // 1. DESACTIVAR ARRASTRE NATIVO DE IMÁGENES EN DESKTOP
    carrusel.addEventListener('dragstart', (e) => e.preventDefault());

    // Helper para obtener posición X unificada (Mouse o Touch)
    const getPageX = (e) => {
        if (e.touches && e.touches.length > 0) {
            return e.touches[0].pageX;
        }
        return e.pageX;
    };

    const startDragging = (e) => {
        isDown = true;
        stop(); // Detener auto-scroll inmediatamente

        startX = getPageX(e);
        scrollLeftInitial = carrusel.scrollLeft;

        carrusel.style.cursor = 'grabbing';
        document.body.style.userSelect = 'none'; // Evita seleccionar texto al arrastrar
    };

    const stopDragging = () => {
        if (!isDown) return;
        isDown = false;

        carrusel.style.cursor = 'grab';
        document.body.style.removeProperty('user-select');
        start(); // Reanudar auto-scroll
    };

    const moveDragging = (e) => {
        if (!isDown) return;

        // Evita comportamientos por defecto del navegador en desktop
        e.preventDefault();

        const x = getPageX(e);
        const walk = (x - startX) * 1.5; // Ajusta este multiplicador según la sensibilidad deseada

        carrusel.scrollLeft = scrollLeftInitial - walk;
    };

    // --- EVENTOS MOUSE (DESKTOP) ---
    carrusel.addEventListener('mousedown', startDragging);
    // Escuchamos mousemove y mouseup en 'window' para que no se corte el movimiento si el cursor sale del contenedor
    window.addEventListener('mouseup', stopDragging);
    window.addEventListener('mousemove', moveDragging);

    // --- EVENTOS TOUCH (MÓVIL) ---
    carrusel.addEventListener('touchstart', startDragging, { passive: true });
    window.addEventListener('touchend', stopDragging);
    carrusel.addEventListener('touchmove', moveDragging, { passive: false });

    // --- PAUSA EN HOVER (CUANDO NO SE ESTÁ ARRASTRANDO) ---
    carrusel.addEventListener('mouseenter', () => {
        if (!isDown) stop();
    });

    carrusel.addEventListener('mouseleave', () => {
        if (!isDown) start();
    });

    // Iniciar estado inicial
    carrusel.style.cursor = 'grab';
    start();
});