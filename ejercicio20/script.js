// Autor: Geisel Pacheco
// Ejercicio 20: crear ul con li y span internos de forma dinamica

// crear ul
const lista = document.createElement("ul");
lista.setAttribute("dinamico", "lista"); // atributo para estilo

// cantidad de li
const cantidadItems = 5;

// crear li y span internos
for (let i = 1; i <= cantidadItems; i++) {
    const li = document.createElement("li");
    li.textContent = "Elemento " + i + " - ";

    const spanInterno = document.createElement("span");
    spanInterno.textContent = "Nivel interno";

    li.appendChild(spanInterno);
    lista.appendChild(li);
}

// insertar en el body
document.body.appendChild(lista);
