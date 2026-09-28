// =========================================
// AÑO AUTOMÁTICO DEL SITIO
// =========================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =========================================
// FORMULARIO DE CONTACTO
// =========================================

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


// =========================================
// GATO INTERACTIVO CAT
// =========================================

const catInteractive =
    document.getElementById("catInteractive");

const catMessage =
    document.getElementById("catMessage");

const catButton =
    document.getElementById("catButton");


const catMessages = [

    "¡Hola! Soy CAT 🐱",

    "¡Miau! 😺",

    "¿Necesitas ayuda?",

    "¡Bienvenido a CAT!",

    "🐾 Estoy aquí para ayudarte",

    "¡Vamos a aprender!",

    "💻 Tecnología y conocimiento",

    "📚 ¿Listo para continuar?",

    "😸 ¡Qué bueno verte!",

    "🐱 Miau miau",

    "🚀 ¡Sigamos avanzando!",

    "💡 El conocimiento abre puertas"

];


let catMessageTimer;


// =========================================
// MOSTRAR MENSAJE
// =========================================

function showCatMessage(text) {

    catMessage.textContent = text;

    catMessage.classList.add("show");

    clearTimeout(catMessageTimer);

    catMessageTimer = setTimeout(function() {

        catMessage.classList.remove("show");

    }, 3000);

}


// =========================================
// INTERACCIÓN CON EL GATO
// =========================================

function interactWithCat() {

    const randomMessage =
        catMessages[
            Math.floor(
                Math.random() * catMessages.length
            )
        ];


    showCatMessage(randomMessage);


    catInteractive.classList.remove("jump");


    void catInteractive.offsetWidth;


    catInteractive.classList.add("jump");

}


// =========================================
// CLICK SOBRE EL GATO
// =========================================

catInteractive.addEventListener(
    "click",
    function(event) {

        if (event.target === catButton) {
            return;
        }

        interactWithCat();

    }
);


// =========================================
// BOTÓN DEL GATO
// =========================================

catButton.addEventListener(
    "click",
    function(event) {

        event.stopPropagation();

        interactWithCat();

    }
);


// =========================================
// OJOS SIGUEN EL CURSOR
// =========================================

const catPupils =
    document.querySelectorAll(".cat-pupil");


document.addEventListener(
    "mousemove",
    function(event) {

        catPupils.forEach(function(pupil) {

            const eye =
                pupil.parentElement;


            const rect =
                eye.getBoundingClientRect();


            const eyeX =
                rect.left +
                rect.width / 2;


            const eyeY =
                rect.top +
                rect.height / 2;


            const angle =
                Math.atan2(
                    event.clientY - eyeY,
                    event.clientX - eyeX
                );


            const distance = 5;


            const x =
                Math.cos(angle) *
                distance;


            const y =
                Math.sin(angle) *
                distance;


            pupil.style.transform =
                `translate(${x}px, ${y}px)`;

        });

    }
);


// =========================================
// MENSAJE INICIAL
// =========================================

setTimeout(function() {

    showCatMessage(
        "¡Hola! Soy la mascota de CAT 🐱"
    );

}, 1500);


// =========================================
// MENSAJES AUTOMÁTICOS
// =========================================

setInterval(function() {

    if (Math.random() > 0.6) {

        const randomMessage =
            catMessages[
                Math.floor(
                    Math.random() *
                    catMessages.length
                )
            ];


        showCatMessage(randomMessage);

    }

}, 12000);