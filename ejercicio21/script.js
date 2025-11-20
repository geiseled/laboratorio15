// Autor: Geisel Pacheco
// Ejercicio 21: crear 3 parrafos y eliminar el segundo

// obtener contenedor
const contenedor = document.getElementById("contenedor");

// crear 3 parrafos
for (let i = 1; i <= 3; i++) {
    const p = document.createElement("p");
    p.textContent = "Parrafo " + i;
    contenedor.appendChild(p);
}

// seleccionar todos los parrafos
const parrafos = contenedor.querySelectorAll("p");

// eliminar el segundo (indice 1)
parrafos[1].remove();
