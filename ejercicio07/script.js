// Autor: Geisel Pacheco
// Ejercicio 7: mostrar texto de cada li usando for...of

// seleccionar el ul por id
const lista = document.getElementById("lista");

// recorrer hijos li
for (let item of lista.children) {
    console.log(item.textContent);
}
