const cardsUno = document.getElementsByClassName('card')

document.addEventListener('DOMContentLoaded', () => {

    let indice = 1;

    function cambiarImagen() {
        indice++;
        if (indice >= cardsUno.length) {
            indice = 0;
        }
        console.log(cardsUno[indice])
    }

    //setInterval(cambiarImagen, 3000);
})