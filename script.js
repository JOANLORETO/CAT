```javascript
// AÑO AUTOMÁTICO DEL SITIO

document.getElementById("year").textContent =
    new Date().getFullYear();


// FORMULARIO DE CONTACTO

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const nombre =
        document.getElementById("nombre").value;

    const correo =
        document.getElementById("correo").value;

    const servicio =
        document.getElementById("servicio").value;

    const mensaje =
        document.getElementById("mensaje").value;


    const correoDestino =
        "jorgeloreto@consultant.com";


    const asunto =
        encodeURIComponent(
            "Solicitud de asesoría - CAT"
        );


    const cuerpo =
        encodeURIComponent(

            "Hola CAT,\n\n" +

            "Nombre: " +
            nombre +
            "\n\n" +

            "Correo: " +
            correo +
            "\n\n" +

            "Servicio solicitado: " +
            servicio +
            "\n\n" +

            "Mensaje:\n" +
            mensaje +
            "\n\n" +

            "Enviado desde el sitio web de CAT."

        );


    window.location.href =
        "mailto:" +
        correoDestino +
        "?subject=" +
        asunto +
        "&body=" +
        cuerpo;

});
```
