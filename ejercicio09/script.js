// Autor: Geisel Pacheco
// Ejercicio 9: crear un p y agregarlo al body

// crear elemento p
const nuevoParrafo = document.createElement("p");

// agregar texto
nuevoParrafo.textContent = "Elemento parrafo insertado con JS";

// insertar al final del body
document.body.appendChild(nuevoParrafo);

