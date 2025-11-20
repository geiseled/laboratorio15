// Autor: Geisel Pacheco
// Ejercicio 8: cambiar color de fondo de cada div

// seleccionar todos los div
const divs = document.querySelectorAll("div");

// colores para asignar
const colores = ["blue", "green", "yellow", "pink", "gray"];

// recorrer divs y asignar color con for
for (let i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = colores[i];
}

