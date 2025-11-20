// Autor: Geisel Pacheco
// Ejercicio 13: eliminar el ultimo p

// seleccionar todos los p
const parrafos = document.querySelectorAll("p");

// obtener el ultimo
const ultimo = parrafos[parrafos.length - 1];

// eliminarlo con remove
ultimo.remove();
