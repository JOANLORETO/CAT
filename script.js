// =========================
// AÑO AUTOMÁTICO
// =========================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// =========================
// FORMULARIO DE CONTACTO
// =========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const servicio = document.getElementById("servicio").value;
        const mensaje = document.getElementById("mensaje").value.trim();

        const correoDestino = "jorgeloreto@consultant.com";

        const asunto = encodeURIComponent(
            "Solicitud de asesoría - CAT"
        );

        const cuerpo = encodeURIComponent(
            "Hola CAT,\n\n" +
            "Nombre: " + nombre + "\n\n" +
            "Correo: " + correo + "\n\n" +
            "Servicio solicitado: " + servicio + "\n\n" +
            "Mensaje:\n" + mensaje + "\n\n" +
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

}


// =========================
// ANIMACIÓN AL HACER SCROLL
// =========================

const elements = document.querySelectorAll(
    ".service-card, .about-content, .contact-grid"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


elements.forEach(function (element) {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});


// =========================
// NAVEGACIÓN SUAVE
// =========================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});