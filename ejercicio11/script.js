// Autor: Geisel Pacheco
// Ejercicio 11: crear ul con 5 li e insertarlo en un section

// seleccionar el section
const section = document.getElementById("contenedor");

// crear ul
const lista = document.createElement("ul");

// crear y agregar li
for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = "Elemento " + i;
    lista.appendChild(li);
}

// insertar la lista en el section
section.appendChild(lista);
