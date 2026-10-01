/** 
 * Module for chat page controller
 */
import { Mensaje } from './mensaje.js';

var mensajes = new Array();

function enviarMensaje() {
    let textoMensaje = document.getElementById("msgText").value;
    if (textoMensaje.length === 0) {
        return;
    }
    mensajes.push(new Mensaje(textoMensaje, new Date()));
    document.getElementById("msgText").value = "";
    document.getElementById("msgText").focus();
    actualizarMensaje();
}

function actualizarMensaje() {
    const listMsgs = document.getElementById("msgList");
    
    // Limpiamos la lista
    listMsgs.innerHTML = "";

    // Recorremos la colección de mensajes
    for (var i = 0; i < mensajes.length; i++) {
        const newLi = document.createElement("li");

        // Formateamos la fecha
        let fecha = new Intl.DateTimeFormat("es-ES", {
            day: "2-digit", 
            month: "2-digit", 
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }).format(mensajes[i].dateTime);

        // Añadimos el mensaje y la fecha formateados dentro del li
        newLi.innerHTML = '<span class="msg-content">' + mensajes[i].texto + '</span>' +
                          '<span class="msg-time">' + fecha + '</span>';

        listMsgs.appendChild(newLi);
    }
    if (listMsgs.lastElementChild) {
        listMsgs.lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
}

document.getElementById("sendButton").addEventListener('click', enviarMensaje);
document.addEventListener('DOMContentLoaded', actualizarMensaje);