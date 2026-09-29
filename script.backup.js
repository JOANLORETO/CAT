cat > script.js <<'EOF'
// =========================================
// AÑO
// =========================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =========================================
// FORMULARIO
// =========================================

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const nombre =
            document.getElementById("nombre").value;

        const correo =
            document.getElementById("correo").value;

        const servicio =
            document.getElementById("servicio").value;

        const mensaje =
            document.getElementById("mensaje").value;

        const destino =
            "jorgeloreto@consultant.com";

        const asunto =
            encodeURIComponent(
                "Solicitud de asesoría - TECH"
            );

        const cuerpo =
            encodeURIComponent(

                "Hola TECH,\n\n" +

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

                "Enviado desde el sitio web de TECH."

            );

        window.location.href =
            "mailto:" +
            destino +
            "?subject=" +
            asunto +
            "&body=" +
            cuerpo;
    }
);


// =========================================
// GATO ANDROIDE
// =========================================

const mascot =
    document.getElementById(
        "catInteractive"
    );

const message =
    document.getElementById(
        "catMessage"
    );

const button =
    document.getElementById(
        "catButton"
    );


// =========================================
// MENSAJES
// =========================================

const messages = [

    "SISTEMA TECH EN LÍNEA.",

    "UNIDAD ANDROIDE ACTIVADA.",

    "¡Hola! Soy el asistente felino de TECH.",

    "TODOS LOS SISTEMAS FUNCIONANDO.",

    "¿Necesitas ayuda con tecnología?",

    "MODO DESARROLLO DE SOFTWARE ACTIVADO.",

    "CONEXIÓN CON TECH ESTABLECIDA.",

    "EXPLORANDO NUEVAS IDEAS.",

    "PROCESANDO NUEVOS PROYECTOS.",

    "TECNOLOGÍA + CONOCIMIENTO.",

    "LISTO PARA CONTINUAR.",

    "BIENVENIDO AL SISTEMA TECH."

];


let messageTimer;


// =========================================
// MOSTRAR MENSAJE
// =========================================

function showMessage(text) {

    message.textContent =
        text;

    message.classList.add(
        "show"
    );

    clearTimeout(
        messageTimer
    );

    messageTimer =
        setTimeout(
            function() {

                message.classList.remove(
                    "show"
                );

            },
            3000
        );
}


// =========================================
// INTERACCIÓN
// =========================================

function interact() {

    const random =
        messages[
            Math.floor(
                Math.random() *
                messages.length
            )
        ];

    showMessage(
        random
    );


    mascot.classList.remove(
        "jump"
    );

    void mascot.offsetWidth;

    mascot.classList.add(
        "jump"
    );
}


// =========================================
// CLICK EN MASCOTA
// =========================================

mascot.addEventListener(
    "click",
    function(event) {

        if (
            event.target === button ||
            event.target.classList.contains(
                "color-option"
            )
        ) {
            return;
        }

        interact();
    }
);


// =========================================
// BOTÓN
// =========================================

button.addEventListener(
    "click",
    function(event) {

        event.stopPropagation();

        interact();
    }
);


// =========================================
// OJOS SIGUEN EL CURSOR
// =========================================

const pupils =
    document.querySelectorAll(
        ".robot-eye span"
    );

document.addEventListener(
    "mousemove",
    function(event) {

        pupils.forEach(
            function(pupil) {

                const eye =
                    pupil.parentElement;

                const rect =
                    eye.getBoundingClientRect();

                const centerX =
                    rect.left +
                    rect.width / 2;

                const centerY =
                    rect.top +
                    rect.height / 2;

                const angle =
                    Math.atan2(
                        event.clientY - centerY,
                        event.clientX - centerX
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
            }
        );
    }
);


// =========================================
// COLORES
// =========================================

const colorOptions =
    document.querySelectorAll(
        ".color-option"
    );

const savedColor =
    localStorage.getItem(
        "techCatColor"
    ) ||
    "#39d9ff";


function setColor(color) {

    mascot.style.setProperty(
        "--cat-color",
        color
    );

    localStorage.setItem(
        "techCatColor",
        color
    );


    colorOptions.forEach(
        function(option) {

            option.classList.remove(
                "active"
            );

            if (
                option.dataset.color ===
                color
            ) {

                option.classList.add(
                    "active"
                );

            }

        }
    );
}


setColor(
    savedColor
);


// =========================================
// BOTONES DE COLOR
// =========================================

colorOptions.forEach(
    function(option) {

        option.addEventListener(
            "click",
            function(event) {

                event.stopPropagation();

                setColor(
                    option.dataset.color
                );

                showMessage(
                    "COLOR DEL SISTEMA ACTUALIZADO."
                );

            }
        );

    }
);


// =========================================
// MENSAJE INICIAL
// =========================================

setTimeout(
    function() {

        showMessage(
            "UNIDAD ANDROIDE TECH EN LÍNEA."
        );

    },
    1500
);


// =========================================
// MENSAJES AUTOMÁTICOS
// =========================================

setInterval(
    function() {

        if (
            Math.random() > .65
        ) {

            const random =
                messages[
                    Math.floor(
                        Math.random() *
                        messages.length
                    )
                ];

            showMessage(
                random
            );

        }

    },
    15000
);
EOF