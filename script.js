// Año automático en el pie de página
document.getElementById("year").textContent = new Date().getFullYear();


// Formulario de contacto
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const servicio = document.getElementById("servicio").value;
    const mensaje = document.getElementById("mensaje").value;

    const correoDestino = "TU_CORREO@EJEMPLO.COM";

    const asunto = encodeURIComponent(
        "Solicitud de asesoría - CAT"
    );

    const cuerpo = encodeURIComponent(
        `Hola CAT,

Nombre: ${nombre}

Correo: ${correo}

Servicio solicitado: ${servicio}

Mensaje:
${mensaje}

Enviado desde el sitio web de CAT.`
    );

    window.location.href =
        `mailto:${correoDestino}?subject=${asunto}&body=${cuerpo}`;
});