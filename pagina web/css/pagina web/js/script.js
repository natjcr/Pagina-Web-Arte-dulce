function modoSombrerero() {
    const body = document.body;
    // Intercambia una clase de CSS que cambia colores y fuentes
    body.classList.toggle("modo-oscuro");

    // Alerta personalizada
    alert("¡Cambiamos de realidad! 🎩🌀");
 
}

const boton = document.getElementById("btn-magico");
boton.addEventListener("click", modoSombrerero);


const blob = new Blob([contenidoHTML], { type: 'text/html' });

    // 3. Crear una URL temporal para ese archivo
    const urlNuevaPagina = URL.createObjectURL(blob);

    // 4. Abrir esa URL en una pestaña nueva
    window.open(urlNuevaPagina, '_blank');



