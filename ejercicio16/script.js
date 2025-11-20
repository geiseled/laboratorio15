// Autor: Geisel Pacheco
// Ejercicio 16: mover ultimo li al inicio

// seleccionar el primer ul
const lista = document.querySelector("ul");

// obtener el ultimo li
const ultimo = lista.lastElementChild;

// moverlo al inicio
lista.insertBefore(ultimo, lista.firstElementChild);
