document.addEventListener('DOMContentLoaded', () => {
    const carrusel = document.getElementById('carrusel-track');
    if (!carrusel) return;

    let intervalo = null;
    let velocidad = 1; // 1 avanza a la derecha, -1 avanza a la izquierda

    // Función para obtener el límite exacto en tiempo real
    const getMaxScroll = () => carrusel.scrollWidth - carrusel.clientWidth;

    const stop = () => {
        if (intervalo) {
            clearInterval(intervalo);
            intervalo = null;
        }
    };

    const start = () => {
        stop(); // Limpia cualquier intervalo previo para no acumular velocidad

        intervalo = setInterval(() => {
            const maxScrollIzq = getMaxScroll();

            carrusel.scrollLeft += velocidad;

            // Usamos Math.ceil y comparaciones >= / <= para evitar errores de decimales
            if (Math.ceil(carrusel.scrollLeft) >= maxScrollIzq) {
                velocidad = -1; // Invierte dirección hacia la izquierda
            } else if (carrusel.scrollLeft <= 0) {
                velocidad = 1;  // Invierte dirección hacia la derecha
            }
        }, 15); // ~60 FPS
    };

    // Usamos mouseenter y mouseleave (NO mouseover/mouseout)
    carrusel.addEventListener('mouseenter', stop);
    carrusel.addEventListener('mouseleave', start);

    // Iniciar el carrusel
    start();
});