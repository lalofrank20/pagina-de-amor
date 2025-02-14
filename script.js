// Función para crear corazones animados
function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerHTML = "❤️";
    document.body.appendChild(corazon);

    // Posición aleatoria
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.animationDuration = Math.random() * 2 + 3 + "s"; // Entre 3s y 5s

    // Eliminar corazones después de caer
    setTimeout(() => {
        corazon.remove();
    }, 5000);
}

// Generar corazones cada 500ms
setInterval(crearCorazon, 500);
// FECHA DE ANIVERSARIO (Ajusta la fecha según la tuya)
const fechaInicio = new Date("2023-07-25"); // Formato: "YYYY-MM-DD"

// Función para calcular los días juntos
function calcularDiasJuntos() {
    const fechaActual = new Date();
    const diferenciaTiempo = fechaActual - fechaInicio;
    const diasJuntos = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));

    // Mostrar en la página
    document.getElementById("diasJuntos").textContent = diasJuntos;
}

// Llamar a la función al cargar la página
calcularDiasJuntos();

document.addEventListener("DOMContentLoaded", function () {
    // 🎶 LISTA DE CANCIONES (Asegúrate de que los archivos estén bien nombrados)
    const canciones = [
        "audio/Carla%20Morrison%20-%20Eres%20T%C3%BA.mp3",
        "audio/Bhavi%2C%20LOUTA%20-%20LA%20MIRADA.mp3",
        "audio/M.A.I.mp3"
    ];

    let indiceActual = 0;
    const audioPlayer = document.getElementById("audioPlayer");

    // Cargar la primera canción
    function cargarCancion() {
        audioPlayer.src = canciones[indiceActual];
        audioPlayer.load(); // Cargar el nuevo archivo
        audioPlayer.play(); // Iniciar reproducción
    }

    // Función para reproducir o pausar
    function playPause() {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    }

    // Función para cambiar de canción
    function cambiarCancion(direccion) {
        indiceActual += direccion;

        if (indiceActual >= canciones.length) {
            indiceActual = 0; // Volver a la primera canción
        } else if (indiceActual < 0) {
            indiceActual = canciones.length - 1; // Volver a la última canción
        }

        cargarCancion();
    }

    // Cambiar a la siguiente canción cuando termine la actual
    audioPlayer.addEventListener("ended", function () {
        cambiarCancion(1);
    });

    // Botones
    document.querySelector(".btn-prev").addEventListener("click", function () {
        cambiarCancion(-1);
    });

    document.querySelector(".btn-play").addEventListener("click", function () {
        playPause();
    });

    document.querySelector(".btn-next").addEventListener("click", function () {
        cambiarCancion(1);
    });

    // Cargar la primera canción al iniciar
    cargarCancion();
});
