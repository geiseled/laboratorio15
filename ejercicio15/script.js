// Autor: Geisel Pacheco
// Ejercicio 15: clonar el primer article y agregarlo al final del main

// seleccionar primer article
const articulo = document.querySelector("article");

// clonar article con su contenido
const clon = articulo.cloneNode(true);

// seleccionar main
const main = document.querySelector("main");

// agregar clon al final
main.appendChild(clon);
