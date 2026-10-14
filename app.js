let mostrandoDetalles = false;


const descripcionProyecto = document.querySelector('#descripcion-proyecto');
const botonDetalles = document.querySelector('#boton-detalles');
const contenedorDinamico = document.querySelector(`#contenedor-dinamico`);

botonDetalles.addEventListener('click', () => {
    if (mostrandoDetalles === false) {
        descripcionProyecto.textContent = "Tecnologías usadas: HTML5, CSS3 responsivo y JavaScript moderno.";
        botonDetalles.textContent = "Ocultar detalles";
        mostrandoDetalles = true;
    }
    else {
        descripcionProyecto.textContent = "Tienda online";
        botonDetalles.textContent = "Ver detalles";
        mostrandoDetalles = false;
    }
});

const misProyectos = [
    {   nombre: "Tienda Online",
        lenguaje: "HTML",
        dificultad: 8,
        imagen: "https://via.placeholder.com/150"
    },
    {
        nombre: "Estilos",
        lenguaje: "CSS",
        dificultad: 9,
        imagen: "https://via.placeholder.com/150"
    },
    {
        nombre: "Logica y funcionamiento",
        lenguaje: "JavaScript",
        dificultad: 10,
        imagen: "https://via.placeholder.com/150"
    }
];

misProyectos.forEach((proyecto) => {
    contenedorDinamico.innerHTML += `
        <article class="tarjeta-horizontal">
            <img src="${proyecto.imagen}" alt="Captura de ${proyecto.nombre}">

            <div class="info-proyecto">
                <h3>${proyecto.nombre}</h3>
                <p>Lenguaje: ${proyecto.lenguaje}</p>
                <p>Dificultad de aprendizaje: ${proyecto.dificultad}/10</p>
            </div>
        </article>
    `;
});