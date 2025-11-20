// Autor: Geisel Pacheco
// Ejercicio 19: contar div y mostrarlo en parrafo creado

// obtener todos los div del documento
const divs = document.querySelectorAll("div");

// cantidad de div
const cantidad = divs.length;

// crear parrafo dinamico
const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Cantidad de div: " + cantidad;

// agregar atributo personalizado
nuevoParrafo.setAttribute("resultado", "divs");

// insertarlo al final del body
document.body.appendChild(nuevoParrafo);
