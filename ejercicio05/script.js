// Autor: Geisel Pacheco
// Ejercicio 5: cambiar atributos src y alt de la primera imagen

// seleccionar la primera imagen
const imagen = document.querySelector("img");

// cambiar atributos
imagen.setAttribute("src", "imagen2.jpg");
imagen.setAttribute("alt", "logo JavaScript");
