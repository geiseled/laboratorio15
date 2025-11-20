// Autor: Geisel Pacheco
// Ejercicio 10: crear un h3 y colocarlo antes del primer p

// crear el h3
const nuevoH3 = document.createElement("h3");
nuevoH3.textContent = "Titulo h3 agregado con JS";

// querySelector seleccionar el primer parrafo
const primerParrafo = document.querySelector("p");

// insert Before insertar h3 antes del primer parrafo
document.body.insertBefore(nuevoH3, primerParrafo);
