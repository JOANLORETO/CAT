cat > script.js <<'EOF'
// =========================================
// AÑO AUTOMÁTICO
// =========================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =========================================
// FORMULARIO DE CONTACTO
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


        const correoDestino =
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
            correoDestino +
            "?subject=" +
            asunto +
            "&body=" +
            cuerpo;

    }
);


// =========================================
// MASCOTA ANDROIDE TECH
// =========================================

const catInteractive =
    document.getElementById(
        "catInteractive"
    );


const catMessage =
    document.getElementById(
        "catMessage"
    );


const catButton =
    document.getElementById(
        "catButton"
    );


const catMessages = [

    "Sistema TECH en línea.",

    "¡Hola! Soy la mascota androide de TECH.",

    "¿Necesitas ayuda con algún proyecto?",

    "¡Bienvenido a TECH!",

    "🐾 Modo tecnológico activado.",

    "💻 Desarrollo de software listo.",

    "📚 ¿Listo para continuar?",

    "🚀 Sigamos avanzando.",

    "💡 El conocimiento abre nuevas posibilidades.",

    "🌐 Conexión establecida.",

    "⚡ Sistemas TECH funcionando.",

    "🔷 Explorando nuevas ideas."

];


let catMessageTimer;


// =========================================
// MOSTRAR MENSAJE
// =========================================

function showCatMessage(text) {

    catMessage.textContent =
        text;


    catMessage.classList.add(
        "show"
    );


    clearTimeout(
        catMessageTimer
    );


    catMessageTimer =
        setTimeout(
            function() {

                catMessage.classList.remove(
                    "show"
                );

            },
            3000
        );

}


// =========================================
// INTERACCIÓN
// =========================================

function interactWithCat() {

    const randomMessage =
        catMessages[
            Math.floor(
                Math.random() *
                catMessages.length
            )
        ];


    showCatMessage(
        randomMessage
    );


    catInteractive.classList.remove(
        "jump"
    );


    void catInteractive.offsetWidth;


    catInteractive.classList.add(
        "jump"
    );

}


// =========================================
// CLICK SOBRE EL ANDROIDE
// =========================================

catInteractive.addEventListener(
    "click",
    function(event) {

        if (
            event.target === catButton ||
            event.target.classList.contains(
                "color-option"
            )
        ) {
            return;
        }


        interactWithCat();

    }
);


// =========================================
// BOTÓN HOLA
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
    document.querySelectorAll(
        ".android-pupil"
    );


document.addEventListener(
    "mousemove",
    function(event) {

        catPupils.forEach(
            function(pupil) {

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
                        event.clientY -
                        eyeY,

                        event.clientX -
                        eyeX
                    );


                const distance =
                    5;


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
// CAMBIO DE COLOR
// =========================================

const colorOptions =
    document.querySelectorAll(
        ".color-option"
    );


const savedCatColor =
    localStorage.getItem(
        "techCatColor"
    ) ||
    "#39d9ff";


function setCatColor(color) {

    catInteractive.style.setProperty(
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


    showCatMessage(
        "Color del sistema actualizado."
    );

}


setCatColor(
    savedCatColor
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


                const color =
                    option.dataset.color;


                setCatColor(
                    color
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

        showCatMessage(
            "Sistema TECH en línea. ¡Hola! 👋"
        );

    },
    1800
);


// =========================================
// MENSAJES AUTOMÁTICOS
// =========================================

setInterval(
    function() {

        if (
            Math.random() > .65
        ) {

            const randomMessage =
                catMessages[
                    Math.floor(
                        Math.random() *
                        catMessages.length
                    )
                ];


            showCatMessage(
                randomMessage
            );

        }

    },
    15000
);
EOF