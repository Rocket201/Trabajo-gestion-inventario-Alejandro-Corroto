import { fusiles } from "./products.js";
import { listProducts } from "./listProduct.js";

export function searchProduct(searchInput) {
    const table = document.getElementById("fusilesAsalto-table-events");
    const tbody = table.querySelector("tbody");
    tbody.innerHTML = ""; 

      // Filtra el arma basandose en la entrada del input
    const results = fusiles.filter(product => product.nombre.toLowerCase().includes(searchInput.toLowerCase()));

    if (results.length > 0) {
        // Si se encuentran resultados, e itera a traves de ellos creando filas
        results.forEach( product => {
            const row = table.insertRow();
            // Crea celdas para mostrar el nombre, balas y precio del producto
            const cellName = row.insertCell(0);
            cellName.innerHTML = product.nombre;

            const cellAmmo = row.insertCell(1);
            cellAmmo.innerHTML = product.balas;

            const cellPrice = row.insertCell(2);
            cellPrice.innerHTML = product.precio;

            //Creo el boton de editar
            const editButton = document.createElement("button");
            editButton.innerText = "EDITAR";
            editButton.classList.add("edit-button");
            editButton.addEventListener("click", () => {
                const rowIndex = row.rowIndex - 1;
                if (rowIndex >= 0 && rowIndex < results.length) {
                    const productToEdit = results[rowIndex];

                    // Muestra prompts para editar nombre, balas y precio

                    const editedName = prompt("Editar nombre:", productToEdit.nombre);
                    const editedAmmo = prompt("Editar balas:", productToEdit.balas);
                    const editedPrice = prompt("Editar precio:", productToEdit.precio);

                     // Si se proporcionan valores válidos, actualiza el producto
                    if (editedName !== null && editedAmmo !== null && editedPrice !== null) {
                        results[rowIndex] = {
                            ...productToEdit,
                            nombre: editedName,
                            balas: parseInt(editedAmmo),
                            precio: parseFloat(editedPrice)
                        };
                        // Llama a la función listProducts para actualizar la lista
                        listProducts();
                    }
                } else {
                    console.log("Producto no encontrado");
                }
            });

            const deleteButton = document.createElement("button");
            deleteButton.innerText = "BORRAR";
            deleteButton.addEventListener("click", () => {

                console.log("Botón BORRAR presionado");

                 // Obtiene la fila que contiene el botón "BORRAR"

                const deleteRow = deleteButton.closest('tr');
                const rowIndex = deleteRow.rowIndex - 1;
                 // Pregunta al usuario si está seguro de borrar el producto
                if (confirm("¿Estás seguro de que deseas borrar este producto?")) {
                    // Elimina el producto de la lista y la fila de la tabla
                    
                    results.splice(rowIndex, 1);
                    deleteRow.remove();
                } else {
                    console.log("Producto no encontrado");
                }
            });

            // Crea una celda para los botones de "EDITAR" y "BORRAR"

            const cellActions = row.insertCell(3);
            cellActions.appendChild(editButton);
            cellActions.appendChild(deleteButton);
        });
    } else {

        // Si no se encontraron resultados, muestra un mensaje

        const noResultsRow = table.insertRow();
        const noResultsCell = noResultsRow.insertCell(0);
        noResultsCell.colSpan = 4;
        noResultsCell.textContent = "No se encontraron resultados.";
    }
}