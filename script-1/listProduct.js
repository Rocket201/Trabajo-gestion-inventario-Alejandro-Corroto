import { fusiles } from "./products.js";

export const listProducts = () => {
    console.log("lista de productos carga");

    const table = document.getElementById("fusilesAsalto-table-events");

    // Borra las filas existentes en la tabla, excepto la primera fila (cabecera)
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    // Itera a través de los productos de la lista 'fusiles' y crea filas en la tabla
    fusiles.forEach(item => {
        const row = table.insertRow();

        // Crea celdas para mostrar el nombre, balas y precio del producto
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        cell1.innerHTML = item.nombre; // Muestra el nombre
        cell2.innerHTML = item.balas;  // Muestra la cantidad de balas
        cell3.innerHTML = item.precio; // Muestra el precio

        const editButton = document.createElement("button");
        editButton.innerText = "EDITAR";
        editButton.classList.add("edit-button");
        editButton.addEventListener("click", () => {
            const rowIndex = row.rowIndex - 1;
            if (rowIndex >= 0 && rowIndex < fusiles.length) {
                const productToEdit = fusiles[rowIndex];

                // Abre prompts para editar el nombre, la cantidad de balas y el precio
                const editedName = prompt("Editar nombre:", productToEdit.nombre);
                const editedAmmo = prompt("Editar balas:", productToEdit.balas);
                const editedPrice = prompt("Editar precio:", productToEdit.precio);

                if (editedName !== null && editedAmmo !== null && editedPrice !== null) {

                    // Actualiza el producto con los nuevos valores
                    fusiles[rowIndex] = {
                        ...productToEdit,
                        nombre: editedName,
                        balas: parseInt(editedAmmo),
                        precio: parseFloat(editedPrice)
                    };
                    // Llama a la función 'listProducts()' para actualizar la tabla
                    listProducts();
                }
            } else {
                console.log("Índice fuera de rango o producto no encontrado");
            }

        });

        cell4.appendChild(editButton);

        // Crea un botón de "BORRAR" para cada producto
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "BORRAR";
        deleteButton.addEventListener("click", () => {
            console.log("Botón BORRAR presionado");
            // Obtiene la fila que contiene el botón "BORRAR"

            const deleteRow = deleteButton.closest('tr');
            const rowIndex = deleteRow.rowIndex - 1;

            if (confirm("¿Estás seguro de que deseas borrar este producto?")) {
                // Elimina el producto de la lista 'fusiles' y la fila de la tabla
                fusiles.splice(rowIndex, 1);
                deleteRow.remove();
            } else {
                console.log("Índice fuera de rango o producto no encontrado");
            }
        });

        cell4.appendChild(deleteButton);

    });
}
