function limpiarInput() {
    document.getElementById("textoIngresado").value = "";
}

function asignarTextoElemento(elemento, texto) {
    const elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function asignarEstiloElemento(elemento, clase) {
    const elementoHTML = document.querySelector(elemento);
    elementoHTML.classList.add(clase);
}

function quitarEstiloElemento(elemento, clase) {
    const elementoHTML = document.querySelector(elemento);
    elementoHTML.classList.remove(clase);
}

function verificarTextoIngresado(mensaje) {
    const expresionRegular = /^[a-z.!$%^&*()_+={}[\]:;<>,?@\\/\s]+$/;
    return expresionRegular.test(mensaje);
}

function copiar() {
    const parrafo = document.getElementById("textoAMostrar").textContent;
    let input = document.querySelector("#textoIngresado");
    if ((parrafo !== "Ingresa el texto que deseas encriptar o desencriptar." || document.getElementById("tituloDelEncriptado").textContent === "") && parrafo !== "Debe ingresar un texto con letras minúsculas. Además no se admiten letras con acentos ni caracteres especiales.") {
        input.value = parrafo;
    } 
}

function encriptar() {
    const mensaje = document.getElementById("textoIngresado").value;
    let mensajeEncriptado = "";
    let caracterModificado = "";

    if (mensaje.length > 0 && verificarTextoIngresado(mensaje)) {
        for (let i = 0; i < mensaje.length; i++) {
            switch (mensaje[i]) {
                case 'a':
                    caracterModificado = "ai";
                    break;
                case 'e':
                    caracterModificado = "enter";
                    break;
                case 'i':
                    caracterModificado = "imes";
                    break;
                case 'o':
                    caracterModificado = "ober";
                    break;
                case 'u':
                    caracterModificado = "ufat";
                    break;
                default:
                    caracterModificado = mensaje[i];
                    break;
            }
            mensajeEncriptado += caracterModificado;
        }
        asignarTextoElemento("#tituloDelEncriptado", "");
        asignarTextoElemento("#textoAMostrar", `${mensajeEncriptado}`);
        asignarEstiloElemento("#textoAMostrar", "container__parrafo");
        asignarEstiloElemento(".container__texto", "container__texto-modificado");
        asignarEstiloElemento(".container__persona", "container__persona-modificada");
        asignarEstiloElemento("#tituloDelEncriptado", "container__tituloEncriptado");
        quitarEstiloElemento("#container__boton-oculto", "container__boton-oculto");
        limpiarInput();
    } else if (mensaje.length === 0) {
        asignarTextoElemento("#tituloDelEncriptado", "Ningún mensaje fue encontrado");
        asignarTextoElemento("#textoAMostrar", "Ingresa el texto que deseas encriptar o desencriptar.");
        asignarEstiloElemento("#container__boton-oculto", "container__boton-oculto");
        quitarEstiloElemento("#textoAMostrar", "container__parrafo");
        quitarEstiloElemento(".container__texto", "container__texto-modificado");
        quitarEstiloElemento(".container__persona", "container__persona-modificada");
        quitarEstiloElemento("#tituloDelEncriptado", "container__tituloEncriptado");
        limpiarInput();
    }
    else {
        asignarTextoElemento("#tituloDelEncriptado", "Error");
        asignarTextoElemento("#textoAMostrar", "Debe ingresar un texto con letras minúsculas. Además no se admiten letras con acentos ni caracteres especiales.");
        asignarEstiloElemento("#container__boton-oculto", "container__boton-oculto");
        quitarEstiloElemento("#textoAMostrar", "container__parrafo");
        quitarEstiloElemento(".container__texto", "container__texto-modificado");
        quitarEstiloElemento(".container__persona", "container__persona-modificada");
        quitarEstiloElemento("#tituloDelEncriptado", "container__tituloEncriptado");
        limpiarInput();
    }
    return mensajeEncriptado;
}

function desencriptar() {
    const mensajeEncriptado = document.getElementById("textoIngresado").value;
    let mensajeDesencriptado = "";
    let caracterDesencriptado = "";
    let indice = 0;
    if (mensajeEncriptado.length > 0 && verificarTextoIngresado(mensajeEncriptado)) {
        while (indice < mensajeEncriptado.length) {
            switch (mensajeEncriptado[indice]) {
                case "a":
                    caracterDesencriptado = "a";
                    indice +=2;
                    break;
                case "e":
                    caracterDesencriptado = "e";
                    indice += 5;
                    break;
                case "i":
                case "o":
                case "u":
                    switch (mensajeEncriptado[indice]) {
                        case "i":
                            caracterDesencriptado = "i";
                            break;
                        case "o":
                            caracterDesencriptado = "o";
                            break;
                        default:
                            caracterDesencriptado = "u";
                            break;
                    }
                    indice += 4;
                    break;
                default:
                    caracterDesencriptado = mensajeEncriptado[indice];
                    indice ++;
                    break;
            }
            mensajeDesencriptado += caracterDesencriptado;
        }
        asignarTextoElemento("#textoAMostrar", `${mensajeDesencriptado}`);
        asignarTextoElemento("#tituloDelEncriptado", "");
        asignarEstiloElemento("#textoAMostrar", "container__parrafo");
        asignarEstiloElemento(".container__texto", "container__texto-modificado");
        asignarEstiloElemento(".container__persona", "container__persona-modificada");
        asignarEstiloElemento("#tituloDelEncriptado", "container__tituloEncriptado");
        quitarEstiloElemento("#container__boton-oculto", "container__boton-oculto");
        limpiarInput();
    } else if (mensajeEncriptado.length === 0) {
        asignarTextoElemento("#tituloDelEncriptado", "Ningún mensaje fue encontrado");
        asignarTextoElemento("#textoAMostrar", "Ingresa el texto que deseas encriptar o desencriptar.");
        asignarEstiloElemento("#container__boton-oculto", "container__boton-oculto");
        quitarEstiloElemento("#textoAMostrar", "container__parrafo");
        quitarEstiloElemento(".container__texto", "container__texto-modificado");
        quitarEstiloElemento(".container__persona", "container__persona-modificada");
        quitarEstiloElemento("#tituloDelEncriptado", "container__tituloEncriptado");
        limpiarInput();
    }
    else {
        asignarTextoElemento("#tituloDelEncriptado", "Error");
        asignarTextoElemento("#textoAMostrar", "Debe ingresar un texto con letras minúsculas. Además no se admiten letras con acentos ni caracteres especiales.");
        asignarEstiloElemento("#container__boton-oculto", "container__boton-oculto");
        quitarEstiloElemento("#textoAMostrar", "container__parrafo");
        quitarEstiloElemento(".container__texto", "container__texto-modificado");
        quitarEstiloElemento(".container__persona", "container__persona-modificada");
        quitarEstiloElemento("#tituloDelEncriptado", "container__tituloEncriptado");
        limpiarInput();
    }
    return mensajeDesencriptado;
}

asignarTextoElemento("#tituloDelEncriptado", "Ningún mensaje fue encontrado");
asignarTextoElemento("#textoAMostrar", "Ingresa el texto que deseas encriptar o desencriptar.");
