/**
 * Autor: Alejandro González Corroto Fernández
 * GitHub: https://github.com/Rocket201/Trabajo-gestion-inventario-Alejandro-Corroto.git
 */
import { addProduct } from "./addproduct.js";
import { listProducts } from "./listProduct.js"
import { searchProduct } from "./searchProduct.js";

console.log("js,main carga");

    // Agrega un evento que se dispara cuando se carga el contenido de la página
    document.addEventListener("DOMContentLoaded", listProducts);

    // Agrega otro evento similar para cargar la lista de productos nuevamente (esto podría ser redundante)
    document.addEventListener("DOMContentLoaded", listProducts);

    // Agrega un evento que se dispara cuando se hace clic en el formulario para añadir un producto
    document.addEventListener("DOMContentLoaded", () => {
    const btnForm = document.getElementById("product-form-events");

    btnForm.addEventListener("click", () => {
        console.log("btnAñadir"); // Muestra un mensaje en la consola

        // Llama a la función 'addProduct()' cuando se hace clic en el formulario
        addProduct();
        });
    });

    // Agrega un evento que se dispara cuando se hace clic en el botón de búsqueda
    document.addEventListener("DOMContentLoaded", () => {
        const searchButton = document.getElementById("search-button");

        searchButton.addEventListener("click", () => {
        const searchInput = document.getElementById("search-product").value;

        // Llama a la función 'searchProduct()' con el valor ingresado en el campo de búsqueda
        searchProduct(searchInput);
        });
    });


