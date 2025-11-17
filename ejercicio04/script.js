// Autor: Geisel Pacheco
// Ejercicio 4: cambiar el contenido de todos los p y numerarlos

// seleccionar todos los p
const parrafos = document.getElementsByTagName("p");

// recorrer y actualizar texto 
for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].textContent = "Texto actualizado dinamicamente " + (i + 1);
}
