const formularioRegistraComunidad = document.querySelector('#formulario-registrar-comunidad')
const formularioInfo = document.querySelector('#formulario-registrar-info')


formularioRegistraComunidad.addEventListener('submit', (e) => {

    e.preventDefault();

    Swal.fire({
        title: "¡Gracias!",
        text: "Ya eres de la comunidad",
        icon: "success",
        customClass: {
            popup: 'rounded-2xl bg-slate-900 text-white p-6 shadow-2xl border border-slate-800',
            title: 'text-2xl font-bold font-titulo',
            htmlContainer: 'font-titulo',
            confirmButton: '!bg-black'
        }
    });

    e.target.reset();
});

formularioInfo.addEventListener('submit', (e) => {

    e.preventDefault();

    Swal.fire({
        title: "¡Gracias!",
        text: "Mensaje enviado",
        icon: "success",
        customClass: {
            popup: 'rounded-2xl bg-slate-900 text-white p-6 shadow-2xl border border-slate-800',
            title: 'text-2xl font-bold font-titulo',
            htmlContainer: 'font-titulo',
            confirmButton: '!bg-black'
        }
    });

    e.target.reset();
});

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


const frases = [
    "Lo que más me atrapó de ztek es la libertad de movimiento.Las prendas son increíblemente ligeras y elásticas, pero a la vez se nota que el tejido es súper resistente. Me encanta que puedo hacer una rutina exigente en la mañana y seguir con mis actividades del día sintiéndome cómodo y con un look impecable. Es esa versatilidad la que hace que no quiera usar otra cosa.",
    "A veces uno cree que los accesorios son un detalle secundario, pero los de ztek realmente marcaron un antes y un después en mis rutinas. Son el complemento perfecto para cada entrenamiento; se siente la calidad en cada detalle y te dan esa seguridad extra para exigirte más y llevar tu rendimiento al siguiente nivel.",
    "Termino de entrenar y lo último que quiero es complicarme lavando mis tenis. Los productos de limpieza de ztek son la solución más práctica y efectiva que he probado: quitan la suciedad al instante sin maltratar el material. De verdad son lo mejor para mantener las zapatillas como nuevas después de cualquier entrenamiento.",
];

let indice = 0;
const elementosTexto = document.querySelectorAll('.frase-dinamica');
const TIEMPO_CAMBIO_MS = 4000; // Cambia cada 4 segundos

setInterval(() => {
    // Desvanecer el texto actual
    elementosTexto.forEach(el => el.classList.add('opacity-0'));

    setTimeout(() => {
        // Avanzar al siguiente texto
        indice = (indice + 1) % frases.length;

        // Actualizar contenido y volver a mostrar
        elementosTexto.forEach(el => {
            el.textContent = frases[indice];
            el.classList.remove('opacity-0');
        });
    }, 500); // Espera a que termine la animación de opacidad
}, TIEMPO_CAMBIO_MS);