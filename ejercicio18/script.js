// Autor: Geisel Pacheco
// Ejercicio 18: agregar data-index a cada section

// seleccionar todas las sections
const secciones = document.querySelectorAll("section");

// recorrer y agregar atributo
secciones.forEach((sec, index) => {
    sec.setAttribute("data-index", index); //setAttribute("data-index", index) agrega el atributo personalizado
});
