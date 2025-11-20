// Autor: Geisel Pacheco
// Ejercicio 17: reordenar parrafos alfabeticamente

const contenedor = document.getElementById("contenedor");

// obtener los parrafos como un array. 
// Array.from() convierte la NodeList en un array real.
const parrafos = Array.from(contenedor.querySelectorAll("p"));

// ordenar los parrafos segun su texto. 
// localeCompare ordena cadenas alfabeticamente.
parrafos.sort((a, b) => a.textContent.localeCompare(b.textContent));

// volver a agregarlos al contenedor en el nuevo orden
// appendChild() mueve los elementos sin clonarlos, se reordenan.
parrafos.forEach(p => contenedor.appendChild(p));
