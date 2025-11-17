// Autor: Geisel Pacheco
// Ejercicio 6: agregar clase resaltado y eliminar oculto

// seleccionar todos los li
const elementos = document.querySelectorAll("li");

// recorrer y modificar clases
for (let li of elementos) {
    li.classList.add("resaltado");
    li.classList.remove("oculto");
}
