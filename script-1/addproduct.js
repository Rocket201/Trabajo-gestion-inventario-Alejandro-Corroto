import { listProducts } from "./listProduct.js";
import { fusiles } from "./products.js";

export const addProduct = () => {
    console.log("añadir producto funciona"); // Muestra un mensaje en la consola

    // Obtiene el formulario con el ID "product-form-events"
    const armaForm = document.getElementById("product-form-events");

    // Agrega un evento de escucha al formulario cuando se envía
    armaForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Previene la recarga de la página al enviar el formulario

        // Obtiene los valores ingresados por el usuario para nombre, balas y precio
        const productName = document.getElementById("product-name").value;
        const productAmmo = parseInt(document.getElementById("product-ammo").value);
        const productPrice = parseFloat(document.getElementById("product-price").value).toFixed(2);

        // Comprueba si los valores son válidos (nombre no vacío y balas y precio son números)
        if (productName && !isNaN(productAmmo) && !isNaN(productPrice)) {
            // Crea un nuevo objeto de producto
            const newWeapon = {
                id: fusiles.length + 1, // Genera un nuevo ID
                nombre: productName,
                balas: productAmmo,
                precio: productPrice,
            }

            // Agrega el nuevo producto a la lista de fusiles
            fusiles.push(newWeapon);

            // Limpia el contenido de la tabla en la página
            const clearTable = document.getElementById("clear-table")
            clearTable.innerHTML = "";

            // Resetea el formulario
            armaForm.reset();

            // Llama a la función 'listProducts()' para actualizar la lista de productos en la página
            listProducts();
        }
    });
}

