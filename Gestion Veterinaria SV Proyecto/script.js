// ==========================================
// ELEMENTOS
// ==========================================

const btnMenu = document.getElementById("btnMenu");
const menuPrincipal = document.getElementById("menuPrincipal");

const btnServicios = document.getElementById("btnServicios");
const submenuServicios = document.getElementById("submenuServicios");

const campoBuscar = document.getElementById("campoBuscar");


// ==========================================
// MENÚ MÓVIL
// ==========================================

if (btnMenu && menuPrincipal) {

    btnMenu.addEventListener("click", function () {

        menuPrincipal.classList.toggle("activo");

        const icono = btnMenu.querySelector("i");

        if (menuPrincipal.classList.contains("activo")) {

            icono.classList.remove("fa-bars");
            icono.classList.add("fa-xmark");

        } else {

            icono.classList.remove("fa-xmark");
            icono.classList.add("fa-bars");

        }

    });

}


// ==========================================
// SUBMENÚ SERVICIOS EN CELULAR
// ==========================================

if (btnServicios && submenuServicios) {

    btnServicios.addEventListener("click", function () {

        if (window.innerWidth <= 900) {

            submenuServicios.classList.toggle("activo");

        }

    });

}


// ==========================================
// CERRAR MENÚ AL TOCAR ENLACES
// ==========================================

const enlacesMenu = document.querySelectorAll("#menuPrincipal a");

enlacesMenu.forEach(function (enlace) {

    enlace.addEventListener("click", function () {

        if (window.innerWidth <= 900) {

            menuPrincipal.classList.remove("activo");

            submenuServicios.classList.remove("activo");

            if (btnMenu) {

                const icono = btnMenu.querySelector("i");

                icono.classList.remove("fa-xmark");
                icono.classList.add("fa-bars");

            }

        }

    });

});


// ==========================================
// AGENDAR CITA
// ==========================================

function mostrarMensaje() {

    alert(
        "🐾 Gestión Veterinaria SV\n\n" +
        "Gracias por confiar en nosotros.\n\n" +
        "Próximamente podrás seleccionar la fecha " +
        "y la hora de tu cita."
    );

}


// ==========================================
// EMERGENCIA
// ==========================================

function mostrarEmergencia() {

    const respuesta = confirm(
        "🚨 ATENCIÓN DE EMERGENCIA\n\n" +
        "Si tu mascota presenta dificultad para respirar, " +
        "convulsiones, sangrado abundante, pérdida del conocimiento, " +
        "intoxicación o una lesión grave, busca atención veterinaria " +
        "lo antes posible.\n\n" +
        "¿Deseas ir a la sección de emergencias?"
    );

    if (respuesta) {

        const emergencia = document.getElementById("emergencias");

        if (emergencia) {

            emergencia.scrollIntoView({
                behavior: "smooth"
            });

        }

    }

}


// ==========================================
// TIENDA
// ==========================================

function irTienda() {

    const tienda = document.getElementById("tienda");

    if (tienda) {

        tienda.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// ==========================================
// BUSCADOR
// ==========================================

function buscarContenido() {

    if (!campoBuscar) {
        return;
    }

    const texto = campoBuscar.value
        .trim()
        .toLowerCase();


    if (texto === "") {

        alert("Escribe algo para buscar.");

        campoBuscar.focus();

        return;

    }


    let destino = null;


    if (
        texto.includes("servicio") ||
        texto.includes("consulta") ||
        texto.includes("vacuna") ||
        texto.includes("vacunacion") ||
        texto.includes("vacunación") ||
        texto.includes("control")
    ) {

        destino = document.getElementById("servicios");

    }

    else if (
        texto.includes("primeros") ||
        texto.includes("auxilio") ||
        texto.includes("herida") ||
        texto.includes("quemadura") ||
        texto.includes("picadura")
    ) {

        destino = document.getElementById("primeros-auxilios");

    }

    else if (
        texto.includes("emergencia") ||
        texto.includes("urgencia")
    ) {

        destino = document.getElementById("emergencias");

    }

    else if (
        texto.includes("instalacion") ||
        texto.includes("instalación") ||
        texto.includes("instalaciones")
    ) {

        destino = document.getElementById("instalaciones");

    }

    else if (
        texto.includes("nosotros") ||
        texto.includes("veterinaria")
    ) {

        destino = document.getElementById("nosotros");

    }

    else if (
        texto.includes("tienda") ||
        texto.includes("producto")
    ) {

        destino = document.getElementById("tienda");

    }

    else if (
        texto.includes("blog") ||
        texto.includes("consejo")
    ) {

        destino = document.getElementById("blog");

    }

    else if (
        texto.includes("contacto") ||
        texto.includes("telefono") ||
        texto.includes("teléfono") ||
        texto.includes("correo")
    ) {

        destino = document.getElementById("contacto");

    }


    if (destino) {

        destino.scrollIntoView({
            behavior: "smooth"
        });

    } else {

        alert(
            "No encontramos resultados para: " +
            campoBuscar.value
        );

    }

}


// ==========================================
// ENTER EN BUSCADOR
// ==========================================

if (campoBuscar) {

    campoBuscar.addEventListener(
        "keydown",
        function (evento) {

            if (evento.key === "Enter") {

                buscarContenido();

            }

        }
    );

}


// ==========================================
// CERRAR MENÚ AL CAMBIAR TAMAÑO
// ==========================================

window.addEventListener("resize", function () {

    if (window.innerWidth > 900) {

        if (menuPrincipal) {
            menuPrincipal.classList.remove("activo");
        }

        if (submenuServicios) {
            submenuServicios.classList.remove("activo");
        }

        if (btnMenu) {

            const icono = btnMenu.querySelector("i");

            icono.classList.remove("fa-xmark");
            icono.classList.add("fa-bars");

        }

    }

});