var dniInput = document.getElementById("dni");

var regexDNI = /^\d{8}[A-Z]$/;

function comprobarDNI() {
    var mensaje = "";
    if (regexDNI.test(dniInput.value)) {
        console.log("DNI Válido")
    } else {
        mensaje = "El DNI no es válido.";
    }
    dniInput.setCustomValidity(mensaje);
}

dniInput.addEventListener("blur", comprobarDNI);

var fechaActual = new Date();
var fechaInput = document.getElementById("date");

function comprobarDate() {
    var fechaIngresada = new Date(fechaInput.value);
    var mensaje = "";
    if (fechaIngresada > fechaActual) {
        console.log('La fecha es válida.');
    } else {
        mensaje = "La fecha ingresada no es posterior a la fecha actual.";
    }
    fechaInput.setCustomValidity(mensaje);
}

fechaInput.addEventListener("blur", comprobarDate);