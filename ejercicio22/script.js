// Autor: Geisel Pacheco
// Ejercicio 22: crear estructura nueva dentro del section y eliminar el h2 original

// seleccionar la section
const seccion = document.getElementById("seccion-principal");

// eliminar h2 original si existe. en nuestro caso si existe
const h2Original = seccion.querySelector("h2");
if (h2Original) {
    h2Original.remove();
}

// crear nuevo h2
const nuevoH2 = document.createElement("h2");
nuevoH2.textContent = "Titulo nuevo";
seccion.appendChild(nuevoH2);

// crear nuevo parrafo
const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Descripcion generada";
seccion.appendChild(nuevoParrafo);

// crear ul con 3 items
const lista = document.createElement("ul");

for (let i = 1; i <= 3; i++) {
    const li = document.createElement("li");
    li.textContent = "Item " + i;
    lista.appendChild(li);
}

// insertar lista
seccion.appendChild(lista);
