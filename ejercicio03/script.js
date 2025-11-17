// Autor: Geisel Pacheco
// Ejercicio 3: seleccionar el primer h2 y mostrar su texto

// document.getElementsByTagName selecciona todos los h2
const titulosH2 = document.getElementsByTagName("h2");

// tomar el primero
const primerH2 = titulosH2[0];

// mostrar el texto en consola
console.log(primerH2.textContent);

