// Autor: Geisel Pacheco
// Ejercicio 12: reemplazar un p por un div

// seleccionar el parrafo
const parrafo = document.getElementById("parrafo-remplazar");

// crear div nuevo
const nuevoDiv = document.createElement("div");
nuevoDiv.textContent = "Parrafo reemplazado";

// reemplazar p por div
parrafo.replaceWith(nuevoDiv);
